import * as React from "react";
import { useNavigate } from "react-router-native"
import { Text, StyleSheet, BackHandler } from "react-native"
import { HomeMainCtn, AppLogo, BackgroundImageCtn, ShipCtn, IdCtnView, PlayerNameCtn, InputPlayerName, EditLogo, ButtonsContainer, LeaveButton, TextLeaveButton } from "./styles";
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelSquareView, SP_AestheticLine } from "../../styles_general";
import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { MainUserState, updateMainUser, setMainUser } from "../../reducers/mainUser/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import HomeModal from "./index_modal";
import ShipImage from "../../components/ShipImage";
import { actualUser, createUser } from "../../databaseObjects/UsersDAO";
import uuid from 'react-native-uuid';
import { randomUserName } from "../../services/RandomNameGenerator";
import axios from 'axios';
import { API_URL} from "../../services/WebSocket";
import { socket, ws_GenericResponse } from "../../services/WebSocket";
import { data_connect } from "../../models/types/data_connect";
import { data_players } from "../../models/types/data_players";
import { setLobbyGameId, setLobbyPlayer } from "../../reducers/lobby/reducer";
import { GameState } from "../../reducers/game/reducer";
import ErrorMessage from "../../components/ErrorMessage";


const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const [modalVisible, setModalVisible] = useState(false);
    const [errorBoxVisible, setErrorBoxVisible] = useState(false);
    const [errorBoxMessage, setErrorBoxMessage] = useState('');

    const [mainUserId, setMainUserId] = useState(0);
    const [mainUserUuid, setMainUserUuid] = useState('');
    const [mainUserName, setMainUserName] = useState('');
    const [editableName, setEditableName] = useState(false);

    const mainUserState: MainUserState = 
        useAppSelector((state) => state.mainUser);
        
    const gameState: GameState = 
        useAppSelector((state) => state.game);

    // Get the Main user of the app, if it doesn't exist then create a new user
    useEffect(() => {
        actualUser()
        .then((mainUser) => {
            if (mainUser.length <= 0) {
                // Create a new user with a random UUID and Name
                const newUser = User(1 ,uuid.v4().toString(), randomUserName());
                // Add the new user in database
                createUser(newUser);
                // Add the new user to the reducer
                mainUser.push(newUser)
                dispatch(setMainUser(mainUser));
                // Update the user information
                setMainUserId(mainUser[0].id);
                setMainUserUuid(mainUser[0].uuid);
                setMainUserName(mainUser[0].name);
            }
            else {
                dispatch(setMainUser(mainUser));
                setMainUserId(mainUser[0].id);
                setMainUserUuid(mainUser[0].uuid);
                setMainUserName(mainUser[0].name);
            }
        })
    }, []);
    
    // Lock or unlock the input Name
    const toggleButtonEditableName = () => {
        setEditableName(!editableName);
      };

    // Update the userName in Redux and in the Database
    const saveUserName = () => {
        const userToUpdate =
            User(
                mainUserId,
                mainUserUuid,
                mainUserName
            );
        dispatch(updateMainUser(userToUpdate));
        toggleButtonEditableName;
    };

    // Call the API when creating a new game then redirect the user to the lobby
    const api_createGame = () => {
        axios.post(API_URL + "create-game")
        .then((response) => {
            const gameId: string = response.data.id;
            dispatch(setLobbyGameId(gameId));
            const dataConnect: data_connect = data_connect("connect", {
                gameId: gameId,
                playerId: mainUserUuid,
                playerName: mainUserName
            });
            socket.send(JSON.stringify(dataConnect));
        })
        .catch((error) => {
            setErrorBoxMessage("error");
            setErrorBoxVisible(true);
            setTimeout(() => {
                setErrorBoxMessage('');
                setErrorBoxVisible(false);
            }, 3000);
        })
    };

    // Parse the message to the right data everytime a message is return from the WebSocket
    socket.onmessage = (event => {
        if (event.data != "ping") {
            const objectResponse: ws_GenericResponse = JSON.parse(event.data);
            if (objectResponse.type == "players") {
                const dataPlayer: data_players = JSON.parse(event.data);
                dispatch(setLobbyPlayer(dataPlayer.data.players))
                navigate("/Lobby");
            }
        }
    });



    if (!mainUserState.MainUser) {
        return (
            <BackgroundImageCtn 
            source={require('../../images/MainMenu_Background_Left_Planet.png')}
            resizeMode="cover"
            />
        );
    }
    return (
        <>
        <BackgroundImageCtn 
            source={require('../../images/MainMenu_Background_Left_Planet.png')}
            resizeMode="cover"
        />
        <ShipCtn>
            <ShipImage/>
        </ShipCtn>
        <AppLogo
            source={require('../../images/SPACEOPERATORS_logo_bold_strech.png')}
            resizeMode="contain"
        />

        <HomeModal
            visible={modalVisible}
            setModalVisible={setModalVisible}
            setMainUserName={setMainUserName}
            userName={mainUserName}
            userUuid={mainUserUuid}
            onSaveUserName={saveUserName}
        />

        <IdCtnView>
            <SP_AestheticLine/>
            <SP_LabelSquareView mini style={{marginRight: 3}}>
                <Text style={{color: Colors.text, fontSize: 14, fontFamily: 'roboto-bold'}}>ID</Text>
            </SP_LabelSquareView>
            <SP_InfoView transparent centerContent>
                <Text style={{color: Colors.text, fontSize: 14, fontFamily: 'roboto-regular'}}>{mainUserUuid}</Text>
            </SP_InfoView>
        </IdCtnView>
        
        <HomeMainCtn>
            <PlayerNameCtn style={styles.shadow}>
                <SP_AestheticLine maxi/>
                <InputPlayerName 
                    style={{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 20 }}
                    editable={editableName}
                    defaultValue={mainUserName}
                    onChangeText={setMainUserName}
                    onBlur={saveUserName}
                    >
                </InputPlayerName>
                <SP_Button style={{width: 48}} onPress={toggleButtonEditableName}>
                    {editableName ? <EditLogo
                        source={require('../../../assets/icons/user-check.png')}
                        resizeMode="contain"
                    /> : 
                    <EditLogo
                        source={require('../../../assets/icons/user-edit.png')}
                        resizeMode="contain"
                    />}
                </SP_Button>
            </PlayerNameCtn>

            <ButtonsContainer>
                <SP_Button primary 
                    style={{borderWidth: 1.5, borderColor: '#C7532F'}}
                    onPress={() => setModalVisible(true)}>
                    <SP_TextButton >REJOINDRE UNE PARTIE</SP_TextButton>
                </SP_Button>
                <SP_Button
                    style={{marginTop: 12, borderWidth: 1.5, borderColor: Colors.input}}
                    onPress={() => api_createGame()}
                    >
                    <SP_TextButton>CREER UNE PARTIE</SP_TextButton>
                </SP_Button>
                <SP_Button 
                    style={{marginTop: 12, borderWidth: 1.5, borderColor: Colors.input}}
                    onPress={() => navigate("/Historic")}>
                    <SP_TextButton>HISTORIQUE DES PARTIES</SP_TextButton>
                </SP_Button>
                <LeaveButton onPress={() => (BackHandler.exitApp(), socket.close()) }>
                    <TextLeaveButton>QUITTER</TextLeaveButton>
                </LeaveButton>
            </ButtonsContainer>
        </HomeMainCtn>
        
        <ErrorMessage isDisplayed={errorBoxVisible} errorMessage={errorBoxMessage}></ErrorMessage>
        </>
    )
};



const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.82,
        shadowRadius: 2,
        elevation: 3
    }
})




export default Home;
import * as React from "react";
import { useNavigate } from "react-router-native"
import { StyleSheet, Animated } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_AestheticLine, SP_LabelView, SP_TextLabel } from "../../styles_general";
import { useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import { ContentView, GameIdCtn, GameIdInput, HeaderButton, HeaderButtonIcon, HeaderCtn, HeaderText, HeaderView, ViewCtn, ViewModal, PlayerNameCtn, InputPlayerName, EditLogo, ModalErrorMessage } from "./styles_modal";
import { data_connect } from "../../models/types/data_connect";
import { ws_GenericResponse } from "../../services/WebSocket";
import { socket } from "../../services/WebSocket";
import { LobbyState, setLobbyPlayer, setLobbyGameId } from "../../reducers/lobby/reducer";
import { GameState } from "../../reducers/game/reducer";
import { data_players } from "../../models/types/data_players";


interface Props {
    visible: boolean,
    userName: string,
    userUuid: string,
    setModalVisible: (modalVisible: boolean) => void,
    setMainUserName: (mainUserName: string) => void
    onSaveUserName: () => void
}

const HomeModal: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [editableName, setEditableName] = useState(false);
    const [gameId, setNewGameId] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;;

    // Lock or unlock the input Name
    const toggleButtonEditableName = () => {
        setEditableName(!editableName);
      };

    // Shacking window animation
    const showErrorFeedbackAnimation = () => {
        Animated.sequence([
            Animated.timing(position, {
                toValue: { x: 5, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 0, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 5, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 0, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
        ]).start();
    }

    // Trigger the animation and display the error message
    const showErrorFeedback = (errorMessage: string) => {
        setErrorMessage(errorMessage);
        setDisplayError(true);
        setTimeout(() => {
            setDisplayError(false);
            setErrorMessage('');
        }, 3000);
    }

    // Join a game create by another user
    const joinAGame = () => {
        const dataConnect: data_connect = data_connect("connect", {
            gameId: gameId,
            playerId: Props.userUuid,
            playerName: Props.userName
        });
        socket.send(JSON.stringify(dataConnect));
    };

    if (Props.visible == true) {
        socket.onmessage = (event => {
            if (event.data != "ping") {
                // Check if the data seem's OK then transform it to an object and navigate to the next page if there is at least one player
                const objectResponse: ws_GenericResponse = JSON.parse(event.data);
                if (objectResponse.type == "players") {
                    const dataPlayer: data_players = JSON.parse(event.data);
                    if (dataPlayer.data.players.length <= 0) {
                        showErrorFeedbackAnimation();
                        showErrorFeedback("Cette partie n'existe pas");
                    }
                    else {
                        dispatch(setLobbyGameId(gameId));
                        dispatch(setLobbyPlayer(dataPlayer.data.players))
                        navigate("/Lobby");
                    } 
                }
            }
        });
    }

    //---------------------STYLES--------------------//

    const style = StyleSheet.create({
        ViewModal: {
            position: 'relative',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            borderWidth: 1.5,
            borderRadius: 4,
            borderColor: Colors.uiborder,
            zIndex: Props.visible ? 31 : -10,
            opacity: 1
        }
    });

    return (
        <>
        <ViewModal visible={Props.visible} >
        <Animated.View style={[style.ViewModal, position.getLayout()]}>

            <HeaderCtn>
                <HeaderView><HeaderText>ENTREZ LES INFORMATIONS</HeaderText></HeaderView>
                <HeaderButton onPress={() => Props.setModalVisible(false)}>
                    <HeaderButtonIcon
                        source={require('../../../assets/icons/cross.png')}
                        resizeMode="contain"
                    />
                </HeaderButton>
            </HeaderCtn>

            <ContentView>
                <GameIdCtn>
                    <SP_AestheticLine style={styles.shadow}/>
                    <SP_LabelView style={styles.shadow}><SP_TextLabel maxi style={{fontSize: 18}}>PARTIE ID</SP_TextLabel></SP_LabelView>
                    <GameIdInput
                        style={styles.shadow}
                        defaultValue={gameId}
                        onChangeText={setNewGameId}
                    ></GameIdInput>
                </GameIdCtn>

                <PlayerNameCtn>
                    <SP_AestheticLine style={styles.shadow} />
                    <InputPlayerName 
                        style={[{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 20 }, styles.shadow]}
                        editable={editableName}
                        defaultValue={Props.userName}
                        onChangeText={Props.setMainUserName}
                        onBlur={Props.onSaveUserName}
                        >
                    </InputPlayerName>
                    <SP_Button mini style={[{width: 40}, styles.shadow]} onPress={toggleButtonEditableName}>
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

                <ModalErrorMessage  displayError={displayError}>{errorMessage}</ModalErrorMessage>
                
                <SP_Button text 
                    style={[{position: 'relative', bottom: 0}, styles.shadow]}
                    primary onPress={() => joinAGame()}>
                    <SP_TextButton italic>REJOINDRE LA PARTIE</SP_TextButton>
                </SP_Button>
            </ContentView>

        </Animated.View>
        </ViewModal>

        <ViewCtn visible={Props.visible}>
        </ViewCtn>
        </>
    )
}

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
});

export default HomeModal;
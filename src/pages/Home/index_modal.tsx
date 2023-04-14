import * as React from "react";
import { useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_AestheticLine, SP_LabelView, SP_TextLabel } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import { API_URL } from "../../index";
import { User } from "../../models/User";
import { MainUserState, updateMainUser } from "../../reducers/mainUser/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"
import { ContentView, GameIdCtn, GameIdInput, HeaderButton, HeaderButtonIcon, HeaderCtn, HeaderText, HeaderView, ViewCtn, ViewModal, PlayerNameCtn, InputPlayerName, EditLogo } from "./styles_modal";
import { data_connect } from "../../models/types/data_connect";
import { socket_send_connect } from "../../services/WebSocket";
import { socket, socketResponse } from "../../services/WebSocket";
import { LobbyState, setLobbyPlayer } from "../../reducers/lobby/reducer";
import { GameState, setGameId } from "../../reducers/game/reducer";


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

    const lobbyState: LobbyState = 
        useAppSelector((state) => state.lobby);

    const gameState: GameState = 
        useAppSelector((state) => state.game);

        
    // Lock or unlock the input Name
    const toggleButtonEditableName = () => {
        setEditableName(!editableName);
      };

    // Join a game create by another user
    const joinAGame = () => {
        const dataConnect: data_connect = (
            data_connect(
                gameId,
                Props.userUuid,
                Props.userName
            )
        )
        socket_send_connect(dataConnect);
        dispatch(setGameId(gameId));
        navigate("/Lobby");
    };

    // socket.onmessage = (event => {
    //     const playerData = socketResponse(event.data)
    //     if (playerData.type == "players") {
    //         dispatch(setLobbyPlayer(playerData.data))
    //         if (playerData.data) {
    //             console.log("null")
    //         }
    //         console.log(playerData.data)
    //     }
    // });


    return (
        <>
        <ViewModal visible={Props.visible}>

            <HeaderCtn>
                <HeaderView><HeaderText>ENTER YOUR PARTY INFO</HeaderText></HeaderView>
                <HeaderButton onPress={() => Props.setModalVisible(false)}>
                    <HeaderButtonIcon
                        source={require('../../../assets/icons/cross.png')}
                        resizeMode="contain"
                    />
                </HeaderButton>
            </HeaderCtn>

            <ContentView>
                <GameIdCtn>
                    <SP_AestheticLine/>
                    <SP_LabelView><SP_TextLabel maxi style={{fontSize: 18}}>GAME ID</SP_TextLabel></SP_LabelView>
                    <GameIdInput
                        defaultValue={gameId}
                        onChangeText={setNewGameId}
                    ></GameIdInput>
                </GameIdCtn>

                <PlayerNameCtn>
                    <SP_AestheticLine />
                    <InputPlayerName 
                        style={{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 20 }}
                        editable={editableName}
                        defaultValue={Props.userName}
                        onChangeText={Props.setMainUserName}
                        onBlur={Props.onSaveUserName}
                        >
                    </InputPlayerName>
                    <SP_Button mini style={{width: 40}} onPress={toggleButtonEditableName}>
                        <EditLogo
                            source={require('../../../assets/icons/user-edit.png')}
                            resizeMode="contain"
                        />
                    </SP_Button>
                </PlayerNameCtn>
                
                <SP_Button text primary onPress={() => joinAGame()}>
                    <SP_TextButton italic>JOIN THE GAME</SP_TextButton>
                </SP_Button>
            </ContentView>

        </ViewModal>

        <ViewCtn visible={Props.visible} pointerEvents="none"></ViewCtn>
        </>
    )
}

export default HomeModal;
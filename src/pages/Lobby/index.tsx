import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine, SP_TextLabel } from "../../styles_general";
import { useAppSelector, useAppDispatch } from "../../store";
import { MainUserState, updateMainUser, setMainUser } from "../../reducers/mainUser/reducer";
import { BackgroundImageCtn, ContentFooterCtn, ContentFooterInfo, ContentFooterText, ContentHeaderCtn, ContentHeaderText, ContentScrollViewCtn, FooterButtonReady, GameIdText, GameInfoCtn, GameInfoLabel, GameInfoLabelText, LobbyContentCtn, LobbyLaunchButton, LobbyMainCtn, LobbyWindow, OperatorImage, PlayerNameCtn, PlayerStatusCtn, StatusButton, StatusButtonText } from "./styles";
import axios from 'axios';
import { API_URL} from "../../index";
import { socket, ws_GenericResponse } from "../../services/WebSocket";
import { data_connect } from "../../models/types/data_connect";
import { data_players } from "../../models/types/data_players";
import { LobbyState, setLobbyPlayer } from "../../reducers/lobby/reducer";
import { GameState, setGameId } from "../../reducers/game/reducer";


const Lobby: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const mainUserState: MainUserState = 
        useAppSelector((state) => state.mainUser);

    const lobbyState: LobbyState = 
        useAppSelector((state) => state.lobby);

    const gameState: GameState = 
        useAppSelector((state) => state.game);


    useEffect(() => {
        dispatch(setMainUser);
    }, []);

    useEffect(() => {
        console.log("LobbyPage - Lobby state reducer : " + JSON.stringify(lobbyState.players))
    }, [lobbyState])

    useEffect(() => {
        
    }, [gameState])


    // Parse the message to the right data everytime a message is return from the WebSocket
    socket.onmessage = (event => {
        if (event.data != "ping") {
            const objectResponse: ws_GenericResponse = JSON.parse(event.data);
            if (objectResponse.type == "players") {
                const dataPlayer: data_players = JSON.parse(event.data);
                console.log(JSON.stringify(dataPlayer));

                console.log(dataPlayer.data.players)
                dispatch(setLobbyPlayer(dataPlayer.data.players))
                console.log('new reducer state : ' + JSON.stringify(lobbyState.players))
            }
        }



        // if (event.data != "ping") {
        //     const playerData = socketResponse(event.data);
        //     if (playerData.type == "players") {
        //         console.log(playerData.data)
        //         dispatch(setLobbyPlayer(playerData.data))
        //         console.log('new reducer state : ' + JSON.stringify(lobbyState.players))
        //     }
        // }
    });




    return (
        <>

        <LobbyWindow style={{position: 'relative', width: '100%', height: '100%', flex: 1, flexDirection: 'column'}}>
            <BackgroundImageCtn 
                source={require('../../images/Lobby_Background.png')}
                resizeMode="cover"
            /> 

        <LobbyMainCtn>
            <GameInfoCtn>
                <SP_Button primary style={{width: 48}} onPress={() => navigate("/")}>
                <Image
                    style={{width: 24, position: 'relative', left: -1}}
                    source={require('../../../assets/icons/angle-double-left.png')}
                    resizeMode="contain"
                />
                </SP_Button>
                <GameInfoLabel><GameInfoLabelText>GAME ID</GameInfoLabelText></GameInfoLabel>
                <SP_InfoView straight centerContent>
                    <GameIdText>{gameState.gameId}</GameIdText>
                </SP_InfoView>
            </GameInfoCtn>

            <LobbyContentCtn>
                <ContentHeaderCtn>
                    <ContentHeaderText>STATUT DES JOUEURS</ContentHeaderText>
                    <Image
                        style={{width: 24, position: 'relative', left: -1}}
                        source={require('../../../assets/icons/astronaut-icon.png')}
                        resizeMode="contain"
                    />
                </ContentHeaderCtn>

                <ContentScrollViewCtn>

                    <PlayerStatusCtn>
                        <PlayerNameCtn>
                            <SP_AestheticLine></SP_AestheticLine>
                            <SP_InfoView transparent>
                                <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>ICEP1G</Text>
                            </SP_InfoView>
                        </PlayerNameCtn>
                        <StatusButton isReady>
                            <StatusButtonText isReady>PRÊT</StatusButtonText>
                        </StatusButton>
                    </PlayerStatusCtn>

                    <PlayerStatusCtn>
                        <PlayerNameCtn>
                            <SP_AestheticLine></SP_AestheticLine>
                            <SP_InfoView transparent>
                            <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>Klaes_Ashford</Text>
                            </SP_InfoView>
                        </PlayerNameCtn>
                        <StatusButton >
                            <StatusButtonText>EN ATTENTE</StatusButtonText>
                        </StatusButton>
                    </PlayerStatusCtn>

                </ContentScrollViewCtn>

                <ContentFooterCtn>
                    <ContentFooterInfo>
                        <ContentFooterText>EN ATTENTE DE JOUEURS ...</ContentFooterText>
                    </ContentFooterInfo>
                    <FooterButtonReady>
                        <SP_TextButton italic>READY</SP_TextButton>
                    </FooterButtonReady>
                </ContentFooterCtn>

            </LobbyContentCtn>

            <LobbyLaunchButton>
                <SP_TextButton italic>DEMARRER LA PARTIE</SP_TextButton>
            </LobbyLaunchButton>

        </LobbyMainCtn>


            <OperatorImage 
                source={require('../../images/Lobby_Player.png')}
                resizeMode="contain"
                style={{bottom: '11%', left: '63%'}}
            />
            <OperatorImage 
                source={require('../../images/Lobby_Player.png')}
                resizeMode="contain"
                style={{bottom: '8%', left: '86%'}}
            />
            <OperatorImage 
                source={require('../../images/Lobby_Player.png')}
                resizeMode="contain"
                style={{bottom: '13%', left: '50%'}}
            />
            <OperatorImage 
                source={require('../../images/Lobby_Player.png')}
                resizeMode="contain"
                style={{bottom: '4%', left: '76%'}}
            />
            <OperatorImage 
                source={require('../../images/Lobby_Player.png')}
                resizeMode="contain"
                style={{bottom: '9%', left: '40%'}}
            />

        </LobbyWindow>

        </>
    )
};

export default Lobby
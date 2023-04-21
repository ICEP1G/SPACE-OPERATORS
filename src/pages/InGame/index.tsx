import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import space_operators_db from "../../database/space_operators_db";
import { API_URL} from "../../services/WebSocket";
import { socket, ws_GenericResponse } from "../../services/WebSocket";
import { data_connect } from "../../models/types/data_connect";
import { data_players } from "../../models/types/data_players";
import { LobbyState, setLobbyPlayer } from "../../reducers/lobby/reducer";
import { GameState, setGameId, setGameOperation, setGameShipIntegrity } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { BackGroundGameImageCtn, GameInfoCtn, GamePlayerInfoFirstCtn, GamePlayerInfoCtn, GameStateCtn, GameStateInfo, InGameWindow, PlanetBackGroundCtn, RoundCtn, ShipCockpitBackGroundCtn, ShipIntegrityCtn, GamePlayerInfo, GamePlayerInfoSecondCtn, ShipIntegrityBar } from "./styles";
import InGameModal from "./index_modal";
import PlayerRole from "../../components/PlayerRole";
import PlayerOperatorName from "../../components/PlayerOperatorName";
import RemainingTime from "../../components/RemainingTime";
import { useSelector } from "react-redux";
import { data_operation } from "../../models/types/data_operation";
import { data_start } from "../../models/types/data_start";
import EmptyInfo from "../../components/EmptyInfo";
import { data_integrity } from "../../models/types/data_integrity";


const InGame: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const roleElement: any = [];
    const nameIdElement: any = [];
    const remainingTimeElement: any = [];

    const [modalVisible, setModalVisible] = useState(false);

    const gameState: GameState = 
        useAppSelector((state) => state.game);

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [gameState]);

    socket.onmessage = (event => {
        if (event.data != "ping") {
            const objectResponse: ws_GenericResponse = JSON.parse(event.data);
            if (objectResponse.type == "integrity") {
                console.log(JSON.stringify(objectResponse));
            }
            console.log(objectResponse);
            if (objectResponse.type == "operation") {
                const dataOperation: data_operation = JSON.parse(event.data);
                console.log('dataOperation : ' + JSON.stringify(dataOperation));
                dispatch(setGameOperation(dataOperation));
            }
            if (objectResponse.type == "integrity") {
                const dataIntegrity: data_integrity = JSON.parse(event.data);
                console.log('dataIntegrity : ' + JSON.stringify(dataIntegrity));
                dispatch(setGameShipIntegrity(dataIntegrity.data.integrity));
            }
        }
    });


    // Display the component Role if there is an info about it
    if (gameState.role == "operator" || gameState.role == "instructor") {
        roleElement.push(<PlayerRole role={gameState.role}/>)
    }
    else {roleElement.push(<EmptyInfo/>)};

    // Display the component Name/Id if the player is operator
    if (gameState.role == "operator") {
        nameIdElement.push(<PlayerOperatorName name={gameState.id} />)
    }
    else {nameIdElement.push(<EmptyInfo/>)};

    // Display the component RemainingTime if it need to be displayed
    if (gameState.duration) {
        remainingTimeElement.push(<RemainingTime duration={gameState.duration}/>)
    }
    else {remainingTimeElement.push(<EmptyInfo/>)};


    
    return (
        <>
        <InGameWindow>
            <BackGroundGameImageCtn
                source={require('../../images/InGame_Background_Dot.png')}
                resizeMode="cover"
            />
            <ShipCockpitBackGroundCtn
                source={require('../../images/InGame_Background_Cockpit.png')}
                resizeMode="cover"
            />
            <PlanetBackGroundCtn
                source={require('../../images/InGame_Background_CockpitPlanet.jpg')}
                resizeMode="cover"
            />

            <InGameModal 
                visible={modalVisible}
                setModalVisible={setModalVisible}
            />

            <GameInfoCtn>
                <GameStateCtn>
                    <SP_Button primary notRound style={{width: 48}} onPress={() => setModalVisible(true)}>
                        <Image style={{width: 28, left: -1}}
                            source={require('../../../assets/icons/sign-out-alt.png')}
                            resizeMode="contain"
                        />
                    </SP_Button>
                    <GameStateInfo>
                        <RoundCtn>
                            <Text style={{fontSize: 18, fontFamily: 'roboto-regular', color: Colors.text, marginRight: 8, bottom: 1}}>TOUR :</Text>
                            <Text style={{fontSize: 20, fontFamily: 'roboto-medium', color: Colors.text, bottom: 1}}>{gameState.turn}</Text>
                        </RoundCtn>
                        <ShipIntegrityCtn>
                            <ShipIntegrityBar integrity={gameState.shipIntegrity}></ShipIntegrityBar>
                            <Text style={{color: Colors.text, fontFamily: 'roboto-regular', fontSize: 11, position: 'absolute', alignSelf: 'center', left: '22%' }}>INTÉGRITÉ DU VAISSEAU</Text>
                        </ShipIntegrityCtn>
                    </GameStateInfo>
                </GameStateCtn>

                <GamePlayerInfoCtn>

                    <GamePlayerInfoFirstCtn>
                        <GamePlayerInfo>{roleElement}</GamePlayerInfo>
                        <GamePlayerInfo>{nameIdElement}</GamePlayerInfo>
                    </GamePlayerInfoFirstCtn>

                    <GamePlayerInfoSecondCtn>
                        {remainingTimeElement}
                    </GamePlayerInfoSecondCtn>

                </GamePlayerInfoCtn>
            </GameInfoCtn>


        </InGameWindow>
        </>
    )
}

export default InGame
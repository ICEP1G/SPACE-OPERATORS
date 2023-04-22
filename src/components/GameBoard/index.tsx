import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { socket, ws_GenericResponse } from "../../services/WebSocket";
import { data_connect } from "../../models/types/data_connect";
import { data_players } from "../../models/types/data_players";
import { LobbyState, setLobbyPlayer } from "../../reducers/lobby/reducer";
import { GameState, setGameId, setGameOperation, setGameShipIntegrity } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { GameBoardWindow } from "./styles";
import Instructions from "../Instructions";

const GameBoard: React.FC = () => {
    const dispatch = useAppDispatch();

    const gameState: GameState = 
        useAppSelector((state) => state.game);


    return (
        <>
        <GameBoardWindow>

            <Instructions 
                operatorName={gameState.id}
                operationDescription={gameState.description}
            />


        </GameBoardWindow>
        </>
    )
}

export default GameBoard;
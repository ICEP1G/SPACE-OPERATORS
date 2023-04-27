import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors } from "../../styles_general";
import { GameState, resetAllResultGame, resetDuration, resetOperationGame, setGameId, setGameOperation, setGameShipIntegrity } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { GameBoardCtnSplited, GameBoardWindow, GameLinkWindow } from "./styles";
import Instructions from "../Instructions";
import GameButton from "../GameButton";
import GameSwitch from "../GameSwitch";
import { Element } from "../../models/types/Element";
import WaitingLoader from "../WaitingLoader";
import GameLink from "../GameLink";
import { PanResponder } from "react-native";


interface Props {
    playerRole: string
}
const GameBoard: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();

    const elementsOperatorArray: any = [];
    const elementsInstructorArray: any = [];
    const elementsWaitingArray: any = [];

    const gameState: GameState = 
        useAppSelector((state) => state.game);

    // Allow to display the waiting loader by reseting the game reducer state when the duration of the round is over    
    useEffect(() => {
        setTimeout(() => {
            dispatch(resetAllResultGame());
            dispatch(resetOperationGame());
            dispatch(resetDuration());
        }, (gameState.duration * 1000));
    }, [gameState.duration]);

    // Verify there is data, if not display the waiting loader
    if (gameState.elements[0] !== undefined) {
        // Display Instructor components
        if (gameState.role === "instructor") {
            elementsInstructorArray.push(
                <Instructions key={1} operatorName={gameState.id} operationDescription={gameState.description} />
            )
        }
        // Display Operator components
        else if (gameState.role === "operator") {
            // Display buttons components
            if (gameState.elements[0].type === "button") {
                gameState.elements.forEach((element, index) => {
                    elementsOperatorArray.push(
                        <GameButton key={index} id={element.id} value={element.value} valueType={element.valueType} />
                    );
                });
            }
            // Display switches components
            else {
                gameState.elements.forEach((element, index) => {
                    elementsOperatorArray.push(
                        <GameSwitch key={index} id={element.id} value={element.value} valueType={element.valueType} />
                    );
                });
            }
        }
        // Display the waiting loader if operation is finish
        else {
            elementsWaitingArray.push(
                <WaitingLoader key={1} />
            )
        }
    }  
    else {
        elementsWaitingArray.push(
            <WaitingLoader key={1} />
        )
    } 
    

    return (
        <>
        <GameBoardWindow>
            {elementsWaitingArray}
            {elementsInstructorArray}
            <GameBoardCtnSplited>
                {elementsOperatorArray}
            </GameBoardCtnSplited>

            {/* <GameLinkWindow>
                <GameLink id={1} value={"perroquet"} valueType="string"/>
                <GameLink id={2} value={"#fff"} valueType="color"/>
                <GameLink id={3} value={"#fff"} valueType="color"/>
                <GameLink id={4} value={"oiseau"} valueType="string"/>
                <GameLink ></GameLink>
            </GameLinkWindow> */}
            
        </GameBoardWindow>
        </>
    )
}

export default GameBoard;
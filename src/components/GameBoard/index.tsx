import * as React from "react";
import { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors } from "../../styles_general";
import { GameState, setGameId, setGameOperation, setGameShipIntegrity } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { GameBoardCtnSplited, GameBoardWindow } from "./styles";
import Instructions from "../Instructions";
import GameButton from "../GameButton";
import GameSwitch from "../GameSwitch";
import { Element } from "../../models/types/Element";
import WaitingLoader from "../WaitingLoader";


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

    // Verify there is data, if not display the waiting loader
    if (gameState.elements[0] !== undefined) {
        // Display Instructor components
        if (gameState.role === "instructor") {
            elementsInstructorArray.push(
                <Instructions operatorName={gameState.id} operationDescription={gameState.description} />
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
                <WaitingLoader />
            )
        }
    }  
    else {
        elementsWaitingArray.push(
            <WaitingLoader />
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
            

            {/* <TouchableOpacity style={{width: 60, height: 60, backgroundColor: 'blue'}} onPress={() => console.log(gameState.switchResult)}></TouchableOpacity> */}


        </GameBoardWindow>
        </>
    )
}

export default GameBoard;
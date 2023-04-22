import * as React from "react";
import { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { GameState, addButtonResultToGame } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import GameBoard from "../../components/GameBoard";
import { GameButtonCtn, GameButtonText, GameButtonTouchable } from "./styles";



interface Props {
    id: number,
    valueType: string,
    value: string | number
}

const GameButton: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();

    const gameState: GameState = 
        useAppSelector((state) => state.game);

    // Send the ID of the element to the reducer state
    const sendData = () => {
        dispatch(addButtonResultToGame(Props.id));
    }

    return (
        <>
        <GameButtonCtn>
            <GameButtonTouchable value={Props.valueType == "color" ? Props.value : Colors.primary}
                onPress={sendData}
            >
                {Props.valueType == "color" ? null : 
                <GameButtonText>{Props.value}</GameButtonText>
                }
            </GameButtonTouchable>
        </GameButtonCtn>
        </>
    )
}

export default GameButton;
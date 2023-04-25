import * as React from "react";
import { useState } from "react";
import { Colors } from "../../styles_general";
import { GameState, addSwitchResultToGame, removeSwitchResultToGame } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { GameSwitchCtn, GameSwitchText, SwitchCircle, SwitchCtn } from "./styles";


interface Props {
    id: number,
    valueType: string,
    value: string | number
}
const GameSwitch: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();

    const [switchActivated, setSwitchActivated] = useState(false);

    const gameState: GameState = 
        useAppSelector((state) => state.game);


    // Send the ID of the element to the reducer state
    const sendData = () => {
        // For no reasons, even when the styles.tsx receive "true", here, it receive false. So the condition is inverted in order to work correctly
        setSwitchActivated(!switchActivated);
        if (!switchActivated) {
            dispatch(addSwitchResultToGame(Props.id));
        }
        else {
            dispatch(removeSwitchResultToGame(Props.id));
        }
    }

    return (
        <>
        <GameSwitchCtn value={Props.valueType == "color" ? Props.value : Colors.uiborder}>
            {Props.valueType == "color" ? null :
            <GameSwitchText>{Props.value}</GameSwitchText>
            }
            <SwitchCtn 
                value={Props.valueType == "color" ? Props.value : Colors.uiborder}
                isColor={Props.valueType == "color" ? true : false}
                isActivated={switchActivated}
                onPress={sendData}
                >
                <SwitchCircle 
                    value={Props.valueType == "color" ? Props.value : Colors.uiborder}
                    isColor={Props.valueType == "color" ? true : false}
                    isActivated={switchActivated}
                    >
                </SwitchCircle>
            </SwitchCtn>
        </GameSwitchCtn>  
        </>
    )
}

export default GameSwitch;
import * as React from "react";
import { Colors } from "../../styles_general";
import { GameState, addButtonResultToGame } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
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
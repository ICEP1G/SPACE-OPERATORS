import * as React from "react";
import { useEffect } from "react";
import { GameState, resetAllResultGame, resetDuration, resetOperationGame } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { GameBoardCtnSplited, GameBoardWindow } from "./styles";
import Instructions from "../Instructions";
import GameButton from "../GameButton";
import GameSwitch from "../GameSwitch";
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
            );
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
            else if (gameState.elements[0].type === "switch") {
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
            );
        }
    }  
    else {
        elementsWaitingArray.push(
            <WaitingLoader key={1} />
        );
    } 
    

    return (
        <>
        <GameBoardWindow>
            {elementsWaitingArray}
            {elementsInstructorArray}
            <GameBoardCtnSplited>
                {elementsOperatorArray}
            </GameBoardCtnSplited>
        </GameBoardWindow>
        </>
    )
}

export default GameBoard;
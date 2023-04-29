import * as React from "react";
import { useNavigate } from "react-router-native"
import { useState, useRef } from "react";
import { Text, Image } from "react-native"
import { Colors, SP_Button, SP_TextButton } from "../../styles_general";
import { socket, ws_GenericResponse } from "../../services/WebSocket";
import { GameState, resetAllResultGame, resetOperationGame, setGameOperation, setGameShipIntegrity, setPlayersGame } from "../../reducers/game/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { BackGroundGameImageCtn, GameInfoCtn, GamePlayerInfoFirstCtn, GamePlayerInfoCtn, GameStateCtn, GameStateInfo, InGameWindow, RoundCtn, GamePlayerInfo, GamePlayerInfoSecondCtn, GameCtn, ContentValidateCtn, ContentValidateInfo, ContentValidateText, ValidateButtonReady, GameParentContainer } from "./styles";
import InGameModal from "./index_modal";
import PlayerRole from "../../components/PlayerRole";
import PlayerOperatorName from "../../components/PlayerOperatorName";
import RemainingTime from "../../components/RemainingTime";
import { data_operation } from "../../models/types/data_operation";
import EmptyInfo from "../../components/EmptyInfo";
import { data_integrity } from "../../models/types/data_integrity";
import GameBoard from "../../components/GameBoard";
import { data_finish } from "../../models/types/data_finish";
import ShipCockpit from "../../components/ShipCockpit";
import { VerifyIfRoundIsSuccessful } from "../../services/GameService";
import { Result } from "../../models/types/Result";
import ShipIntegrity from "../../components/ShipIntegrity";
import { data_players } from "../../models/types/data_players";
import ShipVictoryAnimation from "../../components/ShipVictoryAnimation";
import moment from "moment";
import { createOldGame } from "../../databaseObjects/OldGamesDAO";
import { OldGame } from "../../models/OldGame";
import { data_destroyed } from "../../models/types/data_destroyed";

const InGame: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const roleElement: any = [];
    const nameIdElement: any = [];
    const remainingTimeElement: any = [];

    const [modalVisible, setModalVisible] = useState(false);
    // Allow to be passed to the children component to play an animation when the result is wrong
    const [roundFail, setRoundFail] = useState(false);
    const [playerLeave, setPlayerLeave] = useState(false);
    const [endScreenVisible, setEndScreenVisible] = useState(false);
    const [gameVictory, setGameVictory] = useState(false);

    const gameState: GameState = 
        useAppSelector((state) => state.game);


    // Save the game in the database (to be viewed in the history page)
    const saveGameInDatabase = (turn: number) => {
        const date = moment().format('DD-MM-YYYY');
        const playerList: string[] = [];
        gameState.playersStatus.forEach(player => {
            playerList.push(player.name);
        });
        createOldGame(OldGame(gameState.gameId, turn, date, JSON.stringify(playerList)));
    }

    // Handle socket response
    socket.onmessage = (event => {
        if (event.data != "ping") {
            const objectResponse: ws_GenericResponse = JSON.parse(event.data);
            if (objectResponse.type == "operation") {
                // Reset the results in the reducer each new operation
                dispatch(resetAllResultGame());
                dispatch(resetOperationGame());
                // then send the operation data for the round to the reducer
                const dataOperation: data_operation = JSON.parse(event.data);
                dispatch(setGameOperation(dataOperation));
            }
            if (objectResponse.type == "integrity") {
                setRoundFail(true);
                const dataIntegrity: data_integrity = JSON.parse(event.data);
                dispatch(setGameShipIntegrity(dataIntegrity.data.integrity));
                setRoundFail(false);
            }
            if (objectResponse.type == "players") {
                const dataPlayer: data_players = JSON.parse(event.data);
                dispatch(setPlayersGame(dataPlayer.data.players));
                setPlayerLeave(true);
                setModalVisible(true);
            }
            if (objectResponse.type == "destroyed") {
                const dataDestroyed: data_destroyed = JSON.parse(event.data);
                saveGameInDatabase(dataDestroyed.data.turns);
                setGameVictory(false);
                setEndScreenVisible(true);
            }
            if (objectResponse.type == "victory") {
                saveGameInDatabase(gameState.turn);
                setGameVictory(true);
                setEndScreenVisible(true);
            }
        }
    });

    // Send to the WebSocket the result of the operator
    const finishTurn = () => {
        let intendedResult: Result = gameState.result;
        let buttonResult: number[] = [...gameState.buttonResult];
        let switchResult: number[] = [...gameState.switchResult];
    
        const isSuccessful = VerifyIfRoundIsSuccessful(intendedResult, buttonResult, switchResult);
        const dataFinish: data_finish = data_finish("finish", {
            operator: gameState.id,
            success: isSuccessful
        });

        dispatch(resetOperationGame());
        dispatch(resetAllResultGame());
        socket.send(JSON.stringify(dataFinish));
    }



    // Display the component Role if there is an info about it
    if (gameState.role == "operator" || gameState.role == "instructor") {
        roleElement.push(<PlayerRole key={1} role={gameState.role}/>)
    }
    else {roleElement.push(<EmptyInfo key={1} />)};

    // Display the component Name/Id if the player is operator
    if (gameState.role == "operator") {
        nameIdElement.push(<PlayerOperatorName key={1} name={gameState.id} />)
    }
    else {nameIdElement.push(<EmptyInfo key={1} />)};

    // Display the component RemainingTime if it need to be displayed
    if (gameState.duration) {
        remainingTimeElement.push(<RemainingTime key={1} duration={gameState.duration}/>)
    }
    else {remainingTimeElement.push(<EmptyInfo key={1} />)};
    
    return (
        <>
        <InGameWindow>

            <ShipVictoryAnimation isVisible={endScreenVisible} isVictory={false}/>

            <ShipCockpit roundFail={roundFail} />

            <InGameModal 
                visible={modalVisible}
                setModalVisible={setModalVisible}
                playerLeaves={playerLeave}
                setPlayerLeave={setPlayerLeave}
                saveGameInDatabase={saveGameInDatabase}
            />

            <GameParentContainer>

                <BackGroundGameImageCtn
                    source={require('../../images/InGame_Background_Dot.png')}
                    resizeMode="cover"
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
                            <ShipIntegrity />
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


                <GameCtn>
                    {gameState.role == "operator" ?
                    <ContentValidateCtn>
                        <ContentValidateInfo>
                            <ContentValidateText>VALIDER LES ACTIONS DU TOUR</ContentValidateText>
                        </ContentValidateInfo>
                        <ValidateButtonReady onPress={finishTurn}>
                            <SP_TextButton italic >OK</SP_TextButton>
                        </ValidateButtonReady>
                    </ContentValidateCtn>
                    : null}
                
                    <GameBoard playerRole={gameState.role} />
                </GameCtn>

            </GameParentContainer>

        </InGameWindow>
        </>
    )
}


export default InGame
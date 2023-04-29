import * as React from "react";
import { useNavigate } from "react-router-native"
import { useEffect, useState } from "react";
import { Text, Image } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { useAppSelector, useAppDispatch } from "../../store";
import { MainUserState } from "../../reducers/mainUser/reducer";
import { RoverImage, AdminPlayer, BackgroundImageCtn, ContentFooterCtn, ContentFooterInfo, ContentFooterText, ContentHeaderCtn, ContentHeaderText, ContentScrollViewCtn, FooterButtonReady, GameIdText, GameInfoCtn, GameInfoLabel, GameInfoLabelText, LobbyContentCtn, LobbyLaunchButton, LobbyMainCtn, LobbyWindow, OperatorImage, PlayerNameCtn, PlayerStatusCtn, StatusButton, StatusButtonText } from "./styles";
import axios from 'axios';
import { API_URL} from "../../services/WebSocket";
import { socket, createNewSocket, ws_GenericResponse } from "../../services/WebSocket";
import { data_players } from "../../models/types/data_players";
import { LobbyState, setLobbyPlayer } from "../../reducers/lobby/reducer";
import { GameState, setGameId, setPlayersGame } from "../../reducers/game/reducer";
import { data_start } from "../../models/types/data_start";

const Lobby: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const playerElement: any = [];

    const [launchButtonPressable, setLaunchButtonPressable] = useState(false);

    const mainUserState: MainUserState =
         useAppSelector((state) => state.mainUser);
    const lobbyState: LobbyState = 
        useAppSelector((state) => state.lobby);
    const gameState: GameState = 
        useAppSelector((state) => state.game);

    useEffect(() => {
        let playerReady = 0;
        lobbyState.players.forEach((player, index) => {
            if (player.status == true) {
                playerReady++;
            }
        })
        if (playerReady == lobbyState.players.length) {
            setLaunchButtonPressable(true)
        }
        else {
            setLaunchButtonPressable(false)
        }
    }, [lobbyState])


    // Parse the message to the right data everytime a message is return from the WebSocket
    socket.onmessage = (event => {
        if (event.data != "ping") {
            const objectResponse: ws_GenericResponse = JSON.parse(event.data);
            if (objectResponse.type == "players") {
                const dataPlayer: data_players = JSON.parse(event.data);
                dispatch(setLobbyPlayer(dataPlayer.data.players))
            }
            if (objectResponse.type == "start") {
                dispatch(setGameId(lobbyState.gameId));
                dispatch(setPlayersGame(lobbyState.players))
                navigate("/InGame");
            }
        }
    });

    // Display each player name in the lobby and update their status when they're ready
    lobbyState.players.forEach((player, index) => {
        playerElement.push(
            <PlayerStatusCtn key={index}>
                <PlayerNameCtn>
                    <SP_AestheticLine></SP_AestheticLine>
                    <SP_InfoView transparent>
                        {index === 0 ?
                        <AdminPlayer
                        source={require('../../../assets/icons/crown.png')}
                        resizeMode="cover"
                        /> : ''
                        }   
                        <Text style={{color: Colors.text, fontSize: 17, fontFamily: 'roboto-regular'}}>{index === 0 ? (player.name.length <= 19 ? player.name : (player.name.substring(0,15) + "...")) : player.name}</Text>
                    </SP_InfoView>
                </PlayerNameCtn>
                <StatusButton isReady={player.status}>
                    <StatusButtonText isReady={player.status}>{player.status ? 'PRÊT' : 'EN ATTENTE'}</StatusButtonText>
                </StatusButton>
            </PlayerStatusCtn>
        );

    })

    // Tell the API that to set the player status to ready
    const setStatusReady = () => {
        axios.post(API_URL + "ready/" + mainUserState.MainUser[0].uuid)
        .then((response) => {
        })
        .catch((error) => {
        })
    };

    // Tell the WebSocket to start the game
    const LaunchGame = () => {
        const dataStart: data_start = data_start("start", {
            gameId: lobbyState.gameId
        });
        socket.send(JSON.stringify(dataStart));
    }


    return (
        <>

        <LobbyWindow style={{position: 'relative', width: '100%', height: '100%', flex: 1, flexDirection: 'column'}}>
            <BackgroundImageCtn 
                source={require('../../images/Lobby_Background.png')}
                resizeMode="cover"
            /> 

        <LobbyMainCtn>
            <GameInfoCtn>
                <SP_Button primary notRound style={{width: 48}} onPress={() => [socket.close(), createNewSocket(), navigate("/")]}>
                <Image
                    style={{width: 24, position: 'relative', left: -1}}
                    source={require('../../../assets/icons/angle-double-left.png')}
                    resizeMode="contain"
                />
                </SP_Button>
                <GameInfoLabel><GameInfoLabelText>GAME ID</GameInfoLabelText></GameInfoLabel>
                <SP_InfoView straight centerContent>
                    <GameIdText>{lobbyState.gameId}</GameIdText>
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

                    {playerElement}

                </ContentScrollViewCtn>

                <ContentFooterCtn>
                    <ContentFooterInfo>
                        <ContentFooterText>EN ATTENTE DE JOUEURS ...</ContentFooterText>
                    </ContentFooterInfo>
                    <FooterButtonReady onPress={setStatusReady}>
                        <SP_TextButton italic>PRÊT</SP_TextButton>
                    </FooterButtonReady>
                </ContentFooterCtn>

            </LobbyContentCtn>

            {
                lobbyState.players[0].name == mainUserState.MainUser[0].name ?
                <LobbyLaunchButton
                    isPressable={launchButtonPressable}
                    onPress={LaunchGame}
                    >
                    <SP_TextButton italic>DEMARRER LA PARTIE</SP_TextButton>
                </LobbyLaunchButton>
                : ''
            }
        </LobbyMainCtn>


        <OperatorImage 
            isDisplayed={lobbyState.players[1] ? true : false}
            source={require('../../images/Lobby_Player.png')}
            resizeMode="contain"
            style={{bottom: '11%', left: '63%'}}
        />
        <OperatorImage 
            isDisplayed={lobbyState.players[2] ? true : false}
            source={require('../../images/Lobby_Player.png')}
            resizeMode="contain"
            style={{bottom: '8%', left: '86%'}}
        />
        <OperatorImage 
            isDisplayed={lobbyState.players[3] ? true : false}
            source={require('../../images/Lobby_Player.png')}
            resizeMode="contain"
            style={{bottom: '13%', left: '50%'}}
        />
        <OperatorImage 
            isDisplayed={lobbyState.players[4] ? true : false}
            source={require('../../images/Lobby_Player.png')}
            resizeMode="contain"
            style={{bottom: '4%', left: '76%'}}
        />
        <OperatorImage 
            isDisplayed={lobbyState.players[5] ? true : false}
            source={require('../../images/Lobby_Player.png')}
            resizeMode="contain"
            style={{bottom: '9%', left: '40%'}}
        />

        <RoverImage
            source={require('../../images/rover.png')}
            resizeMode="contain"
            style={{bottom: '11%', left: '20%'}}
        />


        </LobbyWindow>

        </>
    )
};

export default Lobby
import * as React from "react";
import { useNavigate } from "react-router-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import space_operators_db from "../../database/space_operators_db";
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated, Button } from "react-native"
import { useEffect, useState, useCallback } from 'react';
import HistoricModal from "./index_modal";
import { HistoricWindow, BackgroundImageCtn, HistoricHeaderTitle, HistoricHeaderTitleText, HistoricHeader, HistoricMainCTN, HistoricContentCtn, ContentHeaderCtn, ContentHeaderText, ContentScrollViewCtn, GameHistory, GameNameCdn, ShowMoreInfo, TurnNumber, TurnNumberText } from "./styles"; 
import { GetAllGames } from "../../databaseObjects/OldGamesDAO";
import { useAppDispatch, useAppSelector } from "../../store";
import { HistoricState, setOldGames } from "../../reducers/historic/reducer";
import { faJar } from "@fortawesome/free-solid-svg-icons";

const Historic: React.FC = () => {    

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const OldGameElement: any = [];
    const historicState: HistoricState = useAppSelector((state) => state.historic);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // Get the old games, if it doesn't exist, display a message
    useEffect(() => {
        GetAllGames()
        .then((Games) => {
            if (Games.length > 0) {
                dispatch(setOldGames(Games));
                // console.log("historicState", JSON.stringify(historicState));

            }
        })
    }, []);    

    // Display all oldGames in the history
    historicState.oldGames.forEach((game, index) => {
        OldGameElement.push(
            <GameHistory>
                <GameNameCdn>
                    <SP_AestheticLine></SP_AestheticLine>
                    <SP_InfoView transparent>
                        <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>Game {game.gameId}</Text>
                    </SP_InfoView>
                </GameNameCdn>
                <TurnNumber>
                    <TurnNumberText>Round {game.rounds}</TurnNumberText>
                </TurnNumber>
                <ShowMoreInfo>
                    <SP_Button primary style={{width: 40, height: 40}} onPress={toggleModal}>
                        <Image
                            style={{width: 24, position: 'relative', left: -1}}
                            source={require('../../../assets/icons/list-solid.png')}
                            resizeMode="contain"
                        />
                    </SP_Button>
                    <HistoricModal
                        visible={isModalVisible}
                        toggleModal={toggleModal}
                        gameId={game.gameId}
                        turn={game.rounds}
                        dateGame={game.gameCreationDate}
                        players={game.playersNames}
                    />
                </ShowMoreInfo>
            </GameHistory>
        )
    })

    return (
        <>
            <HistoricWindow style={{position: 'relative', width: '100%', height: '100%', flex: 1, flexDirection: 'column'}}>
                <BackgroundImageCtn 
                    source={require('../../images/Historic_Background.jpg')}
                    resizeMode="cover"
                />
                <HistoricMainCTN>
                    <HistoricHeader>
                        <SP_Button primary style={{width: 48}} onPress={() => navigate("/")}>
                            <Image
                                style={{width: 24, position: 'relative', left: -1}}
                                source={require('../../../assets/icons/angle-double-left.png')}
                                resizeMode="contain"
                            />
                        </SP_Button>
                        <HistoricHeaderTitle>
                            <HistoricHeaderTitleText>HISTORIQUE</HistoricHeaderTitleText>
                        </HistoricHeaderTitle>
                    </HistoricHeader>

                    <HistoricContentCtn>
                        <ContentHeaderCtn>
                            <ContentHeaderText>HISTORIQUE DES PARTIES</ContentHeaderText>
                            <Image
                                style={{width: 24, position: 'relative', left: -1}}
                                source={require('../../../assets/icons/astronaut-icon.png')}
                                resizeMode="contain"
                            />
                        </ContentHeaderCtn>

                        <ContentScrollViewCtn>
                            {OldGameElement}
                        </ContentScrollViewCtn>
                    </HistoricContentCtn>
                </HistoricMainCTN>
            </HistoricWindow>
        </>
    )
}

export default Historic
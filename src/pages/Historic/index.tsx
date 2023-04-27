import * as React from "react";
import { useNavigate } from "react-router-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import space_operators_db from "../../database/space_operators_db";
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated, Button } from "react-native"
import { useEffect, useState, useCallback } from 'react';
import HistoricModal from "./index_modal";
import { HistoricWindow, BackgroundImageCtn, HistoricHeaderTitle, HistoricHeaderTitleText, HistoricHeader, HistoricMainCTN, HistoricContentCtn, ContentHeaderCtn, ContentHeaderText, ContentScrollViewCtn, GameHistory, GameNameCdn, ShowMoreInfo, TurnNumber, TurnNumberText, TurnNumberValue } from "./styles"; 
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
    const [GameIDModal, setGameIDModal] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const OpenModal = (id: string) => {
        setGameIDModal(id);
        toggleModal();
    };

    // Get the old games, if it doesn't exist, display a message
    useEffect(() => {
        GetAllGames()
        .then((Games) => {
            console.log('database data : ' + JSON.stringify(Games));
            if (Games.length > 0) {
                dispatch(setOldGames(Games));
            }
        })
    }, []);    

    // Display all oldGames in the history
    historicState.oldGames.forEach((game, index) => {
        OldGameElement.push(
            <GameHistory key={index}>
                <GameNameCdn>
                    <SP_AestheticLine></SP_AestheticLine>
                    <SP_InfoView transparent>
                        <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>Game {game.gameId}</Text>
                    </SP_InfoView>
                </GameNameCdn>
                <TurnNumber>
                    <TurnNumberText style={{color: Colors.text, fontFamily: 'roboto-regular', fontSize: 18}}>Round : <TurnNumberValue>{game.rounds}</TurnNumberValue> </TurnNumberText>
                    
                </TurnNumber>
                <ShowMoreInfo>
                    <SP_Button primary style={{width: 40, height: 40}} onPress={() => OpenModal(game.gameId)}>
                        <Image
                            style={{width: 20, position: 'relative', left: -1}}
                            source={require('../../../assets/icons/list-solid.png')}
                            resizeMode="contain"
                        />
                    </SP_Button>
                </ShowMoreInfo>
            </GameHistory>
        )
    })

    return (
        <>
        <HistoricModal
            visible={isModalVisible}
            gameId={GameIDModal}
            toggleModal={toggleModal}
        />

            <HistoricWindow>
                <BackgroundImageCtn 
                    source={require('../../images/Historic_Background.jpg')}
                    resizeMode="cover"
                />
                <HistoricMainCTN>
                    <HistoricHeader>
                        <SP_Button primary notRound style={{width: 48}} onPress={() => navigate("/")}>
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
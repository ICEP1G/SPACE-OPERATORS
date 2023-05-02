import * as React from "react";
import { useNavigate } from "react-router-native"
import { Colors, SP_Button, SP_InfoView, SP_AestheticLine } from "../../styles_general";
import { Text, Image, StyleSheet } from "react-native"
import { useEffect, useState, useCallback } from 'react';
import HistoricModal from "./index_modal";
import { HistoricWindow, BackgroundImageCtn, HistoricHeaderTitle, HistoricHeaderTitleText, HistoricHeader, HistoricMainCTN, HistoricContentCtn, ContentHeaderCtn, ContentHeaderText, ContentScrollViewCtn, GameHistory, GameNameCdn, ShowMoreInfo, WinLooseCtn } from "./styles"; 
import { GetAllGames } from "../../databaseObjects/OldGamesDAO";
import { useAppDispatch, useAppSelector } from "../../store";
import { HistoricState, setOldGames } from "../../reducers/historic/reducer";
import moment from "moment";
import { OldGame } from "../../models/OldGame";

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
            if (Games.length > 0) {
                dispatch(setOldGames(Games));
            }
        })
    }, []);

    // Shadow style
    const styles = StyleSheet.create({
        shadow:{
            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.82,
            shadowRadius: 2,
            elevation: 3
        }
    });

    // Return the accurate icon (Leave / Victory / Defeat)
    const AddTheGoodIcon = (game: OldGame) => {
        const iconArrayElement: any = [];
        if (game.playersNames === "leave") {
            iconArrayElement.push(
                <Image key={1} style={{width: 22, height: 22}}
                source={require('../../../assets/icons/sign-out-alt_orange.png')}
            />);
        }
        else if (game.rounds >= 20) {
            iconArrayElement.push(
                <Image key={1} style={{width: 28, height: 28}}
                source={require('../../../assets/icons/win_medal.png')}
            />);
        }
        else {
            iconArrayElement.push(
                <Image key={1} style={{width: 22, height: 22}}
                    source={require('../../../assets/icons/meteo.png')}
            />);
        }
        return iconArrayElement;
    };


    // Display all oldGames in the history
    historicState.oldGames.forEach((game, index) => {
        OldGameElement.push(
            <GameHistory key={index}>                
                <SP_AestheticLine></SP_AestheticLine>
                <WinLooseCtn style={styles.shadow}>
                    {AddTheGoodIcon(game)}
                </WinLooseCtn>
                <SP_InfoView transparent style={[{paddingLeft: 12}, styles.shadow]} >
                    {(() => {
                        switch (game.gameCreationDate) {
                            case (moment().format('DD-MM-YYYY')):
                                return <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>Aujourd'hui à {game.gameCreationTime}</Text>
                            case (moment().subtract(1, 'days').format('DD-MM-YYYY')):
                                return <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>Hier à {game.gameCreationTime}</Text>
                            default:
                                return <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>Le {game.gameCreationDate.replace(/-/g, "/")} à {game.gameCreationTime}</Text>
                        }
                    }) ()}
                </SP_InfoView>

                {game.playersNames === "leave" ? null :
                <SP_Button primary style={[{width: 42, height: 42, marginLeft: 12}, styles.shadow]} onPress={() => OpenModal(game.gameId)}>
                    <Image
                        style={{width: 20, position: 'relative', left: -0.5}}
                        source={require('../../../assets/icons/list-solid.png')}
                        resizeMode="contain"
                    />
                </SP_Button>
                }
            </GameHistory>
        );
    });

    return (
        <>
            <HistoricWindow>
                <BackgroundImageCtn 
                    source={require('../../images/Historic_Background.jpg')}
                    resizeMode="cover"
                />

                <HistoricModal
                    visible={isModalVisible}
                    gameId={GameIDModal}
                    toggleModal={toggleModal}
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
                            {/* <Image
                                style={{width: 24, position: 'relative', left: -1}}
                                source={require('../../../assets/icons/meteo.png')}
                                resizeMode="contain"
                            /> */}
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
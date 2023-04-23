import * as React from "react";
import { useNavigate } from "react-router-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import space_operators_db from "../../database/space_operators_db";
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated, Button } from "react-native"
import { useEffect, useState, useCallback } from 'react';
import Modal from "react-native-modal";

import { 
    HistoricWindow, BackgroundImageCtn, HistoricHeaderTitle, HistoricHeaderTitleText, HistoricHeader, HistoricMainCTN,
    HistoricContentCtn, ContentHeaderCtn, ContentHeaderText, ContentScrollViewCtn, GameHistory, GameNameCdn, ShowMoreInfo, TurnNumber, TurnNumberText,
    ModalContent, ModalHeaderTitle, ModalHeaderTitleText, ModalContentHeader, GamePlayerModal, GamePlayerNameModal, GamePlayerLogoModal, PlayerListModal, GameIDModal, GameIDModalText, RoundModal, RoundModalText, ModalGameStat, Line
} from "./styles"; 

const Historic: React.FC = () => {    

    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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
                            <GameHistory>
                                <GameNameCdn>
                                    <SP_AestheticLine></SP_AestheticLine>
                                    <SP_InfoView transparent>
                                        <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>Game 1</Text>
                                    </SP_InfoView>
                                </GameNameCdn>
                                <TurnNumber>
                                    <TurnNumberText>Round 12</TurnNumberText>
                                </TurnNumber>
                                <ShowMoreInfo>
                                    <SP_Button primary style={{width: 40, height: 40}} onPress={toggleModal}>
                                        <Image
                                            style={{width: 24, position: 'relative', left: -1}}
                                            source={require('../../../assets/icons/info-circle.png')}
                                            resizeMode="contain"
                                        />
                                    </SP_Button>
                                </ShowMoreInfo>
                            </GameHistory>
                        </ContentScrollViewCtn>
                    </HistoricContentCtn>
                </HistoricMainCTN>
            </HistoricWindow>      

            <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                <ModalContent>
                    <ModalContentHeader>
                        <ModalHeaderTitle>
                            <ModalHeaderTitleText>26/02/2023</ModalHeaderTitleText>
                        </ModalHeaderTitle>
                        <SP_Button primary style={{width: 48}} onPress={toggleModal}>
                            <Image
                                style={{width: 24, position: 'relative', left: -1}}
                                source={require('../../../assets/icons/sign-out-alt.png')}
                                resizeMode="contain"
                            />
                        </SP_Button>
                    </ModalContentHeader>

                    <GamePlayerModal>
                        <ModalGameStat>
                            <GameIDModal>
                                <GameIDModalText>GAME ID : 578800DIOK</GameIDModalText>
                            </GameIDModal>
                            <RoundModal>
                                <RoundModalText>ROUNDS : 3</RoundModalText>
                            </RoundModal>
                        </ModalGameStat>

                        <Line></Line>

                        <PlayerListModal>
                            <GamePlayerNameModal>
                                <SP_AestheticLine></SP_AestheticLine>
                                <GamePlayerLogoModal>
                                    <Image
                                        style={{width: 24, position: 'relative', left: -1}}
                                        source={require('../../../assets/icons/astronaut-icon.png')}
                                        resizeMode="contain"
                                    />
                                </GamePlayerLogoModal>
                                <SP_InfoView transparent>
                                    <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>ICEP1G</Text>
                                </SP_InfoView>
                            </GamePlayerNameModal>

                            <GamePlayerNameModal>
                                <SP_AestheticLine></SP_AestheticLine>
                                <GamePlayerLogoModal>
                                    <Image
                                        style={{width: 24, position: 'relative', left: -1}}
                                        source={require('../../../assets/icons/astronaut-icon.png')}
                                        resizeMode="contain"
                                    />
                                </GamePlayerLogoModal>
                                <SP_InfoView transparent>
                                    <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>ICEP1G</Text>
                                </SP_InfoView>
                            </GamePlayerNameModal>

                        </PlayerListModal>
                    </GamePlayerModal>

                    
                </ModalContent>

                </View>
            </Modal>      
        </>
    )
}

export default Historic
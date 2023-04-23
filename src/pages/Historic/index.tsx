import * as React from "react";
import { useNavigate } from "react-router-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import space_operators_db from "../../database/space_operators_db";
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated } from "react-native"
import { 
    HistoricWindow, BackgroundImageCtn, HistoricHeaderTitle, HistoricHeaderTitleText, HistoricHeader, HistoricMainCTN,
    HistoricContentCtn, ContentHeaderCtn, ContentHeaderText, ContentScrollViewCtn, GameHistory, GameNameCdn, ShowMoreInfo, TurnNumber, TurnNumberText

} from "./styles";



const Historic: React.FC = () => {    

    const navigate = useNavigate();

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
                                    <SP_Button primary style={{width: 40, height: 40}} onPress={() => navigate("/")}>
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
        </>
    )
}

export default Historic
import * as React from "react";
import { useNavigate } from "react-router-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import space_operators_db from "../../database/space_operators_db";
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated } from "react-native"
import { BackgroundImageCtn, HistoryMainCtn, ButtonsContainer, HistoricContainer, HistoricTitle, HistoricGames, HeaderContainer, HeaderTitle, GameName, ShowLogo} from "./styles";



const Historic: React.FC = () => {

    const navigate = useNavigate();

        // Lock or unlock the input Name
        const ButtonGameMoreInfos = () => {
            console.log('test');
        };

        const toggleButtonMoreInfos = () => {
            console.log('test');
            
        };
    
    return (
        <>
            <BackgroundImageCtn 
            source={require('../../images/Historic_Background.jpg')}
            resizeMode="cover"
            />

            <HeaderContainer>
                <HeaderTitle>
                    <Text style={{color: Colors.text, fontSize: 24, fontFamily: 'roboto-bold'}}>Historique des parties</Text>
                </HeaderTitle>
            </HeaderContainer>

            <HistoryMainCtn>
                <HistoricContainer>
                    <HistoricTitle>
                        <Text style={{color: Colors.text, fontSize: 14, fontFamily: 'roboto-bold'}}>Historique des parties</Text>
                    </HistoricTitle>
                    <HistoricGames>
                        <GameName>
                            
                            <SP_AestheticLine maxi/>

                            <SP_Button onPress={toggleButtonMoreInfos}>
                                <ShowLogo
                                    source={require('../../../assets/icons/info-circle.png')}
                                    resizeMode="contain"
                                />
                            </SP_Button>
                        </GameName>
                    </HistoricGames>
                </HistoricContainer>
                <ButtonsContainer>
                    <SP_Button primary
                        style={{marginTop: 12, borderWidth: 1.5, borderColor: Colors.input}}
                        onPress={() => navigate("/")}>
                        <SP_TextButton>RETOUR</SP_TextButton>
                    </SP_Button>
                </ButtonsContainer>
            </HistoryMainCtn>
        </>
    )
}

export default Historic
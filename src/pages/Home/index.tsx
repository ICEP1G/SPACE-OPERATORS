import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { HomeMainCtn, AppLogo, BackgroundImageCtn, ShipImage, ShipCtn, IdCtnView, PlayerNameCtn, InputPlayerName, EditLogo, ButtonsContainer, LeaveButton, TextLeaveButton, BottomCtn } from "./styles";
import space_operators_db from "../../database/space_operators_db";
import styled from "styled-components/native";
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
        <BackgroundImageCtn 
            source={require('../../images/MainMenu_Background_Left_Planet.png')}
            resizeMode="cover"
        />
        <ShipCtn>
            <ShipImage 
            source={require('../../images/MainMenu_RazorBack_Ship.png')}
            resizeMode="contain"
            />
        </ShipCtn>
        <AppLogo
            source={require('../../images/SPACEOPERATORS_logo_bold_strech.png')}
            resizeMode="contain"
        />
        
        <HomeMainCtn>
            <IdCtnView>
                <SP_AestheticLine/>
                <SP_LabelView mini style={{marginRight: 6}}>
                    <Text style={{color: Colors.text, fontSize: 24, fontFamily: 'roboto-bold'}}>ID</Text>
                </SP_LabelView>
                <SP_InfoView transparent>
                    <Text style={{color: Colors.text, fontSize: 24, fontFamily: 'roboto-regular'}}>123e4567-e89b-12d3-a456-426614174000</Text>
                </SP_InfoView>
            </IdCtnView>

            <BottomCtn>
                <PlayerNameCtn>
                    <SP_AestheticLine maxi/>
                    <InputPlayerName 
                        style={{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 40 }}
                        value="ICEP1G"
                        >
                    </InputPlayerName>
                    <SP_Button style={{width: 84}} >
                        <EditLogo
                            source={require('../../../assets/icons/user-edit.png')}
                            resizeMode="contain"
                        />
                    </SP_Button>
                </PlayerNameCtn>

                <ButtonsContainer>
                    <SP_Button primary style={{borderWidth: 3, borderColor: '#C7532F'}}>
                        <SP_TextButton >REJOINDRE UNE PARTIE</SP_TextButton>
                    </SP_Button>
                    <SP_Button style={{marginTop: 24, borderWidth: 3, borderColor: Colors.input}}>
                        <SP_TextButton >CREER UNE PARTIE</SP_TextButton>
                    </SP_Button>
                    <SP_Button style={{marginTop: 24, borderWidth: 3, borderColor: Colors.input}}>
                        <SP_TextButton >HISTORIQUE DES PARTIES</SP_TextButton>
                    </SP_Button>
                    <LeaveButton>
                        <TextLeaveButton>LEAVE</TextLeaveButton>
                    </LeaveButton>
                </ButtonsContainer>
            </BottomCtn>
            
        </HomeMainCtn>
            
        </>
    )
};


// const styles = StyleSheet.create({
//     shadow:{
//         shadowColor: "#000",
//         shadowOffset: {
// 	    width: 0,
// 	    height: 1,
//         },
//         shadowOpacity: 0.22,
//         shadowRadius: 2.22,
//         elevation: 3,
//     }
// })




export default Home;
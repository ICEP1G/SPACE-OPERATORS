import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { HomeMainCtn, AppLogo, BackgroundImageCtn, ShipImage, ShipCtn, IdCtnView, AestheticLineMini, IdLabelCtn, IdInfoCtn, PlayerNameCtn, AestheticLineNormal, InputPlayerName, EditPlayerNameCtn } from "./styles";
import space_operators_db from "../../database/space_operators_db";
import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


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
                <AestheticLineMini/>
                <IdLabelCtn>
                    <Text style={{color: Colors.text, fontSize: 24, fontFamily: 'roboto-bold'}}>ID</Text>
                </IdLabelCtn>
                <IdInfoCtn>
                    <Text style={{color: Colors.text, fontSize: 24, fontFamily: 'protomolecule'}}>123e4567-e89b-12d3-a456-426614174000</Text>
                </IdInfoCtn>
            </IdCtnView>
            <PlayerNameCtn>
                <AestheticLineNormal style={{backgroundColor: Colors.primary}} />
                <InputPlayerName 
                    style={{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 40 }}
                    value="ICEP1G"
                    >
                </InputPlayerName>
                <EditPlayerNameCtn style={{ backgroundColor: Colors.secondary}}>
                    
                </EditPlayerNameCtn>
            </PlayerNameCtn>
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




export default Home
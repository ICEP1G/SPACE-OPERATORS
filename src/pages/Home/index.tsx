import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import {  HomeMainCtn, AppLogo, BackgroundImageCtn } from "./styles";
import space_operators_db from "../../database/space_operators_db";


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
        <BackgroundImageCtn 
            source={require('../../images/MainMenu_Background.png')}
            resizeMode="cover"
        />
        <HomeMainCtn>
            <AppLogo
                source={require('../../images/SPACEOPERATORS_logo_bold.png')}
                resizeMode="contain"
            />
            
        </HomeMainCtn>
            
        </>
    )
};




export default Home
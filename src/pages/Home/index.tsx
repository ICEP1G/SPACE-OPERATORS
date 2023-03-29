import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { HomeView } from "./styles";


const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <HomeView style={styles.home_view}>
                <Image 
                    source={require('../../images/MainMenu_Background.png')}
                    // resizeMode="cover"
                    style={styles.background_image}
                />
            </HomeView>
        </>
    )
};




const styles = StyleSheet.create({
    home_view: {
    },
    background_image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})

export default Home
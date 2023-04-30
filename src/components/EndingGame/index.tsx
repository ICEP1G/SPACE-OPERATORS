import * as React from "react";
import { View, Image, StyleSheet, Animated } from "react-native"
import { useEffect, useRef } from "react";
import { Colors, SP_Button, SP_TextButton } from "../../styles_general";
import { useFonts } from "expo-font";
import { useNavigate } from "react-router-native";
import { createNewSocket, socket } from "../../services/WebSocket";


interface Props {
    isVictory?: boolean,
    isDefeat?: boolean
}
const EndingGame: React.FC<Props> = ({...Props}) => {
    const navigate = useNavigate();

    const defeatArray: any = [];
    const victoryArray: any = [];
    const buttonsArray: any = [];

    //--------------DEFEAT--------------//

    const defeatPooSizeWidth = useRef(new Animated.Value(0)).current;
    const defeatTextOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (Props.isDefeat) {
            Animated.sequence([
                Animated.timing(defeatPooSizeWidth, {
                    toValue: 230,
                    duration: 800,
                    useNativeDriver: false
                }),
                Animated.timing(defeatTextOpacity, {
                    toValue: 1,
                    duration: 1800,
                    useNativeDriver: true
                })
            ]).start();
        }
    }, [Props.isDefeat]);

    const defeatPooSize = {width: defeatPooSizeWidth};
    const TextOpacityDefeat = {opacity: defeatTextOpacity};

    //-------------VICTORY--------------//

    const victoryLaurelSizeWidth = useRef(new Animated.Value(0)).current;
    const victoryTextOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (Props.isVictory) {
            Animated.sequence([
                Animated.timing(victoryLaurelSizeWidth, {
                    toValue: 230,
                    duration: 800,
                    useNativeDriver: false
                }),
                Animated.timing(victoryTextOpacity, {
                    toValue: 1,
                    duration: 1800,
                    useNativeDriver: true
                })
            ]).start();
        }
    }, [Props.isVictory]);

    const victoryLaurelSize = {width: victoryLaurelSizeWidth};
    const textVictoryOpacity = {opacity: victoryTextOpacity};

    //---------------STYLE---------------//

    const styles = StyleSheet.create({
        ViewWindow: {
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            padding: 32,
            zIndex: 30,
            borderColor: Colors.uiborder,
            borderTopWidth: 1
        },
        ViewCtn: {
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: '74%',
            alignItems: 'center',
            backgroundColor: Colors.secondary,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: Colors.uiborder,
        },
        ImageElement: {
            position: 'relative',
            marginTop: '16%',
            marginBottom: '7%'
        },
        TextElement: {
            color: Colors.uiborder,
            fontSize: 62,
            fontFamily: 'roboto-medium',
        },
        ButtonCtn: {
            position: "relative",
            width: '100%',
            height: 140,
            display: 'flex',
            justifyContent: "space-evenly",
            marginTop: '5%'
        }
    });


    // Defeat
    defeatArray.push(
        <View key={1} style={styles.ViewCtn}>
            <View >
                <Animated.Image style={[styles.ImageElement, defeatPooSize]}
                source={require("../../images/poo-solid_uiborder_230.png")}
                resizeMode="contain"
                />
            </View>
            <Animated.Text style={[styles.TextElement, TextOpacityDefeat]}>DÉFAITE</Animated.Text>
        </View>
    );

    // Victory
    victoryArray.push(
        <View key={2} style={styles.ViewCtn}>
            <View >
                <Animated.Image style={[styles.ImageElement, victoryLaurelSize]}
                source={require("../../images/space_traveler_uiborder_230.png")}
                resizeMode="contain"
                />
            </View>
            <Animated.Text style={[styles.TextElement, textVictoryOpacity]}>VICTOIRE</Animated.Text>
        </View>
    );

    // Buttons
    if (Props.isDefeat || Props.isVictory) {
        buttonsArray.push(
            <View key={3} style={styles.ButtonCtn}>
                <SP_Button primary onPress={() => [navigate('/'), socket.close(), createNewSocket()]}><SP_TextButton>MENU PRINCIPALE</SP_TextButton></SP_Button>
                <SP_Button onPress={() => [navigate('/Historic'), socket.close(), createNewSocket()]}><SP_TextButton>HISTORIQUE DES PARTIES</SP_TextButton></SP_Button>
            </View>
        );
    }

    return (
        <>
        {(Props.isDefeat || Props.isVictory) ? 
        <View style={styles.ViewWindow}>
            {Props.isDefeat ? defeatArray : null}
            {Props.isVictory ? victoryArray : null}
            {buttonsArray}
        </View>
        : null}
        </>
    )
};

export default EndingGame;

// , planetMoonSize, planetMoonPosition.getLayout() //
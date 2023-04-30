import * as React from "react";
import { View, Image, StyleSheet, Animated } from "react-native"
import { useEffect, useRef } from "react";
import { Colors, SP_Button, SP_TextButton } from "../../styles_general";
import { useFonts } from "expo-font";


interface Props {
    isVictory?: boolean,
    isDefeat?: boolean
}
const EndingGame: React.FC<Props> = ({...Props}) => {

    const defeatArray: any = []
    const victoryArray: any = []

    // Defeat
    const defeatPooSizeWidth = useRef(new Animated.Value(0)).current;
    const defeatTextOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
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
            ])
        ).start();
    }, [])

    const defeatPooSize = {width: defeatPooSizeWidth};
    const TextOpacityDefeat = {opacity: defeatTextOpacity};

    

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
            height: '70%',
            alignItems: 'center',
            backgroundColor: Colors.secondary,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: Colors.uiborder,
        },
        ImageCtn: {
            position: 'relative',
            display: "flex",
            width: '100%',
            height: '30%'
        },
        ImageElement: {
            position: 'relative',
            marginTop: '20%',
            marginBottom: '6%'
        },
        TextElement: {
            color: Colors.uiborder,
            fontSize: 64,
            fontFamily: 'roboto-medium',
        },
        ButtonCtn: {
            position: "relative",
            width: '100%',
            height: 120,
            display: 'flex',
            justifyContent: "space-evenly",
            marginTop: '10%'
        }
    })

    
    victoryArray.push(
        <View style={styles.ViewCtn}>
            <View >
                <Animated.Image key={1} style={[styles.ImageElement, defeatPooSize]}
                source={require("../../images/poo-solid_uiborder_230.png")}
                resizeMode="contain"
                />
            </View>
            <Animated.Text key={2} style={[styles.TextElement, TextOpacityDefeat]}>DÉFAITE</Animated.Text>
        </View>
    )

    return (
        <>
        <View style={styles.ViewWindow}>

            {Props.isDefeat ? victoryArray : victoryArray}


            <View style={styles.ButtonCtn}>
                <SP_Button primary><SP_TextButton>MENU PRINCIPALE</SP_TextButton></SP_Button>
                <SP_Button><SP_TextButton>HISTORIQUE DES PARTIES</SP_TextButton></SP_Button>
            </View>
        </View>
        </>
    )
};

export default EndingGame;

// , planetMoonSize, planetMoonPosition.getLayout() //
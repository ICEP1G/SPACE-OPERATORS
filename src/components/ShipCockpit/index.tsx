import * as React from "react";
import { View, Image, StyleSheet, Animated } from "react-native"
import { useRef } from "react";
import ShipCockpitBackground from "../ShipCockpitBackground";


interface Props {
    roundFail: boolean
}
const ShipCockpit: React.FC<Props> = ({...Props}) => {

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const executeFailAnimation = () => {
        Animated.sequence([
            Animated.timing(position, {
                toValue: { x: 5, y: 2 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 0, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 5, y: 2 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 0, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 5, y: 2 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 0, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 2, y: 1 },
                duration: 50,
                useNativeDriver: false,
            }),
            Animated.timing(position, {
                toValue: { x: 0, y: 0 },
                duration: 50,
                useNativeDriver: false,
            }),
        ]).start();
    }

    if (Props.roundFail === true) {
        executeFailAnimation();
        Props.roundFail = false;
    }


    return (
        <>
        <Animated.View style={[styles.AnimatedView, position.getLayout()]} >
            <Image style={styles.CockPitImage}
                source={require('../../images/InGame_Background_Cockpit.png')}
                resizeMode="cover"
            />
        </Animated.View>
        <ShipCockpitBackground />
        {/* <Image style={styles.PlanetBackGround} 
            source={require('../../images/InGame_Background_CockpitPlanet.jpg')}
            resizeMode="cover"
        /> */}
        </>
    )
}


const styles = StyleSheet.create({
    AnimatedView: {
        position: "relative",
        width: '100%',
        height: '22%',
        zIndex: 15
    },
    CockPitImage: {
        position: "absolute",
        width: '100%',
        height: '100%',
        zIndex: 15
    },
    PlanetBackGround: {
        position: "absolute",
        width: '100%',
        height: '22%',
        zIndex: 12
    }
});


export default ShipCockpit
import * as React from "react";
<<<<<<< HEAD
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native"
import { SP_Button } from "../../styles_general";
import { useState, useRef } from "react";
import { Easing } from "react-native-reanimated"
import { Defeat404, HeaderCtn, MessageText, TextButton, VictoryMedal, ViewCtn } from "./styles";
=======
import { View, Image, StyleSheet, Animated, TouchableOpacity } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"
import {  } from "./styles";
>>>>>>> 27452aca63e0fc342fbe3c1b814317e40ac7d155
import { useNavigate } from "react-router-native";


interface Props {
    isVisible: boolean,
    isVictory: boolean,
}
const ShipVictoryAnimation: React.FC<Props> = ({...Props}) => {
    const navigate = useNavigate();

    const [messageVisible, setMessageVisible] = useState(true);

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const size = useRef(new Animated.Value(350)).current;
    const positionRevert = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const sizeEndMessage = useRef(new Animated.Value(0)).current;

    // Create an animation to make the ship moving far away
    const StartAnimation = () => {
        Animated.sequence([
            // Run the animation at the same time
            Animated.parallel([
                // Translate the position of the ship
                Animated.timing(position, {
                    toValue: { x: 1200, y: -500 },
                    duration: 1500,
                    useNativeDriver: false,
                    easing: Easing.bezierFn(1, 0.45, 1, 0.20)
                }),
                // Reduce the size of the ship
                Animated.timing(size, {
                    toValue: 50,
                    duration: 1800,
                    useNativeDriver: false,
                }),
            ]),
            // Ship return in the view with another path
            Animated.timing(positionRevert, {
                toValue: { x: -1200, y: -700},
                duration: 800,
                useNativeDriver: false
            }),
            // Grow the ending message
            Animated.timing(sizeEndMessage, {
                toValue: 400,
                duration: 2000,
                useNativeDriver: false
            })
        ]).start();
    }


    if(Props.isVisible === true) {
        StartAnimation();
    }

    const resetValues = () => {
        position.setValue({x: 0, y: 0});
        size.setValue(350);
        positionRevert.setValue({x: 0, y: 0});
    }

    const sizeShip = {width: size};
    const sizeEndingMessage = {width: sizeEndMessage}

    const styles = StyleSheet.create({
        ViewCtn: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: 'black',
            zIndex: Props.isVisible ? 50 : -10
        },
        ShipImage: {
            position: "relative",
            marginTop: '70%',
            marginLeft: '-70%',
            zIndex: 60,
        },
        ShipImageRevert: {
            position: "absolute",
            width: 50,
            marginTop: 300,
            marginLeft: 1000,
            zIndex: 60,
        },

        EndingMessage: {
            position: "absolute",
            alignSelf: 'center',
            zIndex: 100
        }
    })


    return (
        <>
        <View style={styles.ViewCtn}>
            <Animated.Image style={[styles.ShipImage, position.getLayout(), sizeShip]}
                source={require('../../images/MainMenu_RazorBack_Ship.png')}
                resizeMode="contain"
                />
                <Animated.Image style={[styles.ShipImageRevert, positionRevert.getLayout()]}
                source={require('../../images/MainMenu_RazorBack_Ship_Revert.png')}
                resizeMode="contain"
                />
            
            <TouchableOpacity style={{position: 'absolute', width: 40, height: 40, backgroundColor: 'blue'}} onPress={StartAnimation}></TouchableOpacity>
            <TouchableOpacity style={{position: 'absolute', right: 60, width: 40, height: 40, backgroundColor: 'red'}} onPress={resetValues}></TouchableOpacity>


            <Animated.Image
                style={[styles.EndingMessage, sizeEndingMessage]}
                source={require('../../../assets/icons/poo-solid.svg')}
                resizeMode="contain"
            />
        </View>
        
        </>
    )
}

export default ShipVictoryAnimation
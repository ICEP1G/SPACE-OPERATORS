import * as React from "react";
import { View, Image, StyleSheet, Animated } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"


const ShipVictoryAnimation: React.FC = () => {

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const size = useRef(new Animated.Value(400)).current;
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(position, {
                    toValue: { x: 1200, y: -500 },
                    duration: 2000,
                    useNativeDriver: false,
                }),
                Animated.timing(rotation, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: false
                }),
                Animated.timing(position, {
                    toValue: { x: 200, y: -1000 },
                    duration: 2000,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [])

    useEffect(() => {
        Animated.sequence([
            Animated.timing(size, {
                toValue: 100,
                duration: 1500,
                useNativeDriver: false,
            }),
            Animated.timing(size, {
                toValue: 100,
                duration: 800,
                useNativeDriver: false,
            }),
        ]).start()
    }, [])

    const spin = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-80deg']
      });

    const sizeShip = {width: size};

    const styles = StyleSheet.create({
        ViewCtn: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: 'black',
            zIndex: 50
        },
        ShipImage: {
            position: "relative",
            marginTop: '90%',
            marginLeft: '-100%',
            zIndex: 60,
        }
    })


    return (
        <>
        <View style={styles.ViewCtn}>
            <Animated.Image style={[position.getLayout() , styles.ShipImage, sizeShip, {transform: [{rotate: spin}]}]}
                source={require('../../images/MainMenu_RazorBack_Ship.png')}
                resizeMode="contain"
                />
        </View>
        </>
    )
}

export default ShipVictoryAnimation
import * as React from "react";
import { View, Image, StyleSheet, Animated } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"


const ShipImage: React.FC = () => {

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(position, {
                    toValue: { x: 0, y: 5 },
                    duration: 1800,
                    useNativeDriver: false,
                }),
                Animated.timing(position, {
                    toValue: { x: 0, y: 0 },
                    duration: 1800,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [])


    return (
        <>
        <Animated.View style={[position.getLayout(), {width: '100%'}]}>
            <Image style={styles.style}
            source={require('../../images/MainMenu_RazorBack_Ship.png')}
            resizeMode="contain"
            />
        </Animated.View>
        </>
    )
}


const styles = StyleSheet.create({
    style: {
        position: "relative",
        width: '90%',
        alignSelf: 'center',
        zIndex: 10,
        top: '2%'
    }
})

export default ShipImage
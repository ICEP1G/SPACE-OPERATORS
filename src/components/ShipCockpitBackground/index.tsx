import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Animated} from "react-native"
import { Dot1, Dot2 } from "./styles";


const ShipCockpitBackground: React.FC = () => {

    const dot1Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current
    const dot2Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current
    const dot3Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current
    const dot4Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(dot1Animation, {
                    toValue: { x: -1000, y: 1000 },
                    duration: 4000,
                    useNativeDriver: false
                }),
                Animated.timing(dot2Animation, {
                    toValue: {x: 1000, y: 1000},
                    duration: 4000,
                    useNativeDriver: false
                }),
                Animated.timing(dot3Animation, {
                    toValue: { x: 1000, y: -1000 },
                    duration: 4000,
                    useNativeDriver: false
                }),
                Animated.timing(dot4Animation, {
                    toValue: {x: -1000, y: -1000},
                    duration: 4000,
                    useNativeDriver: false
                })
            ])
        ).start();
    });


    const style = StyleSheet.create({
        View: {
            position: "absolute",
            width: '100%',
            height: '22%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            zIndex: 12
        },
        DotStyle: {
            width: 1.5,
            height: 1.5,
            borderRadius: 1,
            backgroundColor: '#fff',
        }
    })

    return (
        <>
        <View style={style.View}>
            <Animated.View style={[style.DotStyle, {}, dot1Animation.getLayout()]}></Animated.View>
            <Animated.View style={[style.DotStyle, {} , dot2Animation.getLayout()]}></Animated.View>
            <Animated.View style={[style.DotStyle, {}, dot3Animation.getLayout()]}></Animated.View>
            <Animated.View style={[style.DotStyle, {} , dot4Animation.getLayout()]}></Animated.View>
        </View>
        </>
    )
}

export default ShipCockpitBackground;
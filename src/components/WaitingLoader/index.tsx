import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Animated} from "react-native"
import { Colors, SP_AestheticLine } from "../../styles_general";
import { WaitingLoaderContent, WaitingLoaderCtn, WaitingLoaderRectangleCtn, WaitingLoaderText } from "./styles";


const WaitingLoader: React.FC = () => {
    const [firstView] = useState(new Animated.Value(30));
    const [secondView] = useState(new Animated.Value(30));
    const [thirdView] = useState(new Animated.Value(30));

    // Animate each rectangle to expand vertically
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(firstView, {
                    toValue: 36,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.timing(firstView, {
                    toValue: 30,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.timing(secondView, {
                    toValue: 36,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.timing(secondView, {
                    toValue: 30,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.timing(thirdView, {
                    toValue: 36,
                    duration: 200,
                    useNativeDriver: false
                }),
                Animated.timing(thirdView, {
                    toValue: 30,
                    duration: 200,
                    useNativeDriver: false
                })
            ])
        ).start();
    });

    // Allow to define the height dynamically in the style of the component
    const animatedStyleOne = {height: firstView};
    const animatedStyleTwo = {height: secondView};
    const animatedStyleThree = {height: thirdView};

    const styles = StyleSheet.create({
        waitingLoaderRectange: {
            width: 14,
            marginVertical: 24,
            marginHorizontal: 2.5,
            backgroundColor: Colors.uiborder
        }
    });
    
    return (
        <>
        <WaitingLoaderCtn>
            <SP_AestheticLine secondary></SP_AestheticLine>
            <WaitingLoaderContent>
                <WaitingLoaderText>EN ATTENTE DE LA PROCHAINE OPERATION</WaitingLoaderText>
                <WaitingLoaderRectangleCtn>
                    <Animated.View style={[styles.waitingLoaderRectange, animatedStyleOne]}></Animated.View>
                    <Animated.View style={[styles.waitingLoaderRectange, animatedStyleTwo]}></Animated.View>
                    <Animated.View style={[styles.waitingLoaderRectange, animatedStyleThree]}></Animated.View>
                </WaitingLoaderRectangleCtn>
            </WaitingLoaderContent>
        </WaitingLoaderCtn>
        </>
    )
}

export default WaitingLoader;
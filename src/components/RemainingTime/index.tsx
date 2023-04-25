import * as React from "react";
import { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions, ActivityIndicator, Animated, ProgressBarAndroidBase} from "react-native"
import { Colors, SP_AestheticLine, SP_InfoView, SP_LabelView, SP_TextLabel } from "../../styles_general";
import { LoadingTimeBar, LoadingTimeBarCtn } from "./styles";
import { GameState, resetOperationGame } from "../../reducers/game/reducer";
import { useAppDispatch, useAppSelector } from "../../store";

interface Props {
    duration: number;
}

const RemainingTime: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();

    const [timing, setTiming] = useState(0)

    const gameState: GameState = 
        useAppSelector((state) => state.game);

    // Allow the loading bar to decrease each 100 milliseconde
    useEffect(() => {
        const roundDuration = Props.duration * 1000;
        let time = roundDuration;

        const countDown = setInterval(() => {
            time = time - 100;
            let progressWidth = ((time / roundDuration) * 100);
            if (time > 0) {
                let floatValue = parseFloat(progressWidth.toPrecision(3));
                setTiming(floatValue);
            }
            else {
                clearInterval(countDown);
                setTiming(0);
                console.log(time);
            }
        }, 100)




    }, [gameState.duration])


    return (
        <>
        <View style={styles.style}>
            <SP_AestheticLine></SP_AestheticLine>
            <SP_LabelView maxi>
                <SP_TextLabel style={{ bottom: 1, fontFamily: 'roboto-medium'}}>Temps restant</SP_TextLabel>
            </SP_LabelView>
            <LoadingTimeBarCtn>
                <LoadingTimeBar time={timing}></LoadingTimeBar>
            </LoadingTimeBarCtn>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    style: {
        position: "relative",
        flex: 1,
        flexDirection: 'row',
        zIndex: 22
    }
})

export default RemainingTime
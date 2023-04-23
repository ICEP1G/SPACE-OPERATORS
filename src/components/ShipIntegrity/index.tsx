import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Animated} from "react-native"
import { Colors } from "../../styles_general";
import { useAppDispatch, useAppSelector } from "../../store";
import { GameState } from "../../reducers/game/reducer";


const ShipIntegrity: React.FC = () => {
    const dispatch = useAppDispatch();

    const gameState: GameState = 
        useAppSelector((state) => state.game);

    const opacity = useRef(new Animated.Value(1)).current;

    // Animate the integrity bar when below or equal at 20% (blinking)
    useEffect(() => {
        if (gameState.shipIntegrity <= 20) {
            Animated.loop(
                Animated.sequence([
                  Animated.timing(opacity, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                  }),
                  Animated.timing(opacity, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }),
                ])
              ).start();
        }
      }, [gameState.shipIntegrity]);


    const styles = StyleSheet.create({
        integrityCtn: {
            height: 22,
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: Colors.uiborder,
            borderRadius: 2,
            marginLeft: 28,
            marginRight: 12
        },
        integrityBar: {
            width: gameState.shipIntegrity + '%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: gameState.shipIntegrity > 40 ? '#67BDBC' : Colors.primary
        }
    })


    return (
        <>
        <View style={styles.integrityCtn}>
            <Animated.View style={[styles.integrityBar, {opacity}]}></Animated.View>
            <Animated.Text style={{color: Colors.text, fontFamily: 'roboto-regular', fontSize: 11, position: 'absolute', alignSelf: 'center', left: '22%'}}>INTÉGRITÉ DU VAISSEAU</Animated.Text>
        </View>
        </>
    )
}

export default ShipIntegrity;
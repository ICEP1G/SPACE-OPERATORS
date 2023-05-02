import * as React from "react";
import { Image, StyleSheet, Animated } from "react-native"
import { useRef } from "react";
import ShipCockpitBackground from "../ShipCockpitBackground";
import { GameState } from "../../reducers/game/reducer";
import { useAppSelector } from "../../store";


interface Props {
    roundFail: boolean
    endingGameVictory?: boolean,
    endingGameDefeat?: boolean
}
const ShipCockpit: React.FC<Props> = ({...Props}) => {
    
    const gameState: GameState = 
        useAppSelector((state) => state.game);

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Shake the ship when the integrity decrease
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

    // Trigger the shacking animation when ship integrity decrease
    if (Props.roundFail === true) {
        executeFailAnimation();
        Props.roundFail = false;
    }

    // Animate the cockpit to feel it moving a little bit
    // React.useEffect(() => {
    //     Animated.loop(
    //         Animated.sequence([
    //             Animated.timing(position, {
    //                 toValue: { x: 1, y: -1 },
    //                 duration: 1000,
    //                 useNativeDriver: false,
    //             }),
    //             Animated.timing(position, {
    //                 toValue: { x: 1, y: 0 },
    //                 duration: 1000,
    //                 useNativeDriver: false,
    //             }),
    //             Animated.timing(position, {
    //                 toValue: { x: -1, y: -1 },
    //                 duration: 1000,
    //                 useNativeDriver: false,
    //             }),
    //             Animated.timing(position, {
    //                 toValue: { x: 0, y: 0 },
    //                 duration: 1000,
    //                 useNativeDriver: false,
    //             }),
    //         ])
    //     ).start();
    // });


    return (
        <>
        <Animated.View style={[styles.AnimatedView, position.getLayout()]} >
            {/* {(() => {
                switch (gameState.shipIntegrity) {
                    case 80:
                        return <Image style={styles.CockPitImage}
                                source={require('../../images/InGame_Background_Cockpit_80.png')}
                                resizeMode="cover"
                                />
                    case 60:
                        return <Image style={styles.CockPitImage}
                                source={require('../../images/InGame_Background_Cockpit_60.png')}
                                resizeMode="cover"
                                />
                    case 40:
                        return <Image style={styles.CockPitImage}
                                source={require('../../images/InGame_Background_Cockpit_40.png')}
                                resizeMode="cover"
                                />
                    case 20:
                        return <Image style={styles.CockPitImage}
                                source={require('../../images/InGame_Background_Cockpit_20.png')}
                                resizeMode="cover"
                                />
                    default:
                        return <Image style={styles.CockPitImage}
                                source={require('../../images/InGame_Background_Cockpit.png')}
                                resizeMode="cover"
                                />
                }
            }) ()} */}
            <Image style={styles.CockPitImage}
                source={require('../../images/InGame_Background_Cockpit.png')}
                resizeMode="cover"
            />
            <ShipCockpitBackground endingGameDefeat={Props.endingGameDefeat} endingGameVictory={Props.endingGameVictory}  />
        </Animated.View>
        </>
    )
}


const styles = StyleSheet.create({
    AnimatedView: {
        position: "relative",
        width: '100%',
        height: '22%',
        display: 'flex',
        zIndex: 12
    },
    CockPitImage: {
        position: "absolute",
        left: '-2%',
        top: '-2%',
        width: '103%',
        height: '103%',
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
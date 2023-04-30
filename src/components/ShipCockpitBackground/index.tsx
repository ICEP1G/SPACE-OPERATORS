import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, Image} from "react-native"
import { Dot1, Dot2 } from "./styles";
import { Easing } from "react-native-reanimated";


interface Props {
    endingGameVictory?: boolean,
    endingGameDefeat?: boolean
}
const ShipCockpitBackground: React.FC<Props> = ({...Props}) => {

    const innerDot1Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot2Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot3Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot4Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    // const innerDot5Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot6Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot7Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot8Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const innerDot9Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot10Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot11Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot12Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    // const innerDot13Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const innerDot14Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot15Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const innerDot16Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    //---------------------------------------------------//

    const extDot1Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot2Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot3Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot4Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const extDot5Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot6Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot7Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const extDot8Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const extDot9Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot10Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const extDot11Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot12Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const extDot13Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot14Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extDot15Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const extDot16Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    //---------------------------------------------------//

    const extExtDot1Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot2Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const extExtDot3Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot4Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const extExtDot5Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot6Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot7Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const extExtDot8Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    // const extExtDot9Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot10Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const extExtDot11Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot12Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    const extExtDot13Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    // const extExtDot14Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot15Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const extExtDot16Animation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;



    //-------------------------DOT 2---------------------------//

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(innerDot2Animation, {
                    toValue: {x: -150, y: -150},
                    duration: 2000,
                    useNativeDriver: false
                }),
                Animated.timing(extDot2Animation, {
                    toValue: {x: -500, y: -150},
                    duration: 2500,
                    useNativeDriver: false
                }),
                // Animated.timing(extExtDot2Animation, {
                //     toValue: {x: -300, y: -50},
                //     duration: 3000,
                //     useNativeDriver: false
                // }),
            ])
        ).start();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot6Animation, {
                        toValue: {x: -150, y: -150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot6Animation, {
                        toValue: {x: -500, y: -150},
                        duration: 2500,
                        useNativeDriver: false
                    }),
                    Animated.timing(extExtDot6Animation, {
                        toValue: {x: -300, y: -50},
                        duration: 3000,
                        useNativeDriver: false
                    }),
                ])
            ).start()
        }, 500)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot10Animation, {
                        toValue: {x: -150, y: -150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot10Animation, {
                        toValue: {x: -500, y: -150},
                        duration: 2500,
                        useNativeDriver: false
                    }),
                    Animated.timing(extExtDot10Animation, {
                        toValue: {x: -300, y: -50},
                        duration: 3000,
                        useNativeDriver: false
                    }),
                ])
            ).start()
        }, 1000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    // Animated.timing(innerDot14Animation, {
                    //     toValue: {x: -150, y: -150},
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                    Animated.timing(extDot14Animation, {
                        toValue: {x: -500, y: -150},
                        duration: 2500,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extExtDot14Animation, {
                    //     toValue: {x: -300, y: -50},
                    //     duration: 3000,
                    //     useNativeDriver: false
                    // }),
                ])
            ).start()
        }, 1500)
    }, []);


    //-------------------------DOT 3---------------------------//


    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    // Animated.timing(innerDot3Animation, {
                    //     toValue: { x: 150, y: -150 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                    Animated.timing(extDot3Animation, {
                        toValue: { x: 500, y: -150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extExtDot3Animation, {
                    //     toValue: { x: 300, y: -50 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                ])
            ).start()
        }, 1000)
    }, [])


    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot7Animation, {
                        toValue: { x: 150, y: -150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot7Animation, {
                        toValue: { x: 500, y: -150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extExtDot7Animation, {
                        toValue: { x: 300, y: -50 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                ])
            ).start()
        }, 1500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot11Animation, {
                        toValue: { x: 150, y: -150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extDot11Animation, {
                    //     toValue: { x: 500, y: -150 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                    // Animated.timing(extExtDot11Animation, {
                    //     toValue: { x: 300, y: -50 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                ])
            ).start()
        }, 2000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot15Animation, {
                        toValue: { x: 150, y: -150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot15Animation, {
                        toValue: { x: 500, y: -150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extExtDot15Animation, {
                    //     toValue: { x: 300, y: -50 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                ])
            ).start()
        }, 2500)
    }, [])


    //-------------------------DOT 4---------------------------//

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot4Animation, {
                        toValue: {x: 150, y: 150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot4Animation, {
                        toValue: {x: 500, y: 150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extExtDot4Animation, {
                        toValue: {x: 300, y: 50},
                        duration: 2000,
                        useNativeDriver: false
                    })
                ])
            ).start()
        }, 500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot8Animation, {
                        toValue: {x: 150, y: 150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extDot8Animation, {
                    //     toValue: {x: 500, y: 150},
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                    // Animated.timing(extExtDot8Animation, {
                    //     toValue: {x: 300, y: 50},
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // })
                ])
            ).start()
        }, 1000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot12Animation, {
                        toValue: {x: 150, y: 150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot12Animation, {
                        toValue: {x: 500, y: 150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extExtDot12Animation, {
                        toValue: {x: 300, y: 50},
                        duration: 2000,
                        useNativeDriver: false
                    })
                ])
            ).start()
        }, 1500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot16Animation, {
                        toValue: {x: 150, y: 150},
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extDot16Animation, {
                    //     toValue: {x: 500, y: 150},
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                    Animated.timing(extExtDot16Animation, {
                        toValue: {x: 300, y: 50},
                        duration: 2000,
                        useNativeDriver: false
                    })
                ])
            ).start()
        }, 2000)
    }, [])

     //-------------------------DOT 1---------------------------//

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot1Animation, {
                        toValue: { x: -150, y: 150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot1Animation, {
                        toValue: { x: -500, y: 150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extExtDot1Animation, {
                        toValue: { x: -300, y: 50 },
                        duration:2000,
                        useNativeDriver: false
                    })
                ])
            ).start()
        }, 1500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    // Animated.timing(innerDot5Animation, {
                    //     toValue: { x: -150, y: 150 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                    Animated.timing(extDot5Animation, {
                        toValue: { x: -500, y: 150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extExtDot5Animation, {
                    //     toValue: { x: -300, y: 50 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // })
                ])
            ).start()
        }, 2000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(innerDot9Animation, {
                        toValue: { x: -150, y: 150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extDot9Animation, {
                        toValue: { x: -500, y: 150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    // Animated.timing(extExtDot9Animation, {
                    //     toValue: { x: -300, y: 50 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // })
                ])
            ).start()
        }, 2500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    // Animated.timing(innerDot13Animation, {
                    //     toValue: { x: -150, y: 150 },
                    //     duration: 2000,
                    //     useNativeDriver: false
                    // }),
                    Animated.timing(extDot13Animation, {
                        toValue: { x: -500, y: 150 },
                        duration: 2000,
                        useNativeDriver: false
                    }),
                    Animated.timing(extExtDot13Animation, {
                        toValue: { x: -300, y: 50 },
                        duration: 2000,
                        useNativeDriver: false
                    })
                ])
            ).start()
        }, 3000)
    }, [])

    //-----------------------------------------------------------------------------//
    //-------------------------------START-THE-GAME--------------------------------//
    //-----------------------------------------------------------------------------//

    // Planet Mars When Game start
    const planetMarsPosition = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(planetMarsPosition, {
                toValue: {x: -200, y: 60},
                duration: 2000,
                useNativeDriver: false,
            }),
            Animated.timing(planetMarsPosition, {
                toValue: {x: -300, y: 300},
                duration: 3000,
                useNativeDriver: false,
            }),
        ]).start();
    }, []);

    const [dotOpacity, setDotOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setDotOpacity(1);
        }, 2200)
    }, []);


    //-------------//

    // Asteroid 1
    const asteroid1SizeWidth = useRef(new Animated.Value(0)).current;
    const asteroid1SizeHeight = useRef(new Animated.Value(0)).current;
    const asteroid1Position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const asteroid1Rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(asteroid1SizeWidth, {
                        toValue: 250,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid1SizeHeight, {
                        toValue: 250,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid1Position, {
                        toValue: {x: 400, y: 0},
                        duration: 4000,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid1Rotation, {
                        toValue: 1,
                        duration: 3000,
                        useNativeDriver: false
                    })
                ])
            ).start();
        }, 5000)
    }, [])

    const asteroid1Size = {width: asteroid1SizeWidth, height: asteroid1SizeHeight};

    const rotate = asteroid1Rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['-90deg', '30deg'],
      });

    //-------------//

    // Asteroid 2
    const asteroid2SizeWidth = useRef(new Animated.Value(0)).current;
    const asteroid2SizeHeight = useRef(new Animated.Value(0)).current;
    const asteroid2Position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(asteroid2SizeWidth, {
                        toValue: 130,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid2SizeHeight, {
                        toValue: 130,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid2Position, {
                        toValue: {x: -700, y: -700},
                        duration: 4000,
                        useNativeDriver: false
                    }),
                ])
            ).start();
        }, 6000)
    }, [])

    const asteroid2Size = {width: asteroid2SizeWidth, height: asteroid2SizeHeight};

    //-------------//

    // Asteroid 3
    const asteroid3SizeWidth = useRef(new Animated.Value(0)).current;
    const asteroid3SizeHeight = useRef(new Animated.Value(0)).current;
    const asteroid3Position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(asteroid3SizeWidth, {
                        toValue: 130,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid3SizeHeight, {
                        toValue: 130,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid3Position, {
                        toValue: {x: 1000, y: -700},
                        duration: 4000,
                        useNativeDriver: false
                    }),
                ])
            ).start();
        }, 7000)
    }, [])

    const asteroid3Size = {width: asteroid3SizeWidth, height: asteroid3SizeHeight};

    //-------------//

    // Asteroid 4
    const asteroid4SizeWidth = useRef(new Animated.Value(0)).current;
    const asteroid4SizeHeight = useRef(new Animated.Value(0)).current;
    const asteroid4Position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.parallel([
                    Animated.timing(asteroid4SizeWidth, {
                        toValue: 50,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid4SizeHeight, {
                        toValue: 50,
                        duration: 1500,
                        useNativeDriver: false
                    }),
                    Animated.timing(asteroid4Position, {
                        toValue: {x: -700, y: 50},
                        duration: 4000,
                        useNativeDriver: false
                    }),
                ])
            ).start();
        }, 8000)
    }, [])

    const asteroid4Size = {width: asteroid4SizeWidth, height: asteroid4SizeHeight};


    //-----------------------------------------------------------------------------//
    //------------------------------PLANET-ANIMATION-------------------------------//
    //-----------------------------------------------------------------------------//

    // Planet 1 (blue)
    const planet1SizeWidth = useRef(new Animated.Value(0)).current;
    const planet1SizeHeight = useRef(new Animated.Value(0)).current;
    const planet1Position = useRef(new Animated.ValueXY({x: 0, y:0})).current;

    // Planet 2 (white)
    const planet2SizeWidth = useRef(new Animated.Value(0)).current;
    const planet2SizeHeight = useRef(new Animated.Value(0)).current;
    const planet2Position = useRef(new Animated.ValueXY({x: 0, y:0})).current;

    // Planet 3 (purple)
    const planet3SizeWidth = useRef(new Animated.Value(0)).current;
    const planet3SizeHeight = useRef(new Animated.Value(0)).current;
    const planet3Position = useRef(new Animated.ValueXY({x: 0, y:0})).current;

    // Planet 4 (grey)
    const planet4SizeWidth = useRef(new Animated.Value(0)).current;
    const planet4SizeHeight = useRef(new Animated.Value(0)).current;
    const planet4Position = useRef(new Animated.ValueXY({x: 0, y:0})).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.sequence([
                    Animated.parallel([
                        Animated.timing(planet1SizeWidth, {
                            toValue: 300,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet1SizeHeight, {
                            toValue: 300,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet1Position, {
                            toValue: {x: -900, y: 50},
                            duration: 25000,
                            useNativeDriver: false,
                            easing: Easing.bezierFn(0.7, 0.5, 0.5, 1)
                        }),
                    ]),
                    Animated.delay(12000),
                    Animated.parallel([
                        Animated.timing(planet2SizeWidth, {
                            toValue: 450,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet2SizeHeight, {
                            toValue: 450,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet2Position, {
                            toValue: {x: 900, y: -50},
                            duration: 25000,
                            useNativeDriver: false,
                            easing: Easing.bezierFn(0.7, 0.5, 0.5, 1)
                        }),
                    ]),
                    Animated.delay(12000),
                    Animated.parallel([
                        Animated.timing(planet3SizeWidth, {
                            toValue: 400,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet3SizeHeight, {
                            toValue: 400,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet3Position, {
                            toValue: {x: -900, y: -180},
                            duration: 25000,
                            useNativeDriver: false,
                            easing: Easing.bezierFn(0.7, 0.5, 0.5, 1)
                        }),
                    ]),
                    Animated.delay(12000),
                    Animated.parallel([
                        Animated.timing(planet4SizeWidth, {
                            toValue: 300,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet4SizeHeight, {
                            toValue: 300,
                            duration: 15000,
                            useNativeDriver: false
                        }),
                        Animated.timing(planet4Position, {
                            toValue: {x: 900, y: -210},
                            duration: 25000,
                            useNativeDriver: false,
                            easing: Easing.bezierFn(0.7, 0.5, 0.5, 1)
                        }),
                    ])
                ])
            ).start();
        }, 18000)
    }, [])

    const planet1Size = {width: planet1SizeWidth, height: planet1SizeHeight};
    const planet2Size = {width: planet2SizeWidth, height: planet2SizeHeight};
    const planet3Size = {width: planet3SizeWidth, height: planet3SizeHeight};
    const planet4Size = {width: planet4SizeWidth, height: planet4SizeHeight};


    //-----------------------------------------------------------------------------//
    //-------------------------------DEFEAT-SCREEN---------------------------------//
    //-----------------------------------------------------------------------------//

    // The big asteroid
    const asteroidDefeatSizeWidth = useRef(new Animated.Value(0)).current;
    const asteroidDefeatSizeHeight = useRef(new Animated.Value(0)).current;

    // Trigger the defeat ending animation
    if (Props.endingGameDefeat) {
        Animated.parallel([
            Animated.timing(asteroidDefeatSizeWidth, {
                toValue: 1000,
                duration: 2000,
                useNativeDriver: false
            }),
            Animated.timing(asteroidDefeatSizeHeight, {
                toValue: 1000,
                duration: 2000,
                useNativeDriver: false
            })
        ]).start();
    }

    const asteroidDefeatSize = {width: asteroidDefeatSizeWidth, height: asteroidDefeatSizeHeight};


    //-----------------------------------------------------------------------------//
    //-------------------------------VICTORY-SCREEN--------------------------------//
    //-----------------------------------------------------------------------------//

    // Planet Earth
    const planetEarthSizeWidth = useRef(new Animated.Value(0)).current;
    const planetEarthSizeHeight = useRef(new Animated.Value(0)).current;
    const planetEarthPosition = useRef(new Animated.ValueXY({x: 0, y:0})).current;

    // the Moon
    const planetMoonSizeWidth = useRef(new Animated.Value(0)).current;
    const planetMoonSizeHeight = useRef(new Animated.Value(0)).current;
    const planetMoonPosition = useRef(new Animated.ValueXY({x: 0, y:0})).current;

    // Hide the dots and asteroids
    useEffect(() => {
        if (Props.endingGameVictory == true) {
            setDotOpacity(0);
        }
    }, [Props.endingGameVictory])

    // Trigger the victory ending animation
    if (Props.endingGameVictory) {
        // Display Earth and the Moon
        Animated.parallel([
            // Earth
            Animated.timing(planetEarthSizeWidth, {
                toValue: 280,
                duration: 2000,
                useNativeDriver: false
            }),
            Animated.timing(planetEarthSizeHeight, {
                toValue: 280,
                duration: 2000,
                useNativeDriver: false
            }),
            Animated.timing(planetEarthPosition, {
                toValue: {x: -250, y: -30},
                duration: 2000,
                useNativeDriver: false,
            }),
            // Moon
            Animated.timing(planetMoonSizeWidth, {
                toValue: 28,
                duration: 2000,
                useNativeDriver: false
            }),
            Animated.timing(planetMoonSizeHeight, {
                toValue: 28,
                duration: 2000,
                useNativeDriver: false
            }),
            Animated.timing(planetMoonPosition, {
                toValue: {x: 75, y: -35},
                duration: 2000,
                useNativeDriver: false,
            })
        ]).start();
    }

    const planetEarthSize = {width: planetEarthSizeWidth, height: planetEarthSizeHeight};
    const planetMoonSize = {width: planetMoonSizeWidth, height: planetMoonSizeHeight};


    //---------------------STYLES--------------------//

    const styles = StyleSheet.create({
        RelativeView: {
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            zIndex: 12
        },
        SpaceDot: {
            position: 'absolute',
            width: 1.5,
            height: 1.5,
            borderRadius: 1,
            backgroundColor: '#b5b5b3',
            zIndex: 13,
            opacity: 0.6
        },
        SpaceDotLight: {
            position: 'absolute',
            width: 1.5,
            height: 1.5,
            borderRadius: 1,
            backgroundColor: '#b5b5b3',
            zIndex: 13,
            opacity: 0.4
        },
        PlanetMars: {
            position: 'absolute',
            width: 450,
            height: 450,
            marginLeft: -60,
            marginTop: -50
        },
        AnimationElement: {
            position: 'absolute',
            marginTop: -10,
            width: 10,
        }
    })

    return (
        <>
        <View style={styles.RelativeView}>
            <View style={{position: 'absolute', display: 'flex'}}>
                <Animated.Image
                    style={[styles.PlanetMars, planetMarsPosition.getLayout()]}
                    source={require("../../images/planet_mars.png")}
                    resizeMode="contain"
                />


                <Animated.Image style={[styles.AnimationElement, planet1Size, planet1Position.getLayout()]}
                    source={require("../../images/planet_blue_blur.png")}
                    resizeMode="contain"
                />
                <Animated.Image style={[styles.AnimationElement, planet2Size, planet2Position.getLayout()]}
                    source={require("../../images/planet_white.png")}
                    resizeMode="contain"
                />
                <Animated.Image style={[styles.AnimationElement, planet3Size, planet3Position.getLayout()]}
                    source={require("../../images/planet_purple_blur.png")}
                    resizeMode="contain"
                />
                <Animated.Image style={[styles.AnimationElement, planet4Size, planet4Position.getLayout()]}
                    source={require("../../images/planet_pluto_blur.png")}
                    resizeMode="contain"
                />



                {Props.endingGameDefeat ?
                <Animated.Image style={[{position: 'relative', marginTop: -10, marginLeft: -40, width: 10, height: 10}, asteroidDefeatSize]}
                source={require("../../images/asteroid1.png")}
                resizeMode="contain"
                /> : null}


                {Props.endingGameVictory ?
                <Animated.Image style={[styles.AnimationElement, planetEarthSize, planetEarthPosition.getLayout()]}
                source={require("../../images/planet_earth.png")}
                resizeMode="contain"
                /> : null}
                {Props.endingGameVictory ?
                <Animated.Image style={[styles.AnimationElement, planetMoonSize, planetMoonPosition.getLayout()]}
                source={require("../../images/the_moon.png")}
                resizeMode="contain"
                /> : null}
                


                <View style={{opacity: dotOpacity}}>

                <Animated.Image style={[styles.AnimationElement, asteroid1Size, asteroid1Position.getLayout(), {transform: [{rotate}] }]}
                    source={require("../../images/asteroid1.png")}
                    resizeMode="contain"
                />
                <Animated.Image style={[styles.AnimationElement, asteroid2Size, asteroid2Position.getLayout(), {transform: [{rotate}] }]}
                    source={require("../../images/asteroid2.png")}
                    resizeMode="contain"
                />
                <Animated.Image style={[styles.AnimationElement, asteroid3Size, asteroid3Position.getLayout(), {transform: [{rotate}] }]}
                    source={require("../../images/asteroid3.png")}
                    resizeMode="contain"
                />
                <Animated.Image style={[styles.AnimationElement, asteroid4Size, asteroid4Position.getLayout(), {transform: [{rotate}] }]}
                    source={require("../../images/asteroid2.png")}
                    resizeMode="contain"
                />

                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -10, marginTop: 10}, innerDot1Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDot, {marginLeft: -10, marginTop: -10}, innerDot2Animation.getLayout()]}></Animated.View>
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: 10, marginTop: -10}, innerDot3Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDot, {marginLeft: 10, marginTop: 10}, innerDot4Animation.getLayout()]}></Animated.View>

                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: -5, marginTop: 5}, innerDot5Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -5, marginTop: -5}, innerDot6Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDot, {marginLeft: 5, marginTop: -5}, innerDot7Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 5, marginTop: 5}, innerDot8Animation.getLayout()]}></Animated.View>

                <Animated.View style={[styles.SpaceDot, {marginLeft: -2, marginTop: 2}, innerDot9Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDot, {marginLeft: -2, marginTop: -2}, innerDot10Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 2, marginTop: -2}, innerDot11Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 2, marginTop: 2}, innerDot12Animation.getLayout()]}></Animated.View>

                {/* <Animated.View style={[styles.SpaceDot, {marginLeft: -5, marginTop: 5}, innerDot13Animation.getLayout()]}></Animated.View> */}
                {/* <Animated.View style={[styles.SpaceDot, {marginLeft: -5, marginTop: -5}, innerDot14Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDot, {marginLeft: 5, marginTop: -5}, innerDot15Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDot, {marginLeft: 5, marginTop: 5}, innerDot16Animation.getLayout()]}></Animated.View>



                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -30, marginTop: 20}, extDot1Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -30, marginTop: -20}, extDot2Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 30, marginTop: -20}, extDot3Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 30, marginTop: 20}, extDot4Animation.getLayout()]}></Animated.View>

                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -25, marginTop: 15}, extDot5Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDot, {marginLeft: -25, marginTop: -15}, extDot6Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 25, marginTop: -15}, extDot7Animation.getLayout()]}></Animated.View>
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: 25, marginTop: 15}, extDot8Animation.getLayout()]}></Animated.View> */}

                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: 12}, extDot9Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDot, {marginLeft: -22, marginTop: -12}, extDot10Animation.getLayout()]}></Animated.View>
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: -12}, extDot11Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDot, {marginLeft: 22, marginTop: 12}, extDot12Animation.getLayout()]}></Animated.View>

                {/* <Animated.View style={[styles.SpaceDot, {marginLeft: -22, marginTop: 12}, extDot13Animation.getLayout()]}></Animated.View> */}
                {<Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: -12}, extDot14Animation.getLayout()]}></Animated.View>}
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: -12}, extDot15Animation.getLayout()]}></Animated.View>
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: 12}, extDot16Animation.getLayout()]}></Animated.View> */}


                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: 12}, extExtDot1Animation.getLayout()]}></Animated.View>
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: -12}, extExtDot2Animation.getLayout()]}></Animated.View> */}
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: -12}, extExtDot3Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: 12}, extExtDot4Animation.getLayout()]}></Animated.View>

                {/* <Animated.View style={[styles.SpaceDot, {marginLeft: -22, marginTop: 12}, extExtDot5Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: -12}, extExtDot6Animation.getLayout()]}></Animated.View>
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: -12}, extExtDot7Animation.getLayout()]}></Animated.View>
                {/* <Animated.View style={[styles.SpaceDot, {marginLeft: 22, marginTop: 12}, extExtDot8Animation.getLayout()]}></Animated.View> */}

                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: 12}, extExtDot9Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: -12}, extExtDot10Animation.getLayout()]}></Animated.View>
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: -12}, extExtDot11Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: 12}, extExtDot12Animation.getLayout()]}></Animated.View>

                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: 12}, extExtDot13Animation.getLayout()]}></Animated.View> */}
                {/* <Animated.View style={[styles.SpaceDotLight, {marginLeft: -22, marginTop: -12}, extExtDot14Animation.getLayout()]}></Animated.View> */}
                {/* <Animated.View style={[styles.SpaceDot, {marginLeft: 22, marginTop: -12}, extExtDot15Animation.getLayout()]}></Animated.View> */}
                <Animated.View style={[styles.SpaceDotLight, {marginLeft: 22, marginTop: 12}, extExtDot16Animation.getLayout()]}></Animated.View>

                </View>

            </View>
        </View>
        </>
    )
}

export default ShipCockpitBackground;
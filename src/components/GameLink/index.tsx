import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';


//-------------------------------------THIS COMPONENT ISN'T WORKING--------------------------------------//
//-----------------------------------IT WILL MAYBE CAME IN A FUTUR DLC-----------------------------------//

const GameLink: React.FC = () => {

    // Get the current value of the targeted element
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {useNativeDriver: true}),
            onPanResponderRelease: () => {
            pan.extractOffset();
            },
        }),
    ).current;


    return (
        <>
        <View style={styles.container}>
            <Animated.View
                style={{
                transform: [{translateX: pan.x}, {translateY: pan.y}],
                }}
                {...panResponder.panHandlers}>
                <View style={styles.box} />
            </Animated.View>
        </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: 'bold',
    },
    box: {
      height: 150,
      width: 150,
      backgroundColor: 'blue',
      borderRadius: 5,
    },
  });


  export default GameLink;


    
//     return (
//         <>
//         <GameLinkCtn>
//             <GameLinkButtonLeft value={Colors.uiborder}></GameLinkButtonLeft>
//             <GameLinkButtonLeft value={Colors.uiborder}></GameLinkButtonLeft>
//             <GameLinkButtonLeft value={Colors.uiborder}></GameLinkButtonLeft>
//             <GameLinkButtonLeft value={Colors.uiborder}></GameLinkButtonLeft>
//         </GameLinkCtn>
//         </>
//     )
// };

// const button1Ref = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
// const button2Ref = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

// const panResponder = useRef(
//   PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: (evt, gestureState) => {
//       Animated.event(
//         [null, { dx: gestureState.dx as Mapping, dy: gestureState.dy as Mapping }],
//         { useNativeDriver: false }
//       )(button1Ref);
//     },
//     onPanResponderRelease: (evt, gestureState) => {
//       const { x, y } = button1Ref.getLayout();
//       const button2Layout = button2Ref.current.measure((x, y, width, height, pageX, pageY) => {
//         if (gestureState.moveX > pageX && gestureState.moveX < pageX + width && gestureState.moveY > pageY && gestureState.moveY < pageY + height) {
//           Animated.spring(button1Ref, { toValue: { x: pageX, y: pageY }, useNativeDriver: false }).start();
//         } else {
//           Animated.spring(button1Ref, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
//         }
//       });
//     },
//   })
// ).current;

// return (
//   <View>
//     <Animated.View style={{ transform: [{ translateX: button1Ref.x }, { translateY: button1Ref.y }] }}>
//         <TouchableOpacity {...panResponder.panHandlers}>
//             <Text>Button 1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity ref={button2Ref}>
//             <Text>Button 2</Text>
//         </TouchableOpacity>
//     </Animated.View>
//   </View>
// );
// };




// const [position, setPosition] = useState({ x: 0, y: 0 });
// const panResponder = useRef(
//   PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: (evt, gestureState) => {
//       setPosition({ x: gestureState.moveX, y: gestureState.moveY });
//     },
//   })
// ).current;

// return (
//   <View
//     style={styles.container}
//     {...panResponder.panHandlers}
//   >
//     <View style={[styles.circle, { left: position.x, top: position.y }]} />
//   </View>
// );
// };

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
// },
// circle: {
//   width: 50,
//   height: 50,
//   borderRadius: 25,
//   backgroundColor: 'red',
//   position: 'absolute',
// },
// });
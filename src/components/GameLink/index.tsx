import React, { useRef, useState } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import { GameLinkButtonLeft, GameLinkCtn } from './styles';
import { Colors } from "../../styles_general";


interface Props {
    id: number,
    valueType: string,
    value: string | number,
}
const GameLink: React.FC<Props> = ({...Props}) => {

    
    return (
        <>
        <GameLinkCtn>
            <GameLinkButtonLeft value={Props.valueType == "color" ? Props.value : Colors.uiborder}></GameLinkButtonLeft>
        </GameLinkCtn>
        </>
    )
};

export default GameLink;




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
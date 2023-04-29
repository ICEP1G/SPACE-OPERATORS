import * as React from "react";
import { View, StyleSheet } from "react-native"
import { SP_AestheticLine, SP_InfoView, SP_LabelView, SP_TextLabel } from "../../styles_general";


interface Props {
    name: string
}

const PlayerOperatorName: React.FC<Props> = ({...Props}) => {


    return (
        <>
        <View style={styles.style}>
            <SP_AestheticLine secondary></SP_AestheticLine>
            <SP_LabelView maxi>
                <SP_TextLabel maxi>NOM</SP_TextLabel>
            </SP_LabelView>
            <SP_InfoView maxi centerContent>
                <SP_TextLabel maxi style={{fontFamily: 'roboto-regular'}}>{Props.name}</SP_TextLabel>
            </SP_InfoView>
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

export default PlayerOperatorName
import * as React from "react";
import { View, StyleSheet } from "react-native"
import { SP_AestheticLine, SP_InfoView, SP_LabelView, SP_TextLabel } from "../../styles_general";

interface Props {
    role: string
}

const PlayerRole: React.FC<Props> = ({...Props}) => {


    return (
        <>
        <View style={styles.style}>
            <SP_AestheticLine></SP_AestheticLine>
            <SP_LabelView maxi>
                <SP_TextLabel maxi>RÔLE</SP_TextLabel>
            </SP_LabelView>
            <SP_InfoView maxi centerContent>
                <SP_TextLabel maxi style={{fontFamily: 'roboto-regular'}}>{Props.role}</SP_TextLabel>
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

export default PlayerRole
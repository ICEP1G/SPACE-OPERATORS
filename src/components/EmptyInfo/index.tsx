import * as React from "react";
import { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { SP_AestheticLine, SP_InfoView, SP_LabelView, SP_TextLabel } from "../../styles_general";
import { LineView, TextEmpty } from "./styles";


const EmptyInfo: React.FC = () => {


    return (
        <>
        <View style={styles.style}>
            <LineView></LineView>
                <TextEmpty>VIDE</TextEmpty>
            <LineView></LineView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    style: {
        position: "relative",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 22
    }
})

export default EmptyInfo
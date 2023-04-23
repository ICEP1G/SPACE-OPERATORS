import * as React from "react";
import { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors, SP_AestheticLine } from "../../styles_general";
import { WaitingLoaderContent, WaitingLoaderCtn, WaitingLoaderRectangle1, WaitingLoaderRectangle2, WaitingLoaderRectangle3, WaitingLoaderRectangleCtn, WaitingLoaderText } from "./styles";




const WaitingLoader: React.FC = () => {
    const [isLarge1, setIsLarge1] = useState(false);
    const [isLarge2, setIsLarge2] = useState(false);
    const [isLarge3, setIsLarge3] = useState(false);

    // useEffect(() => {
    //     let rectangleWide = 1;
    //     setInterval(() => {
    //         console.log(rectangleWide);
    //         switch (rectangleWide) {
    //             case 1:
    //                 setIsLarge1(true);
    //                 setIsLarge3(false);
    //                 break;
    //             case 2:
    //                 setIsLarge1(false);
    //                 setIsLarge2(true);
    //                 break;
    //             case 3:
    //                 setIsLarge2(false);
    //                 setIsLarge3(true);
    //                 break;
    //         }
    //         rectangleWide++;
    //         if (rectangleWide > 3) {
    //             rectangleWide = 1;
    //         }
    //     }, 1000)
    // })
    

    return (
        <>
        <WaitingLoaderCtn>
            <SP_AestheticLine secondary></SP_AestheticLine>
            <WaitingLoaderContent>
                <WaitingLoaderText>EN ATTENTE DE LA PROCHAINE OPERATION</WaitingLoaderText>
                <WaitingLoaderRectangleCtn>
                    <WaitingLoaderRectangle1 isLarge={isLarge1}></WaitingLoaderRectangle1>
                    <WaitingLoaderRectangle2 isLarge={isLarge2}></WaitingLoaderRectangle2>
                    <WaitingLoaderRectangle3 isLarge={isLarge3}></WaitingLoaderRectangle3>
                </WaitingLoaderRectangleCtn>
            </WaitingLoaderContent>
        </WaitingLoaderCtn>
        </>
    )
}

export default WaitingLoader;
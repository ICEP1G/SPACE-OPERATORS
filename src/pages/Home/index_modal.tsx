import * as React from "react";
import { useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import { User } from "../../models/User";
import { GetMainUser, MainUserState, updateMainUser } from "../../reducers/mainUser/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"
import { ViewCtn, ViewModal } from "./styles_modal";


interface Props {
    visible: boolean
}

const HomeModal: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();



    return (
        <>
        <ViewCtn visible={Props.visible} pointerEvents="box-none">
            <ViewModal visible={Props.visible}>
                <Text style={{backgroundColor: 'white'}}>Bonjour vous allez bien</Text>
            </ViewModal>
        </ViewCtn>
        </>
    )
}

export default HomeModal;
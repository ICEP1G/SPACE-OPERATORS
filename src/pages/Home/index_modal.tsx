import * as React from "react";
import { useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_AestheticLine, SP_LabelView, SP_TextLabel } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import { User } from "../../models/User";
import { MainUserState, updateMainUser } from "../../reducers/mainUser/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"
import { ContentView, GameIdCtn, GameIdInput, HeaderButton, HeaderButtonIcon, HeaderCtn, HeaderText, HeaderView, ViewCtn, ViewModal } from "./styles_modal";


interface Props {
    visible: boolean
}

const HomeModal: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();



    return (
        <>
        <ViewCtn visible={Props.visible} pointerEvents="none">
            <ViewModal visible={Props.visible} pointerEvents="none">
                <HeaderCtn>
                    <HeaderView><HeaderText>ENTER YOUR PARTY INFO</HeaderText></HeaderView>
                    <HeaderButton>
                        <HeaderButtonIcon
                            source={require('../../../assets/icons/cross.png')}
                            resizeMode="contain"
                        />
                    </HeaderButton>
                </HeaderCtn>
                <ContentView>
                    <GameIdCtn>
                        <SP_AestheticLine/>
                        <SP_LabelView><SP_TextLabel maxi>GAME ID</SP_TextLabel></SP_LabelView>
                        <GameIdInput></GameIdInput>
                    </GameIdCtn>
                </ContentView>
            </ViewModal>
        </ViewCtn>
        </>
    )
}

export default HomeModal;
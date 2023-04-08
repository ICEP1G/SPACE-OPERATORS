import * as React from "react";
import { useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated } from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_AestheticLine, SP_LabelView, SP_TextLabel } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import { User } from "../../models/User";
import { MainUserState, updateMainUser } from "../../reducers/mainUser/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"
import { ContentView, GameIdCtn, GameIdInput, HeaderButton, HeaderButtonIcon, HeaderCtn, HeaderText, HeaderView, ViewCtn, ViewModal, PlayerNameCtn, InputPlayerName, EditLogo } from "./styles_modal";


interface Props {
    visible: boolean,
    setModalVisible: (modalVisible: boolean) => void;
}

const HomeModal: React.FC<Props> = ({...Props}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();



    return (
        <>
        <ViewModal visible={Props.visible}>
                <HeaderCtn>
                    <HeaderView><HeaderText>ENTER YOUR PARTY INFO</HeaderText></HeaderView>
                    <HeaderButton onPress={() => Props.setModalVisible(false)}>
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
                    <PlayerNameCtn>
                        <SP_AestheticLine />
                        <InputPlayerName 
                            style={{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 20 }}
                            // editable={editableName}
                            // defaultValue={mainUserName}
                            // onChangeText={setMainUserName}
                            // onBlur={saveUserName}
                            >
                        </InputPlayerName>
                        <SP_Button mini style={{width: 40}}>
                            <EditLogo
                                source={require('../../../assets/icons/user-edit.png')}
                                resizeMode="contain"
                            />
                        </SP_Button>
                    </PlayerNameCtn>
                    <SP_Button text primary>
                        <SP_TextButton italic>JOIN THE GAME</SP_TextButton>
                    </SP_Button>
                </ContentView>
            </ViewModal>
        <ViewCtn visible={Props.visible} pointerEvents="none"></ViewCtn>
        </>
    )
}

export default HomeModal;
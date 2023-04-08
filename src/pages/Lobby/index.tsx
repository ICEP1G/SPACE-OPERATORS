import * as React from "react";
import { NativeRouter, Routes, Route, Link, useNavigate } from "react-router-native"
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import space_operators_db from "../../database/space_operators_db";
import { useAppSelector, useAppDispatch } from "../../store";
import { MainUserState, updateMainUser, setMainUser } from "../../reducers/mainUser/reducer";


const Lobby: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const mainUserState: MainUserState = 
        useAppSelector((state) => state.mainUser);

        useEffect(() => {
            dispatch(setMainUser);
    
        }, []);

    return (
        <>
            <SP_Button onPress={() => navigate("/")}></SP_Button>
            <Text style={{color: 'white'}}>{mainUserState.MainUser[0].id}</Text>
            <Text style={{color: 'white'}}>{mainUserState.MainUser[0].uuid}</Text>
            <Text style={{color: 'white'}}>{mainUserState.MainUser[0].name}</Text>
        </>
    )
}

export default Lobby
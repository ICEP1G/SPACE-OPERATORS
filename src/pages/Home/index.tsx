import * as React from "react";
import { useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated } from "react-native"
import { HomeMainCtn, AppLogo, BackgroundImageCtn, ShipImage, ShipCtn, IdCtnView, PlayerNameCtn, InputPlayerName, EditLogo, ButtonsContainer, LeaveButton, TextLeaveButton, BottomCtn } from "./styles";
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { useEffect, useState, useRef } from "react";
import { User } from "../../models/User";
import { GetMainUser, MainUserState, updateMainUser } from "../../reducers/mainUser/reducer";
import { useAppSelector, useAppDispatch } from "../../store";
import { SlideInDown, SlideInUp, Easing, useSharedValue, useAnimatedStyle, withSpring, withRepeat } from "react-native-reanimated"

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const [mainUserId, setMainUserId] = useState(0);
    const [mainUserUuid, setMainUserUuid] = useState('');
    const [mainUserName, setMainUserName] = useState('');
    const [editableName, setEditableName] = useState(false);

    const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const mainUserState: MainUserState = 
        useAppSelector((state) => state.mainUser);

    useEffect(() => {
        dispatch(GetMainUser())
        .then(() => {
            // Load the values in the states to update them when the response is returned
            setMainUserId(mainUserState.MainUser[0].id);
            setMainUserUuid(mainUserState.MainUser[0].uuid);
            setMainUserName(mainUserState.MainUser[0].name);
        })
        .catch(() => {
            setMainUserName('No info -> refresh the page');
        })
    }, []);

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(position, {
                    toValue: { x: 0, y: 5 },
                    duration: 1800,
                    useNativeDriver: false,
                }),
                Animated.timing(position, {
                    toValue: { x: 0, y: 0 },
                    duration: 1800,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [])
    

    // Lock or unlock the input Name
    const toggleButtonEditableName = () => {
        setEditableName(!editableName);
      };

    // Update the userName in Redux and in the Database
    const saveUserName = () => {
        const userToUpdate =
            User(
                mainUserId,
                mainUserUuid,
                mainUserName
            );
        dispatch(updateMainUser(userToUpdate));
        toggleButtonEditableName;
    };

    

    if (!mainUserState.MainUser) {
        return (
            <BackgroundImageCtn 
            source={require('../../images/MainMenu_Background_Left_Planet.png')}
            resizeMode="cover"
            />
        );
    }
    return (
        <>
        <BackgroundImageCtn 
            source={require('../../images/MainMenu_Background_Left_Planet.png')}
            resizeMode="cover"
        />
        <ShipCtn>
            <Animated.View style={[position.getLayout(), {width: '100%'}]}>
                <ShipImage 
                source={require('../../images/MainMenu_RazorBack_Ship.png')}
                resizeMode="contain"
                />
            </Animated.View>
        </ShipCtn>
        <AppLogo
            source={require('../../images/SPACEOPERATORS_logo_bold_strech.png')}
            resizeMode="contain"
        />

        <IdCtnView>
            <SP_AestheticLine/>
            <SP_LabelView mini style={{marginRight: 3}}>
                <Text style={{color: Colors.text, fontSize: 14, fontFamily: 'roboto-bold'}}>ID</Text>
            </SP_LabelView>
            <SP_InfoView transparent>
                <Text style={{color: Colors.text, fontSize: 14, fontFamily: 'roboto-regular'}}>{mainUserUuid}</Text>
            </SP_InfoView>
        </IdCtnView>
        
        <HomeMainCtn>
            <PlayerNameCtn style={styles.shadow}>
                <SP_AestheticLine maxi/>
                <InputPlayerName 
                    style={{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 20 }}
                    editable={editableName}
                    defaultValue={mainUserName}
                    onChangeText={setMainUserName}
                    onBlur={saveUserName}
                    >
                </InputPlayerName>
                <SP_Button style={{width: 48}} onPress={toggleButtonEditableName}>
                    <EditLogo
                        source={require('../../../assets/icons/user-edit.png')}
                        resizeMode="contain"
                    />
                </SP_Button>
            </PlayerNameCtn>

            <ButtonsContainer>
                <SP_Button primary 
                    style={{borderWidth: 1.5, borderColor: '#C7532F'}}
                    onPress={() => navigate("/Lobby")}
                    >
                    <SP_TextButton >REJOINDRE UNE PARTIE</SP_TextButton>
                </SP_Button>
                <SP_Button style={{marginTop: 12, borderWidth: 1.5, borderColor: Colors.input}}>
                    <SP_TextButton>CREER UNE PARTIE</SP_TextButton>
                </SP_Button>
                <SP_Button 
                    style={{marginTop: 12, borderWidth: 1.5, borderColor: Colors.input}}
                    onPress={() => navigate("/Historic")}
                >
                    <SP_TextButton>HISTORIQUE DES PARTIES</SP_TextButton>
                </SP_Button>
                <LeaveButton onPress={() => BackHandler.exitApp()}>
                    <TextLeaveButton>QUITTER</TextLeaveButton>
                </LeaveButton>
            </ButtonsContainer>
        </HomeMainCtn>
            
        </>
    )
};


const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.82,
        shadowRadius: 2,
        elevation: 3
    }
})




export default Home;
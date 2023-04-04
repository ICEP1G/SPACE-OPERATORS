import * as React from "react";
import { useNavigate } from "react-router-native"
import { View, ScrollView, Text, Image, StyleSheet, BackHandler } from "react-native"
import { HomeMainCtn, AppLogo, BackgroundImageCtn, ShipImage, ShipCtn, IdCtnView, PlayerNameCtn, InputPlayerName, EditLogo, ButtonsContainer, LeaveButton, TextLeaveButton, BottomCtn } from "./styles";
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_LabelView, SP_AestheticLine } from "../../styles_general";
import { useEffect, useState } from "react";
import { GetMainUser, MainUserState } from "../../reducers/mainUser/reducer";
import { useAppSelector, useAppDispatch } from "../../store";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [editableName, setEditableName] = useState(false);

    const mainUserState: MainUserState =
        useAppSelector((state) => state.mainUser);

    useEffect(() => {
        // Get the User Information when this page is loaded
        dispatch(GetMainUser());
    }, []);
    
    // Lock or unlock the input Name
    const toggleEditableName = () => {
        setEditableName(!editableName);
      };




    if (!mainUserState.MainUser[0]) {
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
            <ShipImage 
            source={require('../../images/MainMenu_RazorBack_Ship.png')}
            resizeMode="contain"
            />
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
                <Text style={{color: Colors.text, fontSize: 14, fontFamily: 'roboto-regular'}}>{mainUserState.MainUser[0].uuid}</Text>
            </SP_InfoView>
        </IdCtnView>
        
        <HomeMainCtn>
            <PlayerNameCtn style={styles.shadow}>
                <SP_AestheticLine maxi/>
                <InputPlayerName 
                    style={{backgroundColor: Colors.input, color: Colors.text, fontFamily: 'roboto-medium', fontSize: 20 }}
                    defaultValue={mainUserState.MainUser[0].name}
                    editable={editableName}
                     >
                </InputPlayerName>
                <SP_Button style={{width: 48}}
                    onPress={toggleEditableName}
                >
                    <EditLogo
                        source={require('../../../assets/icons/user-edit.png')}
                        resizeMode="contain"
                    />
                </SP_Button>
            </PlayerNameCtn>

            <ButtonsContainer>
                <SP_Button primary 
                style={{borderWidth: 1.5, borderColor: '#C7532F'}}>
                    <SP_TextButton >REJOINDRE UNE PARTIE</SP_TextButton>
                </SP_Button>
                <SP_Button style={{marginTop: 12, borderWidth: 1.5, borderColor: Colors.input}}>
                    <SP_TextButton >CREER UNE PARTIE</SP_TextButton>
                </SP_Button>
                <SP_Button 
                    style={{marginTop: 12, borderWidth: 1.5, borderColor: Colors.input}}
                    onPress={() => navigate("/Historic")}
                >
                    <SP_TextButton>HISTORIQUE DES PARTIES</SP_TextButton>
                </SP_Button>
                <LeaveButton onPress={() => BackHandler.exitApp()}>
                    <TextLeaveButton>LEAVE</TextLeaveButton>
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
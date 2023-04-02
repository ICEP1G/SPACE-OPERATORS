import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";


export const BackgroundImageCtn = styled.Image`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const ShipCtn = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const ShipImage = styled.Image`
    position: relative;
    width: 90%;
    align-self: center;
    z-index: 10;
`;

export const AppLogo = styled.Image`
    position: absolute;
    width: 85%;
    align-self: center;
    z-index: 20;
`;


//----------------------------------------------------------//
export const HomeMainCtn = styled.ScrollView`
    position: absolute;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;
    padding: 0 8% ;
    z-index: 20;
`;

export const IdCtnView = styled.View`
    position: relative;
    height: 48px;
    display: flex;
    flex-direction: row;
    margin-top: 45%;
    
`;

export const AestheticLineMini = styled.View`
    width: 6px;
    background-color: #DE583A;
    border-radius: 4px;
    margin-right: 6px;
`;



//------------------------------------------------------------//
export const PlayerNameCtn = styled.View`
    position: relative;
    height: 84px;
    flex: 1;
    flex-direction: row;
    margin-top: 104%;
`;

export const AestheticLineNormal = styled.View`
    width: 10px;
    border-radius: 5px;
    margin-right: 12px;
`;

export const InputPlayerName = styled.TextInput`
    flex: 1;
    opacity: 0.8;
    border-radius: 4px;
    margin-right: 8px;
    padding-left: 20px;
`;

export const EditPlayerNameCtn = styled.TouchableOpacity`
    width: 84px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const EditLogo = styled.Image`
    position: relative;
    width: 48px;
    height: 48px;
    top: 2px;
    left: 2px;
`;

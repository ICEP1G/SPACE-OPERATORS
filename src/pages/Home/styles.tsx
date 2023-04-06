import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";


export const BackgroundImageCtn = styled.Image`
    position: relative;
    width: 100%;
    height: 110%;
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
    top: 3%;
`;

export const AppLogo = styled.Image`
    position: absolute;
    width: 85%;
    align-self: center;
    z-index: 20;
    top: -1%;
`;

export const IdCtnView = styled.View`
    position: absolute;
    width: 95%;
    padding: 0 8%;
    height: 28px;
    display: flex;
    flex-direction: row;
    align-self: center;
    top: 21%;
`;


//--------------------BOTTOM CONTAINER-----------------------//

export const HomeMainCtn = styled.ScrollView`
    position: absolute;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;
    padding: 0 8% ;
    z-index: 20;
    top: 19%;
`;


//-----------------------EDIT PLAYER------------------------//

export const BottomCtn = styled.View`
    position: relative;
    display: flex;
    flex-direction: column;
`;


export const PlayerNameCtn = styled.View`
    position: relative;
    height: 48px;
    flex: 1;
    flex-direction: row;
    margin-top: 110%;
`;

export const InputPlayerName = styled.TextInput`
    flex: 1;
    opacity: 0.8;
    border-radius: 2px;
    margin-right: 4px;
    padding-left: 10px;
`;

export const EditPlayerNameCtn = styled.TouchableOpacity`
    width: 42px;
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const EditLogo = styled.Image`
    position: relative;
    width: 28px;
    height: 28px;
    top: 1px;
    left: 1px;
`;


//------------------------BUTTONS-------------------------//

export const ButtonsContainer = styled.View`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`;


export const LeaveButton = styled.TouchableOpacity`
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: solid 1.5px #DE583A;
    border-left-width: 8px;
    border-right-width: 8px;
    margin-top: 12px;
`;
export const TextLeaveButton = styled.Text`
    font-size: 18px;
    font-family: 'roboto-bold';
    color: #DE583A;
`;
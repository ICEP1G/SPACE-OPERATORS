import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";


export const LobbyWindow = styled.View`
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;
`;

export const BackgroundImageCtn = styled.Image`
    position: absolute;
    width: 100%;
    height: 110%;
    z-index: 10;
`;

export const LobbyMainCtn = styled.View`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 20;
`;

interface OperatorImageProps {
    isDisplayed?: boolean
}
export const OperatorImage = styled.Image<OperatorImageProps>`
    position: absolute;
    width: 9%;
    height: 9%;
    display: ${props => props.isDisplayed ? 'flex' : 'none'};
    z-index: 11;
`;

interface RoverImageProps {
    isDisplayed?: boolean
}
export const RoverImage = styled.Image<RoverImageProps>`
    position: absolute;
    width: 20%;
    height: 20%;
    display: ${props => props.isDisplayed ? 'flex' : 'none'};
    z-index: 11;
`;


//-----------------GAME INFO TOP CONTAINER------------------//

export const GameInfoCtn = styled.View`
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
`;

export const GameInfoLabel = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    padding: 8px 24px;
`;
export const GameInfoLabelText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
`;

export const GameIdText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 20px;
`;

//--------------------CONTENT CONTAINER---------------------//

export const LobbyContentCtn = styled.View`
    position: relative;
    width: 86%;
    height: 64%;
    margin-top: 7%;
    align-self: center;
    display: flex;
    flex-direction: column;
    border-color: ${Colors.uiborder};
    border-radius: 4px;
    border-width: 1.5px;
`;

//--------------Header---------------//
export const ContentHeaderCtn = styled.View`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: ${Colors.secondary};
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.uiborder};
`;
export const ContentHeaderText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 18px;
`;

//--------------Content---------------//
export const ContentScrollViewCtn = styled.ScrollView`
    width: 100%;
    background-color: rgba(51, 56, 59, 0.7);
    padding: 8px 12px;
`;


export const PlayerStatusCtn = styled.View`
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 2px;
    margin: 6px 0;
`;

export const PlayerNameCtn = styled.View`
    width: 64%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const AdminPlayer = styled.Image`
    width: 18px;
    height: 18px;
    margin-right: 8px;
    margin-left: -2px;
`;

interface StatusButtonProps {
    isReady?: boolean
}
export const StatusButton = styled.View<StatusButtonProps>`
    height: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.isReady ? Colors.primary : 'transparent'};
    border-radius: 2px;
    border: ${props => props.isReady ? 'none' : 'solid 2px #7B7B7B'}; 
    border-left-width: ${props => props.isReady ? 0 : '8px'};
    border-right-width: ${props => props.isReady ? 0 : '8px'};
    margin-left: 5%;
`;

export const StatusButtonText = styled.Text<StatusButtonProps>`
    color: ${Colors.text};
    font-family: 'roboto-bold';
    font-size: ${props => props.isReady ? '16px' : '11px'};
`;

//--------------Footer---------------//
export const ContentFooterCtn = styled.View`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    border-top-width: 1px;
    border-top-color: ${Colors.uiborder};
    background-color: ${Colors.secondary};
`;

export const ContentFooterInfo = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    background-color: ${Colors.input};
`;
export const ContentFooterText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 15px;
`;

export const FooterButtonReady = styled.TouchableOpacity`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    padding: 8px 32px;
`;

interface LobbyLaunchButtonProps {
    isPressable?: boolean
}
export const LobbyLaunchButton = styled.TouchableOpacity<LobbyLaunchButtonProps>`
    position: absolute;
    width: 60%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 2px;
    background-color: ${props => props.isPressable ? Colors.primary : Colors.input};
    pointer-events: ${props => props.isPressable ? 'auto' : 'none'};
    padding: 0 20px;
    bottom: 8%;
`;

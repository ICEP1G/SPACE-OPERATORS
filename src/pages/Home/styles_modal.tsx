import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";



// Layer view to darken the index page
interface ViewCtnProps {
    visible?: boolean
}
export const ViewCtn = styled.Pressable<ViewCtnProps>`
    position: absolute;
    width: 100%;
    height: 120%;
    flex: 1;
    flex-direction: column;
    padding: 0% 8%;
    z-index: ${props => props.visible ? 30 : -10};
    background-color: black;
    opacity: 0.8;
`;

// Modal container
interface ViewModalProps {
    visible?: boolean
}
export const ViewModal = styled.View<ViewModalProps>`
    position: absolute;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-self: center;
    border-width: 1.5px;
    border-radius: 4px;
    border-color: ${Colors.uiborder};
    top: 30%;
    z-index: ${props => props.visible ? 31 : -10};
    opacity: 1;
`;

//------------------HEADER-------------------//

export const HeaderCtn = styled.View`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: ${Colors.uiborder};
    border-top-right-radius: 4px;
`;

export const HeaderView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 16px;
    align-items: center;
    background-color: ${Colors.secondary};
    border-top-left-radius: 4px;
`;
export const HeaderText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 18px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 48px;
    background-color: ${Colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 2px;
`;
export const HeaderButtonIcon = styled.Image`
    width: 26px;
    height: 26px;
`;

//------------------CONTENT------------------//

export const ContentView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px 28px 16px;
    background-color: ${Colors.modalBackground};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`;

export const GameIdCtn = styled.View`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
`;

export const GameIdInput = styled.TextInput`
    flex: 1;
    background-color: ${Colors.input};
    border-radius: 2px;
    padding: 0 10px;
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 20px;
`;

//-----------------------EDIT PLAYER------------------------//

export const PlayerNameCtn = styled.View`
    position: relative;
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    margin-bottom: 32px;
`;

export const InputPlayerName = styled.TextInput`
    flex: 1;
    opacity: 0.8;
    border-radius: 2px;
    margin-right: 4px;
    padding-left: 10px;
`;


export const EditLogo = styled.Image`
    position: relative;
    width: 22px;
    height: 22px;
    top: 1px;
    left: 1px;
`;

interface ModalErrorMessageProps {
    displayError?: boolean
}
export const ModalErrorMessage = styled.Text<ModalErrorMessageProps>`
    color: white;
    font-family: 'roboto-light-italic';
    font-size: 18px;
    margin: 0 16px 32px 16px;
    display: ${props => props.displayError ? 'flex' : 'none'};
`;
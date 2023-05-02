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
    opacity: ${props => props.visible ? 0.8 : 0};
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
    opacity: ${props => props.visible ? 1 : 0};
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

interface HeaderViewProps {
    playerLeave: string
}
export const HeaderView = styled.View<HeaderViewProps>`
    flex: 1;
    flex-direction: row;
    justify-content: ${props => props.playerLeave === "LastPlayer" ? "center" : "flex-start"};
    padding-left: ${props => props.playerLeave === "LastPlayer" ? 0 : "16px"};
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
    padding: 32px;
    background-color: ${Colors.modalBackground};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`;

export const ContentText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-light';
    text-align: center;
    font-size: 18px;
    margin-bottom: 32px;
`;

import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";


// Modal container
interface ViewModalProps {
    visible?: boolean
}
export const ViewModal = styled.View<ViewModalProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    border-radius: 4px;
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
    border-color: ${Colors.input};
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
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    background-color: ${Colors.modalBackground};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`;



import styled from "styled-components/native";
import { Colors } from "../../styles_general";

interface ViewCtnProps {
    visible?: boolean
}
export const ViewCtn = styled.View<ViewCtnProps>`
    position: absolute;
    width: 85%;
    display: ${props => props.visible ? 'flex' : 'none'};
    align-items: center;
    align-self: center;
    border-color: ${Colors.uiborder};
    border-radius: 4px;
    border-width: 1.5px;
    background-color: ${Colors.modalBackground};
    top: 20%;
    z-index: ${props => props.visible ? 100 : -10};
    opacity: 1;
`;

export const HeaderCtn = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-color: ${Colors.uiborder};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: ${Colors.secondary};
`;

export const MessageText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 24px;
`;

export const VictoryMedal = styled.Image`
    top: -5%;
    width: 120px;
`;

export const Defeat404 = styled.Image`
    top: -4%;
    width: 180px;
`;

export const TextButton = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-bold';
    font-size: 17px;
`;
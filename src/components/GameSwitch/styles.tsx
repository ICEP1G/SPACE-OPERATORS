import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";


interface GameSwitchCtnProps {
    value: string | number
}
export const GameSwitchCtn = styled.View<GameSwitchCtnProps>`
    position: relative;
    width: 43%;
    height: 100px;
    display: flex;
    margin: 6px;
    background-color: ${Colors.secondary};
    border-top-width: 1px;
    border-left-width: 1px;
    border-color: ${props => props.value};
    z-index: 20;
`;

export const GameSwitchText = styled.Text`
    color: ${Colors.uiborder};
    font-family: 'roboto-regular';
    font-size: 19px;
    margin-top: 8px;
    margin-left: 8px;
`;


interface SwitchCircleProps {
    value: string | number,
    isColor: boolean
    isActivated?: boolean
}
export const SwitchCtn = styled.Pressable<SwitchCircleProps>`
    position: absolute;
    width: 68px;
    height: 38px;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isActivated ? "flex-end" : "flex-start"};
    align-items: center;
    align-self: center;
    padding: 0 3px;
    border-color: ${props => props.value};
    border-width: 1px;
    border-radius: 20px;
    bottom: ${props => props.isColor ? '26px' : '12px'};
`;

export const SwitchCircle = styled.View<SwitchCircleProps>`
    width: 30px;
    height: 30px;
    background-color: ${props => props.isActivated ? props.value : 'transparent'};
    border-color: ${props => props.value};
    border-width: 1px;
    border-radius: 17px;
`;

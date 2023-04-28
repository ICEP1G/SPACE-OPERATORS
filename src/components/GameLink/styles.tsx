import styled from "styled-components/native";
import { Colors } from "../../styles_general";

export const GameLinkCtn = styled.View`
    width: 40%;
    height: 70px;
    display: flex;
    flex-direction: row;
    background-color: ${Colors.secondary};
    border-top-width: 1px;
    border-left-width: 1px;
    border-color: ${Colors.uiborder};
    margin: 16px;
    z-index: 20;
`;

export const GameLinkText = styled.View`
    color: ${Colors.uiborder};
    font-family: 'roboto-regular';
    font-size: 19px;
    margin-top: 8px;
    margin-left: 8px;
`;

interface GameLinkButtonProps {
    value: string | number,
}
export const GameLinkButtonLeft = styled.TouchableOpacity<GameLinkButtonProps>`
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: ${props => props.value};
    border-radius: 15px;
    z-index: 25;
    align-self: center;
    right: -15px;
`;

interface GameLinkButtonProps {
    value: string | number,
}
export const GameLinkButtonRight = styled.TouchableOpacity<GameLinkButtonProps>`
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: ${props => props.value};
    border-radius: 15px;
    z-index: 25;
    align-self: center;
    left: -15px;
`;
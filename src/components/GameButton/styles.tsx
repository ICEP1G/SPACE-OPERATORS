import styled from "styled-components/native";
import { Colors } from "../../styles_general";

export const GameButtonCtn = styled.View`
    position: relative;
    width: 43%;
    height: 100px;;
    justify-content: center;
    align-items: center;
    margin: 6px;
    background-color: ${Colors.secondary};
    z-index: 20;
`;

interface GameButtonTouchableProps {
    value: string | number
}
export const GameButtonTouchable = styled.TouchableOpacity<GameButtonTouchableProps>`
    width: 75%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: ${props => props.value};
    padding: 0 20px;
`;

export const GameButtonText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-bold-italic';
    font-size: 18px;
`;
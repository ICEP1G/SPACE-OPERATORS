import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";

interface MainCtnProps {
    isVisible?: boolean
}
export const MainCtn = styled.View<MainCtnProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: ${props => props.isVisible ? 50 : -50};
`;

export const ErrorBox = styled.View`
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
    padding: 32px;
`;

export const TextError = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 20px;
`;
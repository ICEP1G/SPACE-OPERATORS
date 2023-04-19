import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";

interface LoadingTimeBarProps {
    time: number
}

export const LoadingTimeBarCtn = styled.View`
    flex: 1;
    flex-direction: row;
    border-width: 1px;
    border-color: ${Colors.uiborder};
    border-radius: 2px;
`;

export const LoadingTimeBar = styled.View<LoadingTimeBarProps>`
    display: flex;
    flex-direction: row;
    width: ${props => props.time}%;
    background-color: blue;
`;
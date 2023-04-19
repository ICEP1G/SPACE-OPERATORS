import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";


export const LineView = styled.View`
    flex: 1;
    flex-direction: row;
    height: 1px;
    background-color: ${Colors.uiborder};
`;

export const TextEmpty = styled.Text`
    color: ${Colors.uiborder};
    font-family: 'protomolecule';
    font-size: 16px;
    margin: 0 8px;
    bottom: 1px;
`;
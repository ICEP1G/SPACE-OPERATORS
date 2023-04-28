import styled from "styled-components/native";
import { Colors } from "../../styles_general";

export const WaitingLoaderCtn = styled.View`
    width: 88%;
    height: 110px;
    align-self: center;
    display: flex;
    flex-direction: row;
    top: 24px;
`;

export const WaitingLoaderContent = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 12px 8px;
    background-color: ${Colors.secondary};
`;

export const WaitingLoaderText = styled.Text`
    color: ${Colors.uiborder};
    font-family: 'protomolecule';
    font-size: 15px;
`;

export const WaitingLoaderRectangleCtn = styled.View`
    width: 100px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
`;

interface WaitingLoaderRectangleProps{
    isLarge?: boolean
}
export const WaitingLoaderRectangle1 = styled.View<WaitingLoaderRectangleProps>`
    width: 14px;
    height: ${props => props.isLarge ? '34px' : '30px'};
    margin: 24px 3px;
    background-color: ${Colors.uiborder};
`;

export const WaitingLoaderRectangle2 = styled.View<WaitingLoaderRectangleProps>`
    width: 14px;
    height: ${props => props.isLarge ? '34px' : '30px'};
    margin: 24px 3px;
    background-color: ${Colors.uiborder};
`;

export const WaitingLoaderRectangle3 = styled.View<WaitingLoaderRectangleProps>`
    width: 14px;
    height: ${props => props.isLarge ? '34px' : '30px'};
    margin: 24px 3px;
    background-color: ${Colors.uiborder};
`;
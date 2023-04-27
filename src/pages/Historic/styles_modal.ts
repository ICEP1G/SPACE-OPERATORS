import styled from "styled-components/native";
import { Colors } from "../../styles_general";

//--------------------Modal---------------------//
export const ModalContent = styled.View`
    box-sizing: border-box;
    position: absolute;
    width: 95%;
    height: 50%;
    top: 10%;
    left: 2%;
    background: rgba(80, 82, 83, 0.8);
    border: 1px solid rgba(143, 166, 155, 0.8);
    border-radius: 4px;
`;

export const ModalContentHeader = styled.View`
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    border-bottom-color: ${Colors.uiborder};
    border-bottom-width: 1px;
`;

export const ModalHeaderTitle = styled.View`
    position: relative;
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: ${Colors.secondary};
    padding: 8px;
    width: 88%;

`;

export const ModalHeaderTitleText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
    margin : 0 0 0 5%;
`;

export const PlayerListModal = styled.View`
    width: 110%;
    height: 42px;
    display: flex;
    flex-direction: column;
    margin : 2% 0 0 5%;
`;

export const GamePlayerModal = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ModalGameStat = styled.View`
    width: 100%;
    height: 20%;
    justify-content: center;
    margin-top : 5%;
`;

export const GameIDModal = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 4px;
    margin : 0 0 0 5%;
`;

export const GameIDModalText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 18px;
`;

export const GameIDValueText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-bold';
    font-size: 20px;
`;


export const RoundModal = styled.View`
    flex-direction: row;
    padding: 4px;
    margin : 0 0 0 5%;
`;

export const RoundModalText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 18px;
`;

export const GamePlayerNameModal = styled.View`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin : 1% 0 1% 0;
`;

export const GamePlayerLogoModal = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    width: 42px;
    margin: 0px 4px 0px 2px;
    border-radius: 2px;
`;

export const Line = styled.View`
    width: 290px;
    height: 1px;
    left: 5%;
    background: #7B7B7B;
`;
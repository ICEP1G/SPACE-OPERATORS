import styled from "styled-components/native";
import { Colors } from "../../styles_general";

//--------------------Modal---------------------//
export const ModalContent = styled.View`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 50%;
    top: 10%;
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
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    padding: 8px;
    width: 88%;
`;

export const ModalHeaderTitleText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
`;

export const PlayerListModal = styled.View`
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    margin : 0 0 0 15%;
`;

export const GamePlayerModal = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ModalGameStat = styled.View`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    border-radius: 2px;
`;

export const GameIDModal = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

export const GameIDModalText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
`;

export const RoundModal = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8px;
`;

export const RoundModalText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
`;

export const GamePlayerNameModal = styled.View`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin : 1% 0 1% 0;
`;

export const GamePlayerLogoModal = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    width: 20%;
    margin: 0px 4px 0px 2px;
`;

export const Line = styled.View`
    width: 320px;
    height: 1px;
    left: 10%;
    top: 0px;


    background: #7B7B7B;
`;
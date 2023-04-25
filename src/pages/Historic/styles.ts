import styled from "styled-components/native";
import { Colors } from "../../styles_general";

export const HistoricWindow = styled.View`
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;
`;

export const BackgroundImageCtn = styled.Image`
    position: absolute;
    width: 100%;
    height: 110%;
    z-index: 10;
`;


export const HistoricMainCTN = styled.View`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    z-index: 20;
`;

//--------------------HEADER CONTAINER-----------------------//

export const HistoricHeader = styled.View`
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
`;

export const HistoricHeaderTitle = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    padding: 8px 140px;
`;

export const HistoricHeaderTitleText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
`;

//--------------------CONTENT CONTAINER---------------------//

export const HistoricContentCtn = styled.View`
    position: relative;
    width: 86%;
    height: 64%;
    margin-top: 7%;
    align-self: center;
    display: flex;
    flex-direction: column;
    border-color: ${Colors.uiborder};
    border-radius: 4px;
    border-width: 1.5px;
`;

//--------------------Header Content---------------------//
export const ContentHeaderCtn = styled.View`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: ${Colors.secondary};
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.uiborder};
`;
export const ContentHeaderText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 18px;
`;

//--------------------Content---------------------//
export const ContentScrollViewCtn = styled.ScrollView`
    width: 100%;
    background-color: rgba(51, 56, 59, 0.7);
    padding: 8px 12px;
`;

export const GameHistory = styled.View`
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 2px;
    margin: 6px 0;
`;

export const GameNameCdn = styled.View`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const ShowMoreInfo = styled.View`
    height: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
`;

export const ShowMoreInfoText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-bold';
`;

export const TurnNumber = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    width: 35%;
    padding: 8px;
    margin: 0px 8px 0px 8px;
`;

export const TurnNumberText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
`;

//--------------------Modal---------------------//
export const ModalContent = styled.View`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0px;
    top: 25%;
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
`;

export const ModalHeaderTitle = styled.View`
    position: relative;
    display: flex;
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
    margin : 0 0 0 15%
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



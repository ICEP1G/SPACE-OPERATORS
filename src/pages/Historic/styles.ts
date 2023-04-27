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
    width: 32%;
    padding: 8px;
    margin: 0px 8px 0px 8px;
`;

export const TurnNumberText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 20px;
`;
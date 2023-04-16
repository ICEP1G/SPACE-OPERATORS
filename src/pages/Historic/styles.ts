import styled from "styled-components/native";

export const BackgroundImageCtn = styled.Image`
    position: relative;
    width: 100%;
    height: 110%;
`;

//--------------------HEADER CONTAINER-----------------------//

export const HeaderContainer = styled.View`
    position fixed;
    width: 100%;
    height: 19%;
    top: 0;
`;


export const HeaderTitle = styled.Text`

`;

//--------------------BOTTOM CONTAINER-----------------------//

export const HistoryMainCtn = styled.ScrollView`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 8% ;
    z-index: 20;
    top: 19%;
`;

//------------------------BUTTONS-------------------------//

export const ButtonsContainer = styled.View`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`;

export const ButtonMoreInfo = styled.TouchableOpacity`
    position: absolute;
    width: 32px;
    height: 32px;
    left: 255px;
    top: 96px;

    background: #DE583A;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
`;

//------------------------Historiques des parties-------------------------//

export const HistoricContainer = styled.Text`
    position: absolute;
    width: 299px;
    height: 360px;
    left: 0px;
    top: 0px;

    background: rgba(51, 56, 59, 0.7);
    border-radius: 0px;
`;

export const HistoricTitle = styled.Text`
    position: absolute;
    width: 138px;
    height: 17px;
    left: 12px;
    top: 13px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */


    color: #ECECEC;
`;

export const HistoricGames = styled.View`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 8% ;
    z-index: 20;
`;

export const GameName = styled.View`
    position: relative;
    width: 48px;
    display: flex;
    flex-direction: row;
    margin-top: 110%;
`;

export const ShowLogo = styled.Image`
    position: relative;
    width: 28px;
    height: 28px;
    top: 1px;
    left: 1px;
`;
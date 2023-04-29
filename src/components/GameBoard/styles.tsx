import styled from "styled-components/native";

export const GameBoardWindow = styled.View`
    position: relative;
    flex: 1;
    flex-direction: column;
    padding: 24px 16px;
    justify-content: space-between;
`;

//-------------------------------------------//

export const GameBoardCtn = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const GameBoardCtnSplited = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-around;
    margin-bottom: 4px;
`;


//-----------For the link component----------//
export const GameLinkWindow = styled.View`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 16px;
`;
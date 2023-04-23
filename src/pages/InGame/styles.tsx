import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";


export const InGameWindow = styled.View`
    position: relative;
    width: 100%;
    height: 100%;
    flex: 1;
    flex-direction: column;
`;

//---------------------BACKGROUND----------------------//

export const BackGroundGameImageCtn = styled.Image`
    position: absolute;
    width: 100%;
    height: 110%;
    z-index: 10;
`;

//----------------------GAME-INFO---------------------//

export const GameInfoCtn = styled.View`
    position: relative;
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.gameBackground};
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${Colors.uiborder};
    z-index: 20;
`;

//------------------//

export const GameStateCtn = styled.View`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
`;

export const GameStateInfo = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left-width: 1px;
    border-color: ${Colors.uiborder};
`;

export const RoundCtn = styled.View`
    width: 28%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
`;

export const ShipIntegrityCtn = styled.View`
    height: 22px;
    flex: 1;
    flex-direction: row;
    border-width: 1px;
    border-color: ${Colors.uiborder};
    border-radius: 2px;
    margin-left: 28px;
    margin-right: 12px;
`;

interface ShipIntegrityBarProps {
    integrity: number
}
export const ShipIntegrityBar = styled.View<ShipIntegrityBarProps>`
    width: ${props => props.integrity}%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.integrity > 40 ? '#67BDBC' : Colors.primary};
`;

export const ShipStateCtnText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 11px;

`;

//------------------//

export const GamePlayerInfoCtn = styled.View`
    width: 100%;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-top-width: 1px;
    border-color: ${Colors.uiborder};
`;

export const GamePlayerInfoFirstCtn = styled.View`
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: row;
`;

export const GamePlayerInfo = styled.View`
    width: 50%;
    padding: 0 12px;
`;


export const GamePlayerInfoSecondCtn = styled.View`
    width: 100%;
    height: 24px;
    display: flex;
    flex-direction: row;
    padding: 0 12px;
`;

//----------------VALIDATE-OPERATION---------------//

export const ContentValidateCtn = styled.View`
    position: relative;
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: ${Colors.uiborder};
    background-color: ${Colors.secondary};
`;

export const ContentValidateInfo = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    background-color: ${Colors.secondary};
`;
export const ContentValidateText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-regular';
    font-size: 16px;
`;

export const ValidateButtonReady = styled.TouchableOpacity`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
    padding: 8px 32px;
    border-color: ${Colors.uiborder};
    border-left-width: 1px;
`;

//-----------------GAME-CONTAINER------------------//

export const GameCtn = styled.View`
    position: relative;
    flex: 1;
    flex-direction: column;
    z-index: 20;
`;
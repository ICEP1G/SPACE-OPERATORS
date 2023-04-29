import styled from "styled-components/native";
import { Colors } from "../../styles_general";

export const InstructionsCtn = styled.View`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    border-width: 1.5px;
    border-radius: 4px;
    border-color: ${Colors.input};
    top: 32px;
`;

//------------------HEADER-------------------//

export const HeaderCtn = styled.View`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: ${Colors.input};
    border-top-right-radius: 4px;
`;

export const HeaderView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 16px;
    align-items: center;
    background-color: ${Colors.secondary};
    border-top-left-radius: 4px;
`;
export const HeaderText = styled.Text`
    color: ${Colors.text};
    font-family: 'roboto-medium';
    font-size: 18px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 48px;
    background-color: ${Colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 2px;
`;
export const HeaderButtonIcon = styled.Image`
    width: 26px;
    height: 26px;
`;

//------------------CONTENT------------------//

export const ContentView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 16px;
    background-color: ${Colors.gameBackground};
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
`;

export const OperatorView = styled.View`
    display: flex;
    flex-direction: row;
    height: 40px;
`;

export const OperatorInfoView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background-color: #7B7B7B;
`;
    
//------------------//

export const OperationCtn = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 16px;
`;

export const OperationContent = styled.View`
    width: 100%;
    padding: 12px;
    background-color: ${Colors.secondary};
`;

export const OperationText = styled.Text`
    color: ${Colors.uiborder};
    font-family: 'protomolecule';
    font-size: 16px;
`;
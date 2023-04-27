import styled from "styled-components/native";
import { useFonts } from "expo-font";

export const Colors = {
    primary: '#DE583A',
    secondary: '#33383B',
    input: '#7B7B7B',
    uiborder: '#8FA69B',
    text: '#fff',
    modalBackground: '#505253',
    gameBackground: '#3D4245;'
}


// Button container
interface SP_ButtonProps {
    primary?: boolean,
    mini?: boolean,
    text?: boolean,
    notRound?: boolean
}
export const SP_Button = styled.TouchableOpacity<SP_ButtonProps>`
    height: ${props => props.mini ? "40px" : "48px"};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.notRound ? '0px' : '2px'};
    background-color: ${props => props.primary ? "#DE583A" : "#33383B"};
    padding: ${props => props.text ? "0 20px" : "0"};
`;

// Text container for Buttons
interface SP_TextButtonProps {
    italic?: boolean,
    mini?: boolean
}
export const SP_TextButton = styled.Text<SP_TextButtonProps>`
    color: #F3F3F3;
    font-family: ${props => props.italic ? 'roboto-bold-italic' : 'roboto-bold'};
    font-size: ${props => props.mini ? "12px" : "18px"};
`;



// Aesthetic line at the start of some container
//ligne orange
interface SP_AestheticLineProps {
    maxi?: boolean,
    secondary?: boolean 
}
export const SP_AestheticLine = styled.View<SP_AestheticLineProps>`
    width: ${(props) => props.maxi ? "5px" : "3px"};
    height: 100%;
    background-color: ${props => props.secondary ? "#8FA69B" : "#DE583A"};
    border-radius: ${(props) => props.maxi ? "2.5px" : "1.5px"};
    margin-right: ${(props) => props.maxi ? "6px" : "3px"};
`;

// Label container
interface SP_LabelViewProps {
    straight?: boolean,
    maxi?: boolean
}
export const SP_LabelView = styled.View<SP_LabelViewProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${props => props.maxi ? '4px 16px' : '8px 16px'};
    background-color: #33383B;
    border-radius: ${(props) => props.straight ? 0 : '2px'};
    margin-right: 3px;
`;
// Text for the Label container
interface SP_TextLabelProps {
    maxi?: boolean
}
export const SP_TextLabel = styled.Text<SP_TextLabelProps>`
    color: ${Colors.text};
    font-size: ${props => props.maxi ? "15px" : "13px"};
    font-family: 'roboto-bold';
`;

// LabelSquare container
interface SP_LabelSquareViewProps {
    mini?: boolean
}
export const SP_LabelSquareView = styled.View<SP_LabelSquareViewProps>`
    width: ${props => props.mini ? "28px" : "36px"};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #33383B;
    border-radius: 2px;
`;

// Information container
interface SP_InfoViewProps {
    transparent?: boolean,
    straight?: boolean,
    centerContent?: boolean,
    maxi?: boolean
}
export const SP_InfoView = styled.View<SP_InfoViewProps>`
    flex: 1;
    flex-direction: row;
    justify-content: ${props => props.centerContent ? 'center' : 'flex-start'};
    align-items: center;
    padding-left: ${props => props.centerContent ? '0' : '10px'};
    padding-top: ${props => props.maxi ? '4px' : 0};
    padding-bottom: ${props => props.maxi ? '4px' : 0};
    border-radius: ${props => props.straight ? 0 : '2px'};
    background-color: ${props => props.transparent ? 'rgba(123, 123, 123, 0.7)' : 'rgba(123, 123, 123, 1)'}
`;


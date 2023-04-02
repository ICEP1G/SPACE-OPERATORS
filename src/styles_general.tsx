import styled from "styled-components/native";
import { useFonts } from "expo-font";

export const Colors = {
    primary: '#DE583A',
    secondary: '#33383B',
    input: '#7B7B7B',
    uiborder: '#8FA69B',
    text: '#fff'
}


// Button container
interface SP_ButtonProps {
    primary?: boolean,
    mini?: boolean,
}
export const SP_Button = styled.TouchableOpacity<SP_ButtonProps>`
    height: ${props => props.mini ? "64px" : "84px"}
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: ${props => props.primary ? "#DE583A" : "#33383B"};
`;

// Text container for Buttons
interface SP_TextButtonProps {
    italic?: boolean,
    mini?: boolean
}
export const SP_TextButton = styled.Text<SP_TextButtonProps>`
    color: #F3F3F3;
    font-family: 'roboto-bold';
    font-size: ${props => props.mini ? "22px" : "32px"};
`;



// Aesthetic line at the start of some container
interface SP_AestheticLineProps {
    maxi?: boolean,
    secondary?: boolean 
}
export const SP_AestheticLine = styled.View<SP_AestheticLineProps>`
    width: ${(props) => props.maxi ? "10px" : "6px"};
    height: 100%;
    background-color: ${props => props.secondary ? "#8FA69B" : "#DE583A"};
    border-radius: ${(props) => props.maxi ? "5px" : "3px"};
    margin-right: ${(props) => props.maxi ? "12px" : "6px"};
`;

// Label container
interface SP_LabelViewProps {
    mini?: boolean
}
export const SP_LabelView = styled.View<SP_LabelViewProps>`
    width: ${props => props.mini ? "48px" : "64px"};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #33383B;
    border-radius: 4px;
`;

// Information container
interface SP_InfoViewProps {
    transparent?: boolean
}
export const SP_InfoView = styled.View<SP_InfoViewProps>`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #7B7B7B;
    opacity: ${props => props.transparent ? "0.7" : "1"};
`;
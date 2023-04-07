import styled from "styled-components/native";
import { Colors } from "../../styles_general";
import { useFonts } from "expo-font";



// Layer view to darken the index page
interface ViewCtnProps {
    visible?: boolean
}
export const ViewCtn = styled.View<ViewCtnProps>`
    position: absolute;
    width: 100%;
    height: 110%;
    flex: 1;
    flex-direction: column;
    padding: 0% 8%;
    z-index: ${props => props.visible ? 30 : -10};
    background-color: black;
    opacity: 0.8;
`;

// Modal container
interface ViewModalProps {
    visible?: boolean
}
export const ViewModal = styled.View<ViewModalProps>`
    position: relative;
    width: 100%;
    top: 24%;
    z-index: ${props => props.visible ? 31 : -10};
`;




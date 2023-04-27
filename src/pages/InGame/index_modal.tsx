import * as React from "react";
import { useNavigate } from "react-router-native"
import { SP_Button, SP_TextButton } from "../../styles_general";
import { ViewModal, HeaderCtn, HeaderView, HeaderText, HeaderButton, HeaderButtonIcon, ContentView, ViewCtn, ContentText } from "./styles_modal";
import { socket, createNewSocket } from "../../services/WebSocket";


interface Props {
    visible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
    playerLeaves: boolean
    setPlayerLeave: (playerLeave: boolean) => void,
}

const InGameModal: React.FC<Props> = ({...Props}) => {
    const navigate = useNavigate();

    const leaveGame = () => {
        Props.setModalVisible(false),
        navigate('/');
        socket.close()
        createNewSocket();
    };

    return (
        <>
        <ViewModal visible={Props.visible}>

            <HeaderCtn>
                <HeaderView><HeaderText>ATTENTION</HeaderText></HeaderView>
                <HeaderButton onPress={() => {Props.setModalVisible(false), Props.setPlayerLeave(false)}}>
                <HeaderButtonIcon
                    source={require('../../../assets/icons/cross.png')}
                    resizeMode="contain"
                />
                </HeaderButton>
            </HeaderCtn>

            <ContentView>
                <ContentText>{Props.playerLeaves ? "Un joueur vient de quitter la partie.\n\nVoulez-vous aussi la quitter ?" : "Si vous quittez maintenant vous ne pourrez plus vous reconnecter.\n\nVoulez-vous vraiment quitter la partie ?"}</ContentText>
                <SP_Button text primary
                    style={{position: 'relative', bottom: 0}}
                    onPress={leaveGame}>
                    <SP_TextButton italic>QUITTER LA PARTIE</SP_TextButton>
                </SP_Button>
            </ContentView>

        </ViewModal>
        <ViewCtn visible={Props.visible}>
        </ViewCtn>
        </>
    )
}

export default InGameModal
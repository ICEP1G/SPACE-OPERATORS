import * as React from "react";
import { StyleSheet } from "react-native";
import { useNavigate } from "react-router-native"
import { SP_Button, SP_TextButton } from "../../styles_general";
import { ViewModal, HeaderCtn, HeaderView, HeaderText, HeaderButton, HeaderButtonIcon, ContentView, ViewCtn, ContentText } from "./styles_modal";
import { socket, createNewSocket } from "../../services/WebSocket";
import { GameState, resetAllGame } from "../../reducers/game/reducer";
import { useAppDispatch, useAppSelector } from "../../store";
import { createOldGame } from "../../databaseObjects/OldGamesDAO";
import { OldGame } from "../../models/OldGame";



interface Props {
    visible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
    playerLeaves: string
    setPlayerLeave: (playerLeave: string) => void,
}
const InGameModal: React.FC<Props> = ({...Props}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const gameState: GameState =
        useAppSelector((state) => state.game)

    // Save the game but tell that the game was leaved
    const saveGameInDatabaseIfLeaving = (turn: number) => {
        createOldGame(OldGame(gameState.gameId, turn, gameState.dateStart, gameState.timeStart, "leave"));
    }

    // save the game then leave it by navigating to the Home page and trigger a message to be displayed to others players
    const leaveGame = () => {
        socket.close();
        createNewSocket();
        saveGameInDatabaseIfLeaving(gameState.turn);
        Props.setModalVisible(false);
        dispatch(resetAllGame());
        navigate('/');
    };

    return (
        <>
        <ViewModal visible={Props.visible}>

            <HeaderCtn>
                <HeaderView playerLeave={Props.playerLeaves}><HeaderText>ATTENTION</HeaderText></HeaderView>
                {Props.playerLeaves === "LastPlayer" ? null :
                <HeaderButton onPress={() => {Props.setModalVisible(false), Props.setPlayerLeave('')}}>
                <HeaderButtonIcon
                    source={require('../../../assets/icons/cross.png')}
                    resizeMode="contain"
                />
                </HeaderButton>
                }
            </HeaderCtn>

            <ContentView>
                {(() => {
                    switch (Props.playerLeaves) {
                        case ("PlayerLeave"):
                            return <ContentText >Un joueur vient de quitter la partie.{'\n\n'}Voulez-vous aussi la quitter ?</ContentText>
                        case ("LastPlayer"):
                            return <ContentText>Il ne reste que vous dans la partie.{'\n\n'}Vous allez être redirigé vers le menu principale</ContentText>
                        default:
                            return <ContentText>Si vous quittez maintenant vous ne pourrez plus vous reconnecter.{'\n\n'}Voulez-vous vraiment quitter la partie ?</ContentText>
                    }
                }) ()}
                <SP_Button text primary
                    style={[{position: 'relative', bottom: 0}, styles.shadow]}
                    onPress={leaveGame}>
                    <SP_TextButton italic style={Props.playerLeaves ? {marginHorizontal: 30} : null}>{Props.playerLeaves === "LastPlayer" ? "OK" : "QUITTER LA PARTIE"}</SP_TextButton>
                </SP_Button>
            </ContentView>

        </ViewModal>
        <ViewCtn visible={Props.visible}>
        </ViewCtn>
        </>
    )
};

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
	    width: 1,
	    height: 2,
        },
        shadowOpacity: 0.82,
        shadowRadius: 2,
        elevation: 3
    }
});

export default InGameModal;
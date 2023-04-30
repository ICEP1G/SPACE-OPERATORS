import * as React from "react";
import { Colors, SP_Button, SP_InfoView, SP_AestheticLine } from "../../styles_general";
import { ModalContent, ModalHeaderTitle, ModalHeaderTitleText, ModalContentHeader, GamePlayerModal, GamePlayerNameModal, GamePlayerLogoModal, PlayerListModal, GameIDModal, GameIDModalText, GameIDValueText, RoundModal, RoundModalText, ModalGameStat, Line } from "./styles_modal"; 
import { View, Text, Image } from "react-native";
import Modal from "react-native-modal";
import { HistoricState } from "../../reducers/historic/reducer";
import { useAppSelector } from "../../store";
import { OldGame } from "../../models/OldGame";



interface Props {
    visible: boolean,
    gameId: string,
    toggleModal: () => void,
}

const HistoricModal: React.FC<Props> = ({...Props}) => {

    const historicState: HistoricState = useAppSelector((state) => state.historic);

    const getParty: any = [];
    const playersTab: any = [];

    // Get the desired Game informations to display
    const singleGame: OldGame | undefined = historicState.oldGames.find((game) => game.gameId == Props.gameId);

    // Display the players name
    if (singleGame !== undefined) {
        const players: string[] = JSON.parse(singleGame.playersNames);

        players.forEach((player, index) => {
            playersTab.push(
                <GamePlayerNameModal key={index}>
                    <SP_AestheticLine></SP_AestheticLine>
                    <GamePlayerLogoModal>
                        <Image
                            style={{width: 24, position: 'relative', left: -1}}
                            source={require('../../../assets/icons/astronaut-icon.png')}
                            resizeMode="contain"
                        />
                    </GamePlayerLogoModal>
                    <SP_InfoView transparent>
                        <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>{player}</Text>
                    </SP_InfoView>  
                </GamePlayerNameModal>
            );
        });
    }


    return (
        <>
            <Modal isVisible={Props.visible}>
                <View style={{ flex: 1 }}>
                <ModalContent>
                    <ModalContentHeader>
                        <ModalHeaderTitle>
                            <ModalHeaderTitleText>{singleGame?.gameCreationDate}</ModalHeaderTitleText>
                        </ModalHeaderTitle>
                        <SP_Button primary notRound style={{width: 48, height: 47, borderTopRightRadius: 4}} onPress={Props.toggleModal}>
                            <Image
                                style={{width: 18, position: 'relative', left: -1}}
                                source={require('../../../assets/icons/cross.png')}
                                resizeMode="contain"
                            />
                        </SP_Button>
                    </ModalContentHeader>

                    <GamePlayerModal>

                        <ModalGameStat>
                            <GameIDModal>
                                <GameIDModalText>NUMÉRO DE PARTIE : </GameIDModalText><GameIDValueText>{singleGame?.gameId}</GameIDValueText>
                            </GameIDModal>
                            <RoundModal>
                                <RoundModalText>NOMBRE DE TOUR : </RoundModalText><GameIDValueText style={{top: -3}}>{singleGame?.rounds}</GameIDValueText>
                            </RoundModal>
                        </ModalGameStat>

                        <Line></Line>

                        <PlayerListModal>
                            {playersTab}
                        </PlayerListModal>

                    </GamePlayerModal>
                </ModalContent>
                </View>
            </Modal>   
        </>
    )
}

export default HistoricModal;
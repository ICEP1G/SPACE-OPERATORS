import * as React from "react";
import { Colors, SP_Button, SP_TextButton, SP_InfoView, SP_AestheticLine, SP_LabelView, SP_TextLabel } from "../../styles_general";
import { ModalContent, ModalHeaderTitle, ModalHeaderTitleText, ModalContentHeader, GamePlayerModal, GamePlayerNameModal, GamePlayerLogoModal, PlayerListModal, GameIDModal, GameIDModalText, RoundModal, RoundModalText, ModalGameStat, Line } from "./styles_modal"; 
import { View, ScrollView, Text, Image, StyleSheet, BackHandler, TextInput, RefreshControl, Animated, Button } from "react-native";
import Modal from "react-native-modal";
import { Player } from "../../models/types/Player";



interface Props {
    visible: boolean,
    gameId: string,
    turn: number,
    dateGame: string,
    players : string,    
    toggleModal: () => void,
}

const HistoricModal: React.FC<Props> = ({...Props}) => {

    const playersTab: any = [];
    const players: Player[] = JSON.parse(Props.players);

    players.forEach((player, index) => {
        playersTab.push(
            <GamePlayerNameModal>
                <SP_AestheticLine></SP_AestheticLine>
                <GamePlayerLogoModal>
                    <Image
                        style={{width: 24, position: 'relative', left: -1}}
                        source={require('../../../assets/icons/astronaut-icon.png')}
                        resizeMode="contain"
                    />
                </GamePlayerLogoModal>
                <SP_InfoView transparent>
                    <Text style={{color: Colors.text, fontSize: 18, fontFamily: 'roboto-regular'}}>{player.name}</Text>
                </SP_InfoView>
            </GamePlayerNameModal>
        )
    })

    return (
        <>
            <Modal isVisible={Props.visible}>
                <View style={{ flex: 1 }}>
                <ModalContent>
                    <ModalContentHeader>
                        <ModalHeaderTitle>
                            <ModalHeaderTitleText>{Props.dateGame}</ModalHeaderTitleText>
                        </ModalHeaderTitle>
                        <SP_Button primary style={{width: 48}} onPress={Props.toggleModal}>
                            <Image
                                style={{width: 24, position: 'relative', left: -1}}
                                source={require('../../../assets/icons/cross.png')}
                                resizeMode="contain"
                            />
                        </SP_Button>
                    </ModalContentHeader>

                    <GamePlayerModal>
                        <ModalGameStat>
                            <GameIDModal>
                                <GameIDModalText>NUMÉRO DE LA PARTIE : {Props.gameId}</GameIDModalText>
                            </GameIDModal>
                            <RoundModal>
                                <RoundModalText>NOMBRE DE TOUR : {Props.turn}</RoundModalText>
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
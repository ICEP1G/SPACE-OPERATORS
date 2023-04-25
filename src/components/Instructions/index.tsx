import * as React from "react";
import { useState } from "react";
import { Text } from "react-native"
import { Colors, SP_LabelView, SP_AestheticLine, SP_TextLabel } from "../../styles_general";
import { ContentView, HeaderButton, HeaderButtonIcon, HeaderCtn, HeaderText, HeaderView, InstructionsCtn, OperationContent, OperationCtn, OperationText, OperatorInfoView, OperatorView } from "./styles";
import Instructions_Modal from "./index_modal";


interface Props {
    operatorName: string,
    operationDescription: string
}
const Instructions: React.FC<Props> = ({...Props}) => {
    const [modalInfoVisible, setModalInfoVisible] = useState(false);

    return (
        <>
        <InstructionsCtn>

            <Instructions_Modal 
                visible={modalInfoVisible}
                setModalVisible={setModalInfoVisible}
            />

            <HeaderCtn>
                <HeaderView><HeaderText>INSTRUCTIONS</HeaderText></HeaderView>
                <HeaderButton onPress={() => setModalInfoVisible(true)}>
                    <HeaderButtonIcon
                        source={require('../../../assets/icons/info-circle.png')}
                        resizeMode="contain"
                    />
                </HeaderButton>
            </HeaderCtn>

            <ContentView>
                <OperatorView>
                    <SP_AestheticLine></SP_AestheticLine>
                    <SP_LabelView><SP_TextLabel maxi>NOM DE L'OPERATEUR</SP_TextLabel></SP_LabelView>
                    <OperatorInfoView>
                        <Text style={{color: Colors.text, fontFamily: 'roboto-regular', fontSize: 18}}>{Props.operatorName}</Text>
                    </OperatorInfoView>
                </OperatorView>

                <OperationCtn>
                    <SP_AestheticLine secondary></SP_AestheticLine>
                    <OperationContent>
                        <OperationText>{Props.operationDescription.toUpperCase()}</OperationText>
                    </OperationContent>
                </OperationCtn>
            </ContentView>
        </InstructionsCtn>
        </>
    )
}

export default Instructions;
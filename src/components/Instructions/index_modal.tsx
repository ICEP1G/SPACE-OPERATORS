import * as React from "react";
import { Text } from "react-native"
import { Colors } from "../../styles_general";
import { HeaderButton, HeaderButtonIcon, HeaderCtn, HeaderText, HeaderView, ViewModal, ContentView } from "./styles_modal";


interface Props {
    visible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
}

const Instructions_Modal: React.FC<Props> = ({...Props}) => {


    return (
        <>
        <ViewModal visible={Props.visible}>

            <HeaderCtn>
                <HeaderView><HeaderText>AIDE</HeaderText></HeaderView>
                <HeaderButton onPress={() => Props.setModalVisible(false)}>
                    <HeaderButtonIcon
                    source={require('../../../assets/icons/cross.png')}
                    resizeMode="contain"
                        />
                </HeaderButton>
            </HeaderCtn>

            <ContentView>
                <Text style={{color: Colors.text, fontFamily: 'roboto-light', fontSize: 18}}>
                    Identifiez le nom de l'opérateur dans la case et indiquez-lui à haute voix son nom puis les instructions fournis dans la case juste en dessous.
                </Text>
            </ContentView>

        </ViewModal>
        </>
    )
}

export default Instructions_Modal;




















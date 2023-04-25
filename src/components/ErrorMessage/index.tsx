import { ErrorBox, MainCtn, TextError } from "./styles"



interface Props {
    isDisplayed?: boolean,
    errorMessage: string
}

const ErrorMessage: React.FC<Props> = ({...Props}) => {

    return (
        <>
        <MainCtn isVisible={Props.isDisplayed}>
            <ErrorBox>
                <TextError>{Props.errorMessage}</TextError>
            </ErrorBox>
        </MainCtn>
        </>
    )
}

export default ErrorMessage
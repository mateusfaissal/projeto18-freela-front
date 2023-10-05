import styled from "styled-components"

export default function MeCanseiLogo() {
    return (
        <LogoContainer>
            <Text>me cansei!</Text>
            <ion-icon name="accessibility-sharp"></ion-icon>
        </LogoContainer>


    )
}

const Text = styled.h1`
    font-family: 'Futura';
    font-weight: bold;
    font-size: 45px;
    margin-right: 5px;
    color: white;
    `
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
        ion-icon {
        font-size: 40px;
        color: lightsalmon;
    }       

`
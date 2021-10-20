import styled from "styled-components"

export const Container = styled.div `
    height: 100vh;
    width: 100%;
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right bottom, rgb(86, 204, 242) 40%, rgb(47, 128, 237) 70%) rgb(47, 128, 237);
`

export const ContainerInfo = styled.div `
    padding: 5vw;
    display: flex;
    margin-bottom: 30vh;
    background: transparent;
    flex-direction: column;
    justify-content: center;
    max-width: 1400px;
    height: 100vh;
    & > * {
        color: white;
        text-align: left;
    }
    & > h1 {
        font-size: 40px;
    }
    & > p {
        font-size: 18px;
    }
    @media (max-width: 480px) {
        & > h1 {
            font-size: 32px;
        }
        & > p {
            font-size: 14px;
        }
    }
`
import styled from 'styled-components'

export const WalletSectionContainer = styled.div `
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    h1 {
        text-align: center;
        font-size: 48px;
        line-height: 1.1;
        font-weight: 600;
        color: black;
        margin-bottom: 50px;
    }
    @media screen and (max-width: 480px) {
        margin-top: 10vh;
        h1 {
            font-size: 35px;
        }
    }
`

export const WalletSectionWrapper = styled.div `
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const WalletSectionCard = styled.div `
    background: white;
    border: 2px solid #2F80ED;
    color: #2F80ED;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    width: 80vw;
    max-width:480px;
    height: 100vh;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
`

export const HistoryContainer = styled.div`
    height: 50vh;
    border: 1px solid #2F80ED;
    border-radius: 5px;
    width: 100%;
    text-align: left;
    padding: 20px;
`

export const HistoryList = styled.div`
    height: 90%;
    width: 100%;
    overflow: scroll;


`


export const CardContainer = styled.div`
    width: 100%;
    text-align: center;
`

export const WalletSectionIcon = styled.img `
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const WalletSectionH1 = styled.h1 `
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const WalletSectionH2 = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
`

export const WalletSectionP = styled.p `
    font-size: 1rem;
    color: black;
    text-align: center;
`

export const WalletSectionButton = styled.button `
    padding: 10px;
    width: 120px;
    margin-top: 10px;
    border: 2px solid #2F80ED;
    background: transparent;
    color: #2F80ED;
    font-weight: 800;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const Input = styled.input`
    height: 40px;
    width: 80%;
    padding-left: 10px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #2F80ED;
`
import styled from 'styled-components'

export const RewardContainer = styled.div `
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

export const RewardWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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

export const RewardCard = styled.div `
    background: white;
    border: 2px solid #2F80ED;
    color: #2F80ED;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 650px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const RewardIcon = styled.img `
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const RewardH1 = styled.h1 `
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const RewardH2 = styled.h2 `
    text-align: center;
    font-size: 1rem;
    margin-bottom: 10px;
`

export const RewardP = styled.p `
    font-size: 1rem;
    color: black;
    text-align: center;
`

export const RewardButton = styled.button `
    padding: 10px;
    width: 120px;
    margin-top: 10px;
    border: 2px solid #2F80ED;
    color: #2F80ED;
    font-weight: 800;
    background: transparent;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
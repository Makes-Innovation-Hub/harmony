import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    width: 100%;
    @media screen and (min-width: 768px) {
        padding: 4rem;
    }
`

export const Title = styled.h1`
    font-family: 'ABeeZee', sans-serif;
    font-style: italic;
    font-weight: 400;
    width: 35%;
    font-size: 28px;
    margin-right: 6rem;
    margin-left: 1rem;
    padding-left: 0;

    @media screen and (max-width: 767px) {
        width: auto;
        margin-right: 1rem;
        flex-grow: 1;
    }
    @media screen and (max-width: 280px) {
        width: auto;
        margin-right: 1rem;
    }
`

export const AppIcon = styled.div`
    position: relative;
    font-size: 1.5rem;
    margin-right: 2rem;
    width: 2%;
    @media screen and (max-width: 280px) {
        width: auto;
        margin-right: 2.7rem;
    }
    @media screen and (max-width: 1280px) {
        width: auto;
        margin-right: 2.7rem;
    }
`

export const LanguageSelect = styled.select`
    font-size: 1rem;
    border: none;
    appearance: none;
    background-color: transparent;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }
`

export const LanguageOption = styled.option`
    color: #333;
`

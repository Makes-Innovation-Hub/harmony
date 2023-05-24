import styled from 'styled-components'

const Wrapped = styled.div`
    width: 100%;
    margin: 0 22px 54px 22px;

    .search-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .search-input {
        padding-left: 6px;
        margin: 17px;
        height: 38px;
        width: 272px;
        font-family: var(--animation-font), sans-serif;
        font-size: 23px;
        border: 1px solid #000000;
    }

    button {
        padding: 0.5px;
        margin-right: 22px;
        width: 43px;
        height: 43px;
        mix-blend-mode: normal;
        background: rgba(149, 112, 255, 0.19);
        border-radius: 50%;
    }

    .error-message {
        display: ${(props) => (props.isInputError ? 'block' : 'none')};
        font-size: 10px;
        color: red;
    }

    .svg-search {
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        max-width: 480px;
        min-width: 320px;
    }
`

export default Wrapped

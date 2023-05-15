import styled from 'styled-components'

const Wrapped = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .animation-text {
        font-family: var(--animation-font), sans-serif;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        .animation {
            width: 236px;
            height: 264px;
        }

        .animation-text {
            font-size: 23px;
            text-align: center;
            line-height: 133%;
            color: #333333;
        }
    }

    // iPad + Tablet screen
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }

    // Small screen + Laptop screen
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
    }

    //  Desktops + large screen
    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    }

    // Extra large + TV screen
    @media only screen and (min-width: 1201px) {
    }
`

export default Wrapped

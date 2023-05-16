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
`

export default Wrapped

import styled from 'styled-components'

const Wrapped = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .animation-text {
        font-family: ABeeZee;
    }

    // Mobile phone screen
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        .animation {
            width: 236px;
            height: 264px;
            margin-bottom: 58px;
        }

        .animation-text {
            font-size: 1.2rem;
            text-align: center;
            line-height: 133%;
            color: #333333;
            font-family: ABeeZee;
        }
    }
`

export default Wrapped

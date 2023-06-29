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
            margin-top: 25%;
            width: 80vw;
            height: 80vw;
            margin-bottom: 25%;
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

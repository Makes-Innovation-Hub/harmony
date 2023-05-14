import styled from 'styled-components'

const Wrapped = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .translating-animation-text {
        font-family: var(--translation-animation-font), sans-serif;
    }

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        min-width: 330px;

        .translating-animation {
            width: 236px;
            height: 264px;
        }

        .translating-animation-text {
            font-size: 23px;
            line-height: 133%;
        }
    }
`

export default Wrapped

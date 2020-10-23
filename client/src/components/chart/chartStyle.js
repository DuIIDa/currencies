import styled from 'styled-components'

export const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    & > div {
        margin-right: 10px;
    }

    @media(max-width: 840px) {
        flex-direction: column;
    }
`
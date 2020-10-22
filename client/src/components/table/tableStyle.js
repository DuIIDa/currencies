import styled from 'styled-components'

export const TableBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    place-items: center center;
    border: 4px double black;
`

export const TableDate = styled.div`
    width: 100%;
    text-align: center;
    &:not(:last-child) {
        border-right: 4px double black;
    }
`
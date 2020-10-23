import styled from 'styled-components'

export const TableContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 40px;
`

export const TableBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    place-items: center center;
    border: 4px double black;
`

export const TableFirstCell = styled.div`
    grid-column-start: 1;
    width: 100%;
    height: 100%;
    text-align: center;
    border: 4px double black; 
`

export const TableItem = styled.div`
    width: 100%;
    text-align: center;
    border: 4px double black;

    &.max {
        color: red;
    }

    &.min{
        color: green;
    }
`
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    min-height: 500px;
    min-height: 100vh;
    padding: 10px 80px;
    background: ${props => props.theme.colors.bgColor};
    box-shadow:
        0 1px 4px rgba(0, 0, 0, .3),
        -23px 0 20px -23px rgba(0, 0, 0, .8),
        23px 0 20px -23px rgba(0, 0, 0, .8),
        0 0 40px rgba(0, 0, 0, .1) inset;
`

export default Container
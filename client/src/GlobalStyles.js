import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${props => props.theme.colors.fontColor};
    }
`

export default GlobalStyle
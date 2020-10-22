import React from 'react';

import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
import GlobalStyle from './GlobalStyles'
import Container from './components/container'

import {Header} from './components/header/header'
import {Table} from './components/table/table'


function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>
          <div className="App">
              <Container>
                  <Header></Header>
                  <Table></Table>
              </Container>
          </div>
      </ThemeProvider>
  );
}

export default App;

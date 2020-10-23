import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'

import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
import GlobalStyle from './GlobalStyles'
import Container from './components/container'

import {Header} from './components/header/header'
import {Table} from './components/table/table'
import {MyChart} from './components/chart/chart'

import {asyncSetData} from './actions/index'



function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncSetData())
    }, [])

  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>
          <div className="App">
              <Container>
                    <Header></Header>
                    <Table></Table>
                    <MyChart></MyChart>
              </Container>
          </div>
      </ThemeProvider>
  );
}

export default App;

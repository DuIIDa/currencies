import React from 'react';

import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'


function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          
        </div>
      </ThemeProvider>
  );
}

export default App;
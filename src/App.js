import React from 'react';
import './App.css';
import Main from './components/main';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1190a8',
      dark: '#155475'
    },
    secondary: {
      main: green[900],
      dark: green[900]
    },
  },
  components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: { width:'35px',height:'35px' }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: { margin:'5px' }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: { backgroundColor:'#000'},
          arrow: { color: '#000'}
        }
      }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="App-body">       
          <Main />       
        </div>
      </ThemeProvider>     
    </div>
  );
}

export default App;

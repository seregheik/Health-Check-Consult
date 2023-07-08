import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#BA68C8',
      dark:'#412841',
      light: '#6C5D6C'
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      realsmall:360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)

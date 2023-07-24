import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#BA68C8',// @ts-ignore
      black2:'#412841',
      grey2: '#6C5D6C',
      peach: '#EDA6A4'
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  breakpoints: {
    values: {
      xs: 0, // @ts-ignore
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

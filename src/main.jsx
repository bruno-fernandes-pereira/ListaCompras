import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/pages/Home/Home.jsx'
// import './index.css'
import { GlobalStyle } from './globalStyle.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)

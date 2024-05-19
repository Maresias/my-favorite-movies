import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'


import GlobalStyles from './pages/styles/global'
import theme from './pages/styles/theme'


import {SingIn} from './pages/SignIn'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={ theme }>
      <GlobalStyles/>
      <SingIn />
    </ThemeProvider>
  </React.StrictMode>,
)

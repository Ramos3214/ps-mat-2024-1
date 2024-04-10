import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';

import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'
import TopBar from './ui/TopBar'

import  CssBaseline  from '@mui/material/CssBaseline';
import FooterBar from './ui/FooterBar'
import AuthUserContext from './contexts/AuthUserContext';

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

import Box from '@mui/material/Box'

import myfetch from './lib/myfetch'

function App() {
  // Armazena globalmente as informações do usuário autenticado
  const [authUser, setAuthUser] = React.useState(null)

  async function fetchAuthUser() {
    try{
      const authUser = await myfetch.get('/users/me')
      if(authUser) setAuthUser (authUser)
    }
    catch(error){
      console.error(error)
    }
  }

  // este useEffect() será executado apenas uma vez, quando o componente 
  //app for carregado (setor de dependência vazio). Ele irá perguntar
  // ao back-end se existe algum usuário autenticado e, caso haja, irá armazenar
  React.useEffect(() => {
    fetchAuthUser()
  }, [])

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <CssBaseline />
      <AuthUserContext.Provider value={{authUser, setAuthUser}}>
      <TopBar />
      <Box sx={{ margin: '24px 24px 72px 24px'}}>
      <AppRoutes />
      </Box>
      <FooterBar />
      </AuthUserContext.Provider>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
 
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
 
/*
  AuthRoute verifica se o usuário ainda está autenticado
  quando há uma mudança de rota no front-end
*/
import AuthRoute from './AuthRoute'
import CustomerList from '../pages/customer/CustomerList'
 
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <AuthRoute> <HomePage /> </AuthRoute> } />
      <Route path="/login" element={ <LoginPage /> } />

      <Route path="/customers" element={ <AuthRoute> <CustomerList /> </AuthRoute>} />
    </Routes>
  )
}
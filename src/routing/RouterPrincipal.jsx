import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Header } from '../components/layouts/Header'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes></Routes>
    </BrowserRouter>
  )
}

import { useState } from 'react'
import './App.scss'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/navBar'

function App() {
  

  return (
  <>
  <NavBar/>
  <Home/>
  <Articles/>
  <Footer/>
  </>
  )
}

export default App

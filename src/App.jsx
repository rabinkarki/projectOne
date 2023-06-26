import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from "./components/header.jsx";
import Home from "./components/Home.jsx";
function App() {
 

  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App

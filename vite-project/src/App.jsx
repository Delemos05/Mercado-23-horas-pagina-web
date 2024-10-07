import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/Home/Home'
import About from './pages/About/About'

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
   </div>
  )
}

export default App

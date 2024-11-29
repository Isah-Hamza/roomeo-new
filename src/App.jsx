import { useState } from 'react'

import './App.css'
import Home from './pages'
import { BrowserRouter } from 'react-router-dom'
import About from './pages/about'

function App() {

  return (
    <div className='bg-black text-white min-h-screen overflow-auto' >
      <BrowserRouter>
        {/* <Home /> */}
        <About />
      </BrowserRouter>
    </div>
  )
}

export default App

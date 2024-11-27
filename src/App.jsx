import { useState } from 'react'

import './App.css'
import Home from './pages'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className='bg-black text-white min-h-screen overflow-auto' >
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App

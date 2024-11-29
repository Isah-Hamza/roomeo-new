import { useState } from 'react'

import './App.css'
import Home from './pages'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './pages/about'
import Blog from './pages/blog'
import PrivacyPolicy from './pages/privacy'
import Terms from './pages/Terms'

function App() {

  return (
    <div className='bg-black text-white min-h-screen overflow-auto' >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/about-us" Component={About} />
          <Route path="/blog" Component={Blog} />
          <Route path="/privacy-policy" Component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" Component={Terms} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

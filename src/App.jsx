import { useEffect, useState } from 'react'

import './App.css'
import Home from './pages'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './pages/about'
import PrivacyPolicy from './pages/privacy'
import Terms from './pages/Terms'
import Blog from './pages/blog'
import BlogDetails from './pages/blog/blog'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='bg-black text-white min-h-screen overflow-auto' >
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/about-us" Component={About} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blog/:id" Component={BlogDetails} />
          <Route path="/privacy-policy" Component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" Component={Terms} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

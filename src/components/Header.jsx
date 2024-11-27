import React from 'react'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='mt-7 max-w-[1100px] min-h-[70px] rounded-[40px] border border-white mx-auto px-10 flex justify-between items-center gap-10'>
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <ul className='flex items-center gap-5' >
            <li> <Link href="">About Us</Link></li>
            <li> <Link href="">Blog</Link></li>
            <li> <Link href="">FAQs</Link></li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-[#81231b] text-white py-3 px-7 rounded-lg">Login</button>
        <button className="bg-primary-red text-white py-3 px-7 rounded-lg">Get Started</button>
      </div>
    </div>
  )
}

export default Header

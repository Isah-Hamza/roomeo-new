import React from 'react'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Header = () => {

  const links = [
    {
      title:"About Us",
      url:"/about-us"
    },
    {
      title:"Blog",
      url:"/blog"
    },
    {
      title:"FAQs",
      url:"/home#faq"
    },
    
  ]

  return (
    <div data-aos="fade-down" className='mt-7 max-w-[1150px] min-h-[70px] rounded-[40px] border border-white mx-auto px-10 flex justify-between items-center gap-10'>
      <Link to={'/'} className="">
        <img src={logo} alt="logo" />
      </Link>
      <div className="">
        <ul className='flex items-center gap-5' >
          {
            links.map((item,idx) => (
              <motion.li
                key={idx}
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: "0 1rem",
                  cursor: "pointer",
                }}
              >
                <Link to={item.url} >
                  <motion.span
                    initial={{ y: 0 }}
                    whileHover={{ y: -3 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    style={{ display: "inline-block" }}
                  >
                    {item.title}
                  </motion.span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      height: "2px",
                      backgroundColor: "#000", // Adjust color as needed
                      width: "100%",
                      transformOrigin: "left",
                    }}
                  />
                </Link>
              </motion.li>
            ))
          }
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

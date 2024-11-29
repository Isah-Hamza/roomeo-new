import React, { useState } from 'react'
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

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
    <div className={`z-20 bg-black/95 fixed w-full top-0 left-0 ${open ? 'h-[370px] md:h-[100px]' : ' h-[100px]'} `} >
      <div data-aos="fade-down" className="py-3 mt-7 max-w-[95%] lg:max-w-[1150px] min-h-[70px] rounded-[40px] border border-white mx-auto px-10 ">
        <div  className='flex justify-between items-center gap-10'>
          <Link to={'/'} className="">
            <img src={logo} alt="logo" />
          </Link>
          <div className={`hidden md:!block `}>
            <ul className='grid md:flex items-center gap-5' >
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
          <div className="hidden md:flex items-center gap-3">
            <a href='https://app.roomeo.ng/auth/signin' className="bg-[#81231b] text-white py-3 px-7 rounded-lg">Login</a>
            <a href='https://app.roomeo.ng/auth/signup' className="bg-primary-red text-white py-3 px-7 rounded-lg">Get Started</a>
          </div>
          <div onClick={toggleOpen} className='block md:hidden cursor-pointer' >
            {
              open ? 
              <AiOutlineClose size={28} />
              : <HiOutlineMenuAlt4 size={28} />
            }
          </div>
        </div>
        <div className={`${open ? 'block' : 'hidden'} md:!hidden mt-5`}>
          <ul className='grid md:flex items-center gap-5' >
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
          <div className="grid my-5 gap-3">
            <a href='https://app.roomeo.ng/auth/signin' className="w-fit bg-[#81231b] text-white py-2 px-7 rounded-lg">Login</a>
            <a href='https://app.roomeo.ng/auth/signup' className="w-fit bg-primary-red text-white py-2 px-7 rounded-lg">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Header

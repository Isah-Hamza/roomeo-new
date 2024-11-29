import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import { blogs } from '../../data/blog';
const BlogDetails = () => {

    const path = useLocation().pathname;

  return (
    <div>
        <Header />
        <div className='about max-w-[1300px] px-10 mx-auto mt-12' >
            <div className="text-center">
                <h1 className='text-7xl tracking-tight font-semibold' >{blogs[0].title}</h1>
            </div>
            <div className="grid my-20 gap-16 mx-auto w-full">
                <p className='text-lg flex items-center gap-2 font-semibold text-center justify-center' >
               <span>  {blogs[0].author}</span> <span>{blogs[0].date}</span>
                </p>
                <img src={blogs[0].src} className='w-full' />
                <div className="grid gap-5 text-left opacity-60" dangerouslySetInnerHTML={{__html: blogs[0].content}} >
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BlogDetails

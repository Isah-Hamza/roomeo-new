import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import { blogs } from '../../data/blog';
const BlogDetails = () => {

    const path = useLocation().pathname;
    const id = path.split('/')[2];

    const blog = blogs.find(item => item.id == id);

  return (
    <div>
        <Header />
        <div className="mt-[150px]"></div>
        <div className='about max-w-[1300px] px-5 sm:px-10 mx-auto mt-12' >
            <div className="text-center">
                <h1 className='text-3xl sm:text-7xl tracking-tight font-semibold' >{blog.title}</h1>
            </div>
            <div className="grid my-20 gap-16 mx-auto w-full">
                <p className='text-lg flex items-center gap-2 font-semibold text-center justify-center' >
               <span>  {blog.author}</span> <span>{blog.date}</span>
                </p>
                <img src={blog.src} className='w-full min-h-[250px] object-cover sm:min-h-[unset]' />
                <div className="grid gap-5 text-left opacity-60" dangerouslySetInnerHTML={{__html: blog.content}} >
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BlogDetails

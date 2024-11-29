import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import vid1 from '../assets/video/vid1.mp4'
import vid2 from '../assets/video/vid2.mp4'
import grid1 from '../assets/images/grid1.webp';
import about2 from '../assets/images/about-2.png'

import team1 from '../assets/images/team1.webp';
import team2 from '../assets/images/team2.webp';
import team3 from '../assets/images/team3.webp';
import team4 from '../assets/images/team4.webp';
import team5 from '../assets/images/team5.webp';
import team6 from '../assets/images/team6.webp';
import { MdArrowRightAlt } from 'react-icons/md'

const Team = ({img, name, position}) => (
    <div className="grid gap-3">
        <img className='object-cover rounded-full w-[230px] h-[230px]' src={img} alt={name} />
        <div className='text-center font-semibold' >
            <p>{name}</p>
            <p className='opacity-70' >{position}</p>
        </div>
    </div>
)

const About = () => {
  return (
    <div>
      <Header />
      <div className='about max-w-[1400px] px-10 mx-auto mt-12' >
        <div className="text-center">
            <h1 className='text-7xl font-semibold' >About Us</h1>
            <p className='text-4xl max-w-[700px] mx-auto opacity-40 mt-24' >We are a trusted property investment company focused on making real estate investments more accessible and profitable for you.</p>
        </div>
        <div className="player grid grid-cols-4 gap-5 mt-14">
            <video width="100%" autoPlay muted loop >
                <source src={vid1}  type="video/mp4"
                />
                Sorry, your browser doesn't support videos.
            </video>
            <div className="gap-3 h-full grid grid-rows-2">
                <img className='h-full w-full' src={grid1} alt="" />
                <img className='h-full w-full' src={grid1} alt="" />
            </div>
            <video width="100%" autoPlay muted loop >
                <source src={vid2}  type="video/mp4"
                />
                Sorry, your browser doesn't support videos.
            </video>
            <div className="gap-3 h-full grid grid-rows-2">
                <img className='h-full w-full' src={grid1} alt="" />
                <img className='h-full w-full' src={grid1} alt="" />
            </div>
        </div>
        <div className="mt-28 max-w-[1100px] mx-auto">
            <div className="">
                <h1 className='text-7xl font-semibold text-center' >Meet the team</h1>
                <div className="flex justify-between gap-10 mt-10">
                    <Team img={team1} name={'Doyin Adewole'} position={'CEO'} />
                    <Team img={team2} name={'Akintoye'} position={'COO'} />
                    <Team img={team3} name={'Jumoke'} position={'CTO'} />
                </div>
                <div className="flex justify-between gap-10 mt-10">
                    <Team img={team4} name={'Amarii'} position={'Creator'} />
                    <Team img={team5} name={'Joshua'} position={'Design'} />
                    <Team img={team6} name={'Jolly'} position={'Developer'} />
                </div>
            </div>
            <div className="mt-12">
                <div className="grid md:grid-cols-[1fr,1fr] items-center gap-14 py-20 text-center md:text-left ">
                    <img src={about2} alt="about us" className='w-full max-h-[400px]' />
                    <div className='text-3xl opacity-60'>
                        <p className='font-semibold my-3'>Work ends when the job  is done</p>
                        <p className='leading-normal'>
                            We are a dedicated team and characterized by our strong work ethic, our willingness to go above and beyond, and our ability to collaborate effectively.                </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About

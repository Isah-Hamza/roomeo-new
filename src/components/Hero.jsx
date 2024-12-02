import React, { useEffect, useState } from 'react'

import new_hero from '../assets/images/hero2.png';

import spiral from '../assets/images/spiral-bind.png';

import { HashLink as Link } from 'react-router-hash-link';
import { BiCheck, BiLogoPlayStore } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { FaAppStore } from 'react-icons/fa';

const List = ({content, idx}) => {
    return <div data-aos-delay={idx * 1 + 500} data-aos="fade-up" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary-red grid place-content-center">
            <BiCheck size={30} />
        </div>
        <p className='font-medium' > {content}</p>
    </div>
};

const Hero = () => {
    return (
        <div className="pt-16 bg-[#F45E5105] relative overflow-x-hidden max-w-[1300px] px-5 sm:px-10 mx-auto">
            <div className='flex flex-col-reverse md:grid grid-cols-[.9fr,1.1fr] gap-10 z-10 overflow-y pb-10'>
                <div className='pt-26'>
                    <h3 data-aos="fade-up" className='custom-title hidden md:block text-5xl lg:text-7xl tracking-tight !font-bold'>
                        <p className='!font-bold'> Earn real estate</p>
                        <div className='relative !font-bold w-fit inline-block mr-5'>
                            <img className='absolute -left-7 top-2 w-52 lg:w-[270px] max-w-[unset]' src={spiral} alt="spiral" />
                            <span className='text-primary-red !font-bold'>income</span>
                        </div>  by co-
                        <p className='!font-bold'>owning a house</p>
                    </h3>
                    <div className="grid gap-3">
                        <div className="flex items-center gap-3">
                            <div className=""></div>
                        </div>
                    </div>
                    <div className="grid gap-3 mt-10">
                        <List idx={1} content={'Average annual return on investment up to 15%'} />
                        <List idx={2} content={'Withdraw earnings weekly'} />
                        <List idx={3} content={'Fully managed by experts'} />
                    </div>
                    <div className="flex items-center gap-3 mt-8">
                        <button className="bg-[#81231b] text-sm sm:text-base text-white py-3 px-4 sm:px-7 rounded-lg flex items-center gap-2">Start Investing
                        <BsArrowRight />
                        </button>
                        <button className="bg-primary-red text-sm sm:text-base text-white py-3 px-4 sm:px-7 rounded-lg flex items-center gap-2">
                            <BiLogoPlayStore size={18} />
                            <FaAppStore />
                            Download App</button>
                    </div>
                    
                </div>
                <img className='animate-custom-bounce w-full' src={new_hero} alt="hero" />

                <h3 className='custom-title tracking-wide text-4xl block md:hidden text-center'>
                Earn real estate
                    <span className='text-primary-red px-2 !font-fellixBold'>income</span>
                    by co-owning a house
                </h3>
            </div >
        </div >
    )
}

export default Hero

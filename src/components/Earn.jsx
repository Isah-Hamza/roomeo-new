import React from 'react'
import { PiMonitor } from "react-icons/pi";
import { PiMoneyLight } from "react-icons/pi";
import { BsWallet } from "react-icons/bs";

const Card = ({ icon , title, description}) => (
    <div className="bg-[#262626] p-10 rounded-xl">
        <div className="bg-primary-red w-16 h-16 rounded-3xl grid place-content-center">
            {icon}
        </div>
        <p className='text-2xl font-semibold mt-12'>{title}</p>
        <p className='font-medium my-5'>       
            {description}
        </p>
    </div>
)

const Earn = () => {
  return (
    <div className='max-w-[1300px] mx-auto px-10 my-20' >
      <h2 className='text-6xl font-bold text-center leading-tight tracking-tight'>
      Real estate is the <br />cornerstone to build  <br />your wealth.
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-20">
        <Card 
            icon={<BsWallet size={30} />}
            title={'Buy'}
            description={"Buy as many fractions from our listed properties at affordable entry points and start building your assets portfolio."}
        />
        <Card 
            icon={<PiMoneyLight size={30} />}
            title={'Earn'}
            description={"Earn rental income from assets and benefit from property appreciation based on your fractional ownership."}
        />
        <Card 
            icon={<PiMonitor size={30} />}
            title={'Monitor'}
            description={"Monitor your portfolio with ease while we handle the day-to-day management of your assets."}
        />
      </div>
    </div>
  )
}

export default Earn

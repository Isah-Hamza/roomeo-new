import React from 'react'

const Diversify = () => {

    const Card = ({value, desc}) => (
        <div className='text-center grid gap-7' >
            <h3 className='text-5xl font-semibold hover:scale-110 origin-center cursor-pointer ' >{value}<span className='text-primary-red' >%</span></h3>
            <p>{desc}</p>
        </div>
    )

  return (
    <div className='mt-20 w-[90%] lg:max-w-[1150px] mx-auto p-10 border border-dashed rounded-3xl'>
      <div className='grid md:flex justify-between border-b pb-10 gap-14'>
        <h2  data-aos="fade-up" className='text-3xl md:text-5xl font-semibold'> <span className='text-primary-red' >Diversify your asset portfolio</span>  by investing in multiple properties.</h2>
        <p className='font-medium max-w-[300px] text-sm' >We are committed to the security of your money and the protection of your assets. We target high-value properties at different locations in stable economies.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-5 mt-14">
        <Card value={17} desc="Earn profit. Up to 17% per annum when you invest in our listed properties." />
        <Card value={30} desc="Low charges. We charge a minor fee to help you manage your assets." />
        <Card value={100} desc="Attain prime. We effortlessly secure the utmost proceeds possible for you." />
      </div>
    </div>
  )
}

export default Diversify

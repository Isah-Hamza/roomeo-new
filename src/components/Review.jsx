import React from 'react'

const Review = () => {
  return (
    <div className='max-w-[1000px] rounded-xl mx-auto mt-20' >
        {/* <iframe width="1038" height="584" src="https://www.youtube.com/embed/fTldkl0vJZs" title="How Roomeo&#39;s Fractional Real Estate Invest Helped Me Hedged My Funds (Part 1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        <p className='text-center font-bold text-5xl mb-2' >What our users are saying</p>
       <div className="  ">
        <iframe
          className="rounded-xl"
          width="100%"
          height="550"
          src="https://www.youtube.com/embed/fTldkl0vJZs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Review
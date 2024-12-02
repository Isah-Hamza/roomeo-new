import React from 'react';
import start_journey from '../assets/images/phone.webp';
import appstore from '../assets/images/App Store.png';
import playstore from '../assets/images/Play Store.png';
import { Link } from 'react-router-dom';

const Download = () => {
  return (
    <div className="max-w-[1300px] px-5 sm:px-10 mx-auto py-14 pb-0 bg-[#66303105] items-center">
      <h2 className='custom-title mb-7 text-4xl md:text-6xl font-bold text-center leading-tight tracking-tight'>
      Invest in income- <br />
       generating real estate, <br /> easily.
      </h2>
      <div className="custom-container items-center flex justify-center gap-14">
        <img className="hidden md:block max-w-[500px]" src={start_journey} alt="journey" />
        <div className="w-full md:w-[unset]">
         
          <div className="mt-7">
            <div className="grid gap-5">
              <div className="flex ">
                <div className="flex items-center gap-5 text-xl font-medium mt-7">
                  <div className="w-12 h-12 bg-primary-red grid place-content-center text-lg rounded-full"> 1 </div>
                  <p className="!font-fellixSemibold">Download the app</p>
                 
                </div>
              </div>
              <div className="flex ">
                <div className="flex items-center gap-5 text-xl font-medium mt-7">
                  <div className="w-12 h-12 bg-primary-red grid place-content-center text-lg rounded-full"> 2 </div>
                  <p className="!font-fellixSemibold">Create an Account</p>
                 
                </div>
              </div>
              <div className="flex ">
                <div className="flex items-center gap-5 text-xl font-medium mt-7">
                  <div className="w-12 h-12 bg-primary-red grid place-content-center text-lg rounded-full"> 3 </div>
                  <p className="!font-fellixSemibold">Buy fractions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-8 max-w-[200px]">
            <Link to={'/create-account'}>
              <img
                className="!max-h-[100px] max-w-40"
                src={appstore}
                alt="appstore"
              />
            </Link>
            <Link to={'/create-account'}>
              <img
                className="!max-h-[100px] max-w-40"
                src={playstore}
                alt="playstore"
              />
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Download;

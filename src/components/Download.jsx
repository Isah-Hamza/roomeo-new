import React from 'react';
import start_journey from '../assets/images/start_journey.png';
import appstore from '../assets/images/App Store.png';
import playstore from '../assets/images/Play Store.png';
import { Link } from 'react-router-dom';

const Download = () => {
  return (
    <div className="max-w-[1300px] px-10 mx-auto py-14 pb-0 bg-[#66303105] items-center">
      <h2 className='mb-7 text-6xl font-bold text-center leading-tight tracking-tight'>
      Invest in income- <br />
       generating real estate, <br /> easily.
      </h2>
      <div className="custom-container items-center grid md:grid-cols-[1fr,1fr] gap-14">
        <img className="hidden md:block" src={start_journey} alt="journey" />
        <div className="">
         
          <div className="mt-7">
            <div className="grid gap-5">
              <div className="flex ">
                <div className="flex items-center gap-5 text-2xl font-medium mt-5">
                  <div className="w-14 h-14 bg-primary-red grid place-content-center text-lg rounded-full"> 1 </div>
                  <p className="!font-fellixSemibold">Download the app</p>
                 
                </div>
              </div>
              <div className="flex ">
                <div className="flex items-center gap-5 text-2xl font-medium mt-5">
                  <div className="w-14 h-14 bg-primary-red grid place-content-center text-lg rounded-full"> 2 </div>
                  <p className="!font-fellixSemibold">Create an Account</p>
                 
                </div>
              </div>
              <div className="flex ">
                <div className="flex items-center gap-5 text-2xl font-medium mt-5">
                  <div className="w-14 h-14 bg-primary-red grid place-content-center text-lg rounded-full"> 3 </div>
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

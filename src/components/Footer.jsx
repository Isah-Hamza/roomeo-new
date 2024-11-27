import React from 'react'
import logo from '../assets/images/logo.png';
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-10'>
      <div className='bg-[#262626] w-full min-h-[100px] '>
        <div className="max-w-[1300px] mx-auto px-10 py-7 grid grid-cols-[2fr,1fr,1fr]">
          <div className="">
            <img src={logo} alt="logo" />
            <div className="mt-3 flex items-center gap-3">
              <CiTwitter size={22} />
              <CiLinkedin size={20} />
              <CiInstagram size={20} />
              <CiFacebook size={20} />
            </div>
          </div>
          <div className="">
            <p className='font-semibold mb-5' >Pages</p>
            <ul className='font-light opacity-70 grid gap-3'>
              <li><Link to={''} >About Us</Link></li>
              <li><Link to={''} >Contact Us</Link></li>
              <li><Link to={''} >Privacy Policy</Link></li>
              <li><Link to={''} >Terms and Conditions</Link></li>
            </ul>
          </div>
          <div className="">
            <p className='font-semibold mb-5' >Resources</p>
            <ul className='font-light opacity-70 grid gap-3'>
              <li><Link to={''} >FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] px-10 mx-auto py-10 grid gap-5 text-sm" >
        <p>© 2024 Roomeo</p>
       
        <p>Roomeo, a trusted property investment company focused on making real estate investments more accessible and profitable for its members is registered with the Corporate Affairs Commission of Nigeria (RC 2004939). Roomeo invests primarily in stable economies like the United Kingdom and the United States of America on behalf of its members under the Roomeo Estate Multipurpose Cooperative Society with the Registration Number  FCTA/ARDS/COOP/2019/7040.</p>
        <p>Roomeo operates under the strict Laws of the Federal Government of Nigeria, as enforced by the Special Control Unit Against Money Laundering (SCUML RN:SC 151637510). This ensures that we have a clear obligation to report financial transactions beyond a certain threshold, providing an additional layer of protection for our investors in compliance with the provisions of the Money Laundering (Prohibition) Act, 2004 which was subsequently repealed and amended to Money Laundering (Prohibition) Act 2011(as amended). 
        </p>
        <p>As an investor, it is crucial to understand our Terms of Service and Privacy Policy. Using the Roomeo Mobile App or Web Platform, you accept these terms: Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections might not reflect actual future performance. 
        </p>
        <p>By using our platform, you agree to release Roomeo from any liability for losses or damages resulting from your investment decisions. We strongly advise reading our terms and conditions thoroughly before proceeding. We appreciate your trust in Roomeo for your investment needs.
        </p>
        <p>Please be aware that all information on this website is for informational purposes only and should not be construed as financial advice. Investing in any opportunity involves risks, and it's essential to conduct your own research and seek professional advice before making any investment decisions.
        </p>
      </div>
    </div>
  )
}

export default Footer

import React, { useEffect, useState } from 'react'
import { motion , AnimatePresence} from 'framer-motion'

const Grow = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const features = [
    "Grow Your Money",
    "Low cost entry",
    "High income assets",
    "Made for you",
  ];

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.8 } },

    // hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
    // visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
    // exit: { opacity: 0, y: -20, transition: { duration: 0.8 } }, // Fade out and slide up
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000); // Change feature every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-20 w-[90%] lg:max-w-[1150px] mx-auto p-10 rounded-3xl bg-[#262626] text-center '>
      {/* <div>
        <p className='text-6xl font-bold' >Grow Your Money</p>
        <p className='text-6xl font-bold' >Low cost entry</p>
        <p className='text-6xl font-bold' >High income assets</p>
        <p className='text-6xl font-bold' >Made for you</p>
        </div> */}
      <div className="max-h-[95px] overflow-y-hidden">
        <AnimatePresence mode='wait' >
          <motion.div
            key={currentFeatureIndex}
            className="feature-item font-bold text-[30px] md:text-[60px]"
            variants={featureVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              margin: "15px 0 50px 0",
              overflowY:"hidden",
            }}
          >
            {features[currentFeatureIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <button className="mt-28 bg-white text-black py-2 px-7 rounded-3xl">Sign Up</button>
    </div>
  )
}

export default Grow
 
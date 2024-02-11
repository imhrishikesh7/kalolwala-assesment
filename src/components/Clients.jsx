import React from 'react'
import Row1 from '../images/row1.png'
import Row2 from '../images/row2.png'
import { motion } from 'framer-motion';


const OppositeImagesAnimation = () => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100px' }}>
      {/* Left to right animation */}
      <motion.img
        src={Row1} // Use your left to right image
        alt="Left to right"
        style={{
          position: 'absolute',
          left: '-100px', // Initial position behind the left bezel
        }}
        animate={{
          x: ['0%', '100%'], // Move from behind left bezel to behind right bezel
          transition: {
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      />

      {/* Right to left animation */}
      <motion.img
        src={Row2} // Use your right to left image
        alt="Right to left"
        style={{
          position: 'absolute',
          top: '70%', // Vertically center the image
          right: '-100px', // Initial position behind the right bezel
        }}
        animate={{
          x: ['0%', '-100%'], // Move from behind right bezel to behind left bezel
          transition: {
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      />
    </div>
  );
};

export const Clients = () => {
    return (

        <div className='my-5 container c1'>
            <h1 className='fw-bolder'>Let's unite for<br />innovation</h1>
            <h2 className='fw-bolder'>Join 400+</h2>
            <h3 className='fw-bold'>companies already growing</h3>
            <div className='my-5 c-row'>

                <OppositeImagesAnimation/>
            </div>
        </div>

    )
}

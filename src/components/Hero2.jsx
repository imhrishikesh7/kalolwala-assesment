import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Book from '../images/book.png';
import Screens from '../images/sceens.png';

const NeonBorder = ({ children }) => {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        const { width, height } = divRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Update dimensions on initial render
    updateDimensions();

    // Update dimensions when window is resized
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="neon-border-container" ref={divRef}>
      <div className="neon-border-content">
        {children}
      </div>
      <motion.svg
        className="svg-border"
        width={dimensions.width + 75}
        height={dimensions.height + 100}
        viewBox={`0 0 ${dimensions.width + 100} ${dimensions.height + 100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={`M 0 0 h ${dimensions.width} v ${dimensions.height} h -${dimensions.width} v -${dimensions.height}`}
          stroke="grey"
          strokeWidth="1"
          animate={{
            pathLength: [1, 1],
            pathOffset: [0, 0.5],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }}
        />
      </motion.svg>
    </div>
  );
};

const FloatingDiv = ({ delay }) => {
  return (
    <motion.img
      className='img-fluid mt-5'
      src={Screens}
      style={{
        cursor: "pointer"
      }}
      animate={["initial"]}
      variants={{
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
            duration: 10
          }
        },
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }
      }}
    />
  );
};

export const Hero2 = () => {
  return (
    <div className='container'>
      <div className='container hero2 row'>
        <section className="col-lg-8">
          <h1 className='fw-bolder'>We are</h1>
          <h2 className='fw-bold'>Creative Designers, Insightful<br />Strategists and Exceptional<br />Engineers</h2>
          <p>
            The organization is focused on foregrounding expertise in its services,<br />staying updated on global trends, refining domain knowledge, and adapting<br />to evolving content creation arenas to effectively serve client brands.
          </p>
        </section>
        <div className="col-lg-4 d-flex align-items-center justify-content-center">
          <img src={Book} alt="" />
        </div>
      </div>

      <NeonBorder>
        <div className="container table row">
          <div className='tab1 col-md-6'>
            <h2>35,000</h2>
            <p>Websites Already<br />Thriving With Us!</p>
          </div>
          <div className='tab2 col-md-6'>
            <h2>
              Experience<br/>
              <span className='green'>the power of <br />
              speed</span> with our <br />
              cutting-edge <br />
              <span className='blue'>hosting <br />
              infrastructure</span>
            </h2>
            <button className='btn btn-outline-secondary'>Read our story</button>
          </div>
        </div>
      </NeonBorder>

      <FloatingDiv delay={0} />
    </div>
  );
};

export default Hero2;

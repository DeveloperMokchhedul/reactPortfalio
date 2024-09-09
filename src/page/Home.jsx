
import { Typewriter } from 'react-simple-typewriter'

import { motion } from "framer-motion";


function Home() {


  return (
    <>
      <div

        className='container mx-auto  '>
        <div className='h-[80vh] grid grid-cols-12 gap-3 justify-center items-center '>
          <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800"
            className='col-span-8'>
            <h1
              className='text-5xl' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
              <span className='text-5xl text-white font-bold'>I am</span>{' '}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Frontend Web Developer', 'React Developer', 'NextJs Developer']}
                  loop={Infinity}
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <div className='mt-10'>
              <a className='bg-green-600 text-white px-5 py-2 rounded-md' href="public/cd.pdf" download={"resum.pdf"}>
                Download Resume
              </a>
            </div>
          </div>
          <div className='col-span-4'
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"



          >


            <img className='shadow-white shadow-2xl  w-[350px] h-[350px] rounded-full' src="public/assets/mokchhedulislam.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;

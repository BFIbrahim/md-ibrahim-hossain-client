import React, { useState } from 'react';
import Lottie from 'lottie-react'
import Project from '../../assets/projects.json'
import { FaArrowAltCircleRight, FaGithub } from 'react-icons/fa';
import CounterUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { Link } from 'react-router-dom';





const Projects = () => {

    const [counterOn, setCounterON] = useState(false)

    return (
        <div className='text-center mt-14'>
            <h1 className=' font-bold text-4xl text-center pt-10 mb-10 uppercase border-gray-400 md:w-2/6 mx-auto border-b-2 pb-3'>My Recent Project</h1>

            <ScrollTrigger onEnter={() => { setCounterON(true) }} onExit={() => { setCounterON(false) }}>
                <div className='p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-56 mx-auto rounded-md bg-pink-600 text-white'>
                    <p className=' font-bold text-3xl' data-val='90'>
                        {counterOn && <CounterUp start={0} end={30} duration={2} delay={0} />}+
                    </p>
                    <p className='font-bold uppercase'>Project Complete</p>
                </div>
            </ScrollTrigger>

            <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='md:flex items-center gap-10'>
                <div className='md:w-[35%] mx-auto mb-20'>
                    <Lottie animationData={Project} />
                </div>

                <div className='md:w-[50%] h-[300px] md:h-[400px] mx-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <div class="h-[100%] overflow-auto">
                        <img className='h-[auto] w-[100%] block' src="https://i.ibb.co/BqZTc7D/home.png" alt="Your Image" />
                    </div>
                    <div className='grid grid-cols-3'>
                        <Link to='https://bfmi-school.web.app/' target='_default'><button className='btn bg-gray-300 w-full font-bold rounded-none'><FaArrowAltCircleRight className='text-2xl text-gray-600 '></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bfmi-school-client' target='_default'><button className='btn bg-gray-300 w-full font-bold rounded-none'><FaGithub className='text-2xl text-gray-600 '></FaGithub> Client Code </button></Link>

                        <Link to='https://github.com/BFIbrahim/bfmi-school-server' target='_default'><button className='btn bg-gray-300 w-full font-bold rounded-none'><FaGithub className='text-2xl text-gray-600 '></FaGithub> Server Code </button></Link>
                    </div>
                </div>

            </div>

            <button onClick={() => { hundleDownloadResume(fileURL) }} className='btn border-none text-white bg-pink-600 mt-16 md:mt-16 lg-mt-5 hover:bg-gray-300 hover:bg-opacity-40 mb-4 '>View All Projects</button>
        </div>
    );
};

export default Projects;
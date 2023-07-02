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
        <div id='project' className='text-center mt-14 mb-20'>
            <h1 className=' font-bold text-4xl text-center pt-10 mb-10 uppercase border-sky-500 text-white md:w-2/6 mx-auto border-b-2 pb-3'>My Recent Projects</h1>

            <ScrollTrigger onEnter={() => { setCounterON(true) }} onExit={() => { setCounterON(false) }}>
                <div className='p-5 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)] w-56 mx-auto rounded-md bg-sky-500 text-white mb-14'>
                    <p className=' font-bold text-3xl' data-val='90'>
                        {counterOn && <CounterUp start={0} end={30} duration={2} delay={0} />}+
                    </p>
                    <p className='font-bold uppercase'>Project Complete</p>
                </div>
            </ScrollTrigger>


            <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-0 lg:gap-0 p-5 md:p-0 lg:p-0'>
                <div className="md:w-[300px] md:h-[300px] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto ">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/t4LzXfK/1.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-3 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bf-toy-cars.web.app/' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-client' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub> Client Code </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-server' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl text-white '></FaGithub> Server Code </button></Link>
                    </div>
                </div>

                <div className="md:w-[300px] md:h-[300px] base-100 mx-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/bzC1TNr/4.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-3 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bf-toy-cars.web.app/' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-client' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub> Client Code </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-server' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl text-white '></FaGithub> Server Code </button></Link>
                    </div>
                </div>

                <div className="md:w-[300px] md:h-[300px] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/HPb5Hf2/5.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bf-toy-cars.web.app/' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-client' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>
            </div>

            <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" className='mt-0 md:mt-24 lg:mt-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-0 lg:gap-0 p-5 md:p-0 lg:p-0'>
                <div className="md:w-[300px] md:h-[300px] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/ccjKnTV/2.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bf-toy-cars.web.app/' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-client' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>

                <div className="md:w-[300px] md:h-[300px] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/CVMzDbg/6.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bf-toy-cars.web.app/' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-client' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>

                <div className="md:w-[300px] md:h-[300px] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/7GHctzn/3.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bf-toy-cars.web.app/' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-client' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
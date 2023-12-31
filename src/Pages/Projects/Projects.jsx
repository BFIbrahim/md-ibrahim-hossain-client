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
            <h1 className=' font-bold md:text-4xl text-center pt-10 mb-10 uppercase border-sky-500 text-white w-2/4 mx-auto border-b-2 pb-3'>My Recent Projects</h1>

            <ScrollTrigger onEnter={() => { setCounterON(true) }} onExit={() => { setCounterON(false) }}>
                <div className='p-5 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)] w-56 mx-auto rounded-md bg-sky-500 text-white mb-14'>
                    <p className=' font-bold text-3xl' data-val='90'>
                        {counterOn && <CounterUp start={0} end={30} duration={2} delay={0} />}+
                    </p>
                    <p className='font-bold uppercase'>Project Complete</p>
                </div>
            </ScrollTrigger>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0 lg:gap-0 p-5 md:p-0 lg:p-0'>

                <div data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500" className="md:w-[300px] h-[300] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto mb-14">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/bzC1TNr/4.jpg" alt="Shoes" /></figure>

                    <div className='grid grid-cols-3 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bf-toy-cars.web.app/' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-client' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub> Client Code </button></Link>

                        <Link to='https://github.com/BFIbrahim/bf-toys-zone-server' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl text-white '></FaGithub> Server Code </button></Link>
                    </div>
                </div>

                <div data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500" className="md:w-[300px] h-[300] base-100 mx-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-14">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/t4LzXfK/1.jpg " alt="Shoes" /></figure>
                    <div className='grid grid-cols-3 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bfmi-school.web.app/' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/bfmi-school-client' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub> Client Code </button></Link>

                        <Link to='https://github.com/BFIbrahim/bfmi-school-server' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl text-white '></FaGithub> Server Code </button></Link>
                    </div>
                </div>

                <div  data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500" className="md:w-[300px] h-[300] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto mb-14">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/HPb5Hf2/5.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://illustrious-pothos-dfd739.netlify.app/' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-BFIbrahim' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>

                
                <div  data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500" className="md:w-[300px] h-[300] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto  mb-14">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/ccjKnTV/2.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://bfibrahim.github.io/Architect-Responsive-Website/' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/Architect-Responsive-Website' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>

                <div  data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500" className="md:w-[300px] h-[300] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto  mb-14">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/CVMzDbg/6.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://elaborate-tulumba-a6fd68.netlify.app/' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/khowledge-cafe-website' target='_default'><button className='hover:bg-sky-700 btn bg-sky-500 w-full font-bold rounded-none h-16 text-white'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>

                <div  data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500" className="md:w-[300px] h-[300] base-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mx-auto  mb-14">
                    <figure><img className='rounded-t-md' src="https://i.ibb.co/7GHctzn/3.jpg" alt="Shoes" /></figure>
                    <div className='grid grid-cols-2 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)]'>
                        <Link to='https://transcendent-quokka-3e2348.netlify.app/' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white  hover:bg-sky-700'><FaArrowAltCircleRight className='text-2xl text-white'></FaArrowAltCircleRight> Live Site </button></Link>

                        <Link to='https://github.com/BFIbrahim/legal-house' target='_default'><button className='btn bg-sky-500 w-full font-bold rounded-none h-16 text-white  hover:bg-sky-700'><FaGithub className='text-2xl  text-white '></FaGithub>Code </button></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
import React, { useRef, useState } from 'react';
import CounterUp from 'react-countup'
import Lottie from 'lottie-react'
import ScrollTrigger from 'react-scroll-trigger'
import HTMLAnimation from '../../assets/HTML.json'
import CSSAnimation from '../../assets/CSS.json'
import JSAnimation from '../../assets/JS.json'
import ReactAnimation from '../../assets/React.json'
import NodeJsAnimation from '../../assets/nodeJS.json'
import MongoAnimation from '../../assets/Mongo.json'


const Skills = () => {

    const [counterOn, setCounterON] = useState(false)



    return (
        <ScrollTrigger onEnter={() => { setCounterON(true) }} onExit={() => { setCounterON(false) }}>
            <div className='p-10 bg-gray-100  mt-10'>
                <h1 className='text-center font-bold text-3xl uppercase mb-10 border-gray-400 border-b-2 pb-3 w-56 mx-auto'>My Skills</h1>
                <div  data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><Lottie className='' animationData={HTMLAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>HTML</h1>
                                <p className='text-gray-800'>Proficient in creating structured and semantically meaningful web pages.</p>
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><Lottie className='' animationData={CSSAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>CSS</h1>
                                <p className='text-gray-800'>Skilled in designing and styling web pages, enhancing visual appeal and user experience.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><img className='w-14 h-14' src="https://i.postimg.cc/nhSdrS5F/Tailwind.png" alt="" /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>Tailwind</h1>
                                <p className='text-gray-800'>Experienced in using Tailwind CSS framework for efficient and rapid UI development..</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><img className='w-14 h-14' src="https://i.postimg.cc/90XTGCRv/Bootstrap.png" alt="" /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>Bootstrap</h1>
                                <p className='text-gray-800'>Proficient in utilizing Bootstrap framework for responsive and mobile-friendly web design.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><Lottie className='w-40 h-40' animationData={JSAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>JavaScript</h1>
                                <p className='text-gray-800'> Proficient in using JavaScript to create interactive and dynamic elements on web pages.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><Lottie className='w-20 h-20' animationData={ReactAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>React</h1>
                                <p className='text-gray-800'>Skilled in developing interactive and scalable user interfaces using the React JavaScript library.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><Lottie className='' animationData={NodeJsAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>Node.JS</h1>
                                <p className='text-gray-800'>Experienced in building server-side applications and APIs using Node.js for efficient back-end development.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'><Lottie className='' animationData={MongoAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold'>MongoDB</h1>
                                <p className='text-gray-800'>Proficient in working with MongoDB, a NoSQL database, for storing and retrieving data in web applications.</p>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </ScrollTrigger>

    );
};

export default Skills;
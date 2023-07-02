import React, { } from 'react';
import Lottie from 'lottie-react'
import HTMLAnimation from '../../assets/HTML.json'
import CSSAnimation from '../../assets/CSS.json'
import JSAnimation from '../../assets/JS.json'
import ReactAnimation from '../../assets/React.json'
import NodeJsAnimation from '../../assets/nodeJS.json'
import MongoAnimation from '../../assets/Mongo.json'


const Skills = () => {

    return (
    
            <div className='p-10  mt-10'>
                <h1 className='text-center font-bold text-3xl uppercase mb-10 border-sky-500 border-b-2 text-white pb-3 w-56 mx-auto'>My Top Skills</h1>
                <div  data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><Lottie className='' animationData={HTMLAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold text-sky-500'>HTML</h1>
                                <p className='text-gray-100'>Proficient in creating structured and semantically meaningful web pages.</p>
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><Lottie className='' animationData={CSSAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold text-sky-500'>CSS</h1>
                                <p className='text-gray-100'>Skilled in designing and styling web pages, enhancing visual appeal and user experience.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><img className='w-14 h-14' src="https://i.postimg.cc/nhSdrS5F/Tailwind.png" alt="" /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold text-sky-500'>Tailwind</h1>
                                <p className='text-gray-100'>Experienced in using Tailwind CSS framework for efficient and rapid UI development..</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><img className='w-14 h-14' src="https://i.postimg.cc/90XTGCRv/Bootstrap.png" alt="" /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold text-sky-500'>Bootstrap</h1>
                                <p className='text-gray-100'>Proficient in utilizing Bootstrap framework for responsive and mobile-friendly web design.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><Lottie className='w-40 h-40' animationData={JSAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold text-sky-500'>JavaScript</h1>
                                <p className='text-gray-100'> Proficient in using JavaScript to create interactive and dynamic elements on web pages.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><Lottie className='w-20 h-20' animationData={ReactAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold  text-sky-500'>React.JS</h1>
                                <p className='text-gray-100'>Skilled in developing interactive and scalable user interfaces using the React JavaScript library.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><Lottie className='' animationData={NodeJsAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold text-sky-500'>Node.JS</h1>
                                <p className='text-gray-100'>Experienced in building server-side applications and APIs using Node.js for efficient back-end development.</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-5'>
                            <p className=' w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)]'><Lottie className='' animationData={MongoAnimation} /></p>

                            <p className='w-[80%]'>
                                <h1 className='text-2xl font-bold text-sky-500'>MongoDB</h1>
                                <p className='text-gray-100'>Proficient in working with MongoDB, a NoSQL database, for storing and retrieving data in web applications.</p>
                            </p>
                        </div>
                    </div>


                </div>
            </div>

    );
};

export default Skills;
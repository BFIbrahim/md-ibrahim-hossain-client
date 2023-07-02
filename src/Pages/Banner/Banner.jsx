import React from 'react';
import './Banner.css'
import Typewriter from 'typewriter-effect'
import Lottie from 'lottie-react'
import FacebookAnimation from '../../assets/Facebook logo animation.json'
import LinkedInAnimation from '../../assets/LinkedIn logo animation.json'
import GitHubAnimation from '../../assets/Github Animation.json'
import TwitterAnimation from '../../assets/twitter logo animation.json'
import { Link } from 'react-router-dom';


const fileURL = 'Md._Ibrahim_developer_resume.pdf'

const Banner = () => {


    const hundleDownloadResume = (url) => {
        const angcor = document.createElement('a')
        angcor.href = url
        angcor.setAttribute('download', "Md. Ibrahim developer resume.pdf")
        document.body.appendChild(angcor)
        angcor.click()
        angcor.remove()
    }
    return (
        <div>
            <div className='banner-wrap h-[100%]'>
                <div className='bg-[#0D0D0D] h-[100%]'>
                    <div className='md:flex items-center py-10 md:py-20 lg:py-20 text-center md:text-start lg:text-start'>

                        <div className='md:w-96'>
                            <img className='rounded-full w-36 md:w-60 lg:w-60 h-36 md:h-60 lg:h-60 mx-auto mt-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' src="https://i.ibb.co/sHngGM7/BF.jpg" alt="" />
                        </div>

                        <div className='md:w-[600px]'>
                            <p className='text-white  font-semibold mt-2'>Hi There...</p>
                            <h1 className='font-bold text-1xl  md:text-2xl lg:text-2xl text-sky-500 uppercase mt-2'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                        strings: ['I am Md. Ibrahim Hossain', 'I am a web developer', 'I am a MERN stack developer']
                                    }}
                                />
                            </h1>

                            <p className='text-white  mt-5 px-3 md:px-0 lg:px-0 mb-5'>Innovative MERN stack developer crafting dynamic web applications, merging creativity with expertise. Let's create exceptional digital experiences!</p>


                            <a onClick={() => { hundleDownloadResume(fileURL) }} href="#_" className=" relative px-5 py-2 font-medium text-white group shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]">
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-700 group-hover:bg-sky-700 group-hover:skew-x-12"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-sky-500 group-hover:bg-sky-500 group-hover:-skew-x-12"></span>
                                <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-sky-500 -rotate-12"></span>
                                <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-sky-500 -rotate-12"></span>
                                <span className="relative">Download Resume</span>
                            </a>
                        </div>

                        <div className='flex md:flex-col lg:flex-col w-36 mx-auto mt-5'>
                            <Link to='https://www.linkedin.com/in/md-ibrahim-hossain-6a7a5127b/' target="_blank"><Lottie className='w-8 hover:cursor-pointer' animationData={LinkedInAnimation} /></Link>

                            <Link to='https://github.com/BFIbrahim' target="_blank"><Lottie className='w-10 hover:cursor-pointer' animationData={GitHubAnimation} /></Link>

                            <Link to='https://www.facebook.com/profile.php?id=100093663434993' target="_blank"><Lottie className='w-10 hover:cursor-pointer' animationData={FacebookAnimation} /></Link>

                            <Link to='https://twitter.com/MdIbrahim361' target="_blank"><Lottie className='w-10 hover:cursor-pointer' animationData={TwitterAnimation} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-2 px-4 md:px-0 lg:px-0 md:gap-10 lg:gap-10'>
                <div className='text-center  p-2 md:p-5 lg:p-5 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)] rounded-md bg-sky-500'>
                    <img className='mx-auto w-10 h-10' src="https://i.ibb.co/dGCHtsG/coding-3.png" alt="" />
                    <h3 className='font-bold text-white'>Responsive Website Design</h3>
                </div>

                <div className='text-center  p-2 md:p-5 lg:p-5 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)] rounded-md bg-sky-500'>
                    <img className='mx-auto w-10 h-10' src="https://i.ibb.co/QF50hvJ/coding.png" alt="" />
                    <h3 className='font-bold text-white'>Website Development</h3>
                </div>

                <div className='text-center  p-2 md:p-5 lg:p-5 shadow-[0_10px_15px_rgba(8,_112,_184,_0.7)] rounded-md bg-sky-500'>
                    <img className='mx-auto w-10 h-10' src="https://i.ibb.co/mHxWQKn/coding-1.png" alt="" />
                    <h3 className='font-bold text-white'>Website Managment</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;
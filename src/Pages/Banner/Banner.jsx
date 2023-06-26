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
        <div className='banner-wrap md:h-96'>
            <div className='bg-[#000921] bg-opacity-80 md:h-96'>
                <div className='md:flex items-center py-10 md:py-20 lg:py-20 text-center md:text-start lg:text-start'>

                    <div className='w-96'>
                        <img className='rounded-full w-36 md:w-60 lg:w-60 h-36 md:h-60 lg:h-60 border-x-8 border-gray-400 mx-auto mt-5' src="https://i.postimg.cc/LXLfcW2x/Md-Ibrahim.jpg" alt="" />
                    </div>

                    <div className='md:w-[600px]'>
                        <p className='text-red-500 font-semibold mt-2'>Hi There...</p>
                        <h1 className='font-bold text-1xl  md:text-2xl lg:text-2xl text-white uppercase mt-2'>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    strings: ['I am Md. Ibrahim Hossain', 'I am a web developer', 'I am a MERN stack developer']
                                }}
                            />
                        </h1>

                        <p className='text-white mt-5 px-3 md:px-0 lg:px-0'>Innovative MERN stack developer crafting dynamic web applications, merging creativity with expertise. Let's create exceptional digital experiences!</p>

                       <button onClick={() => {hundleDownloadResume(fileURL)}} className='btn border-none text-white bg-red-500 mt-5 hover:bg-gray-300 hover:bg-opacity-40'>Download Resume</button>
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
    );
};

export default Banner;
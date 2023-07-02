import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import FacebookAnimation from '../../assets/Facebook logo animation.json'
import LinkedInAnimation from '../../assets/LinkedIn logo animation.json'
import GitHubAnimation from '../../assets/Github Animation.json'
import TwitterAnimation from '../../assets/twitter logo animation.json'

const Fotter = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <div>
            <footer className="md:flex text-neutral-content text-center">
                <div className='bg-[#1F2937] p-10 md:w-1/2'>
                    <div className=''>
                        <p>Md. Ibrahim Hossain<br />A Professional MERN stack developer</p>
                    </div>
                </div>
                <div className='bg-[#111827] md:w-1/2'>
                    <div className='p-10'>
                        <span className="footer-title text-sky-500">Social</span>
                        <p className='mb-4'>Contact Me In socila Media</p>
                        <div className="flex gap-4 w-52 mx-auto">
                            <Link to='https://www.linkedin.com/in/md-ibrahim-hossain-6a7a5127b/' target="_blank"><Lottie className='w-8 hover:cursor-pointer' animationData={LinkedInAnimation} /></Link>

                            <Link to='https://github.com/BFIbrahim' target="_blank"><Lottie className='w-10 hover:cursor-pointer' animationData={GitHubAnimation} /></Link>

                            <Link to='https://www.facebook.com/profile.php?id=100093663434993' target="_blank"><Lottie className='w-10 hover:cursor-pointer' animationData={FacebookAnimation} /></Link>

                            <Link to='https://twitter.com/MdIbrahim361' target="_blank"><Lottie className='w-10 hover:cursor-pointer' animationData={TwitterAnimation} /></Link>
                        </div>
                    </div>
                </div>
            </footer>


            <div className='text-center bg-gray-950 text-white py-1'>
                <p>Copyright © {year} - All right reserved by Md. Ibrahim Hossain</p>
            </div>
        </div>
    );
};

export default Fotter;
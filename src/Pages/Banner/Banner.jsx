import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-wrap md:h-96'>
            <div className='bg-[#000921] bg-opacity-80 md:h-96'>
                <div className='w-96 mx-auto py-10 md:py-24 lg:py-24 text-center'>
                    <img className='rounded-full w-40 h-40 mx-auto border-x-8 border-gray-400' src="https://i.postimg.cc/LXLfcW2x/Md-Ibrahim.jpg" alt="" />
                    <h1 className='text-2xl font-bold text-center text-white'>Md. Ibrahim Hossain</h1>
                    <p className='text-white text-center text-red-500 font-semibold'>Web Developer</p>
                    <button className='btn border-none text-white bg-red-500 mt-5 hover:bg-gray-300 hover:bg-opacity-40'>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
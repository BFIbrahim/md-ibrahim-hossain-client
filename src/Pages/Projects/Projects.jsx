import React from 'react';
import Lottie from 'lottie-react'
import Project from '../../assets/project.json'



const Projects = () => {
    return (
        <div className='bg-[#000921] text-center'>
            <h1 className=' font-bold text-4xl text-center pt-10 text-white'>My Recent Project</h1>
            <p className='text-center text-pink-500 font-bold mb-10'>-------------------------------------------------------</p>

            <div className='md:flex gap-10'>
                <div className='w-[35%] mx-auto mb-20'>
                    <Lottie animationData={Project} />
                </div>

                <div className='md:w-[50%] h-[300px] md:h-[400px] mx-auto shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                    <div class="h-[100%] overflow-auto">
                        <img className='h-[auto] w-[100%] block' src="https://i.postimg.cc/LsKmMf74/home.png" alt="Your Image" />
                    </div>
                </div>

            </div>

            <button onClick={() => { hundleDownloadResume(fileURL) }} className='btn border-none text-white bg-pink-600 mt-5 hover:bg-gray-300 hover:bg-opacity-40 mb-4'>View All Projects</button>
        </div>
    );
};

export default Projects;
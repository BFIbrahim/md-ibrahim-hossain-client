import React, { useEffect } from 'react';
import { FaPhoneSquareAlt, FaMailBulk, FaLocationArrow, FaArrowAltCircleRight } from 'react-icons/fa';

const fileURL = 'Md._Ibrahim_developer_resume.pdf'


const About = () => {

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
            <div id='about' className='md:flex justify-evenly items-center mt-10 gap-5'>
                <div data-aos="fade-up-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='md:w-[30%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                    <img className='md:w-[100%] rounded-md' src="https://i.postimg.cc/nhj55BM3/ibrahim.jpg" alt="" />
                </div>

                <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='md:w-[60%] p-4 md:p-0 lg:p-0'>
                    <h1 className='text-4xl font-semibold  mb-5 mt-5 text-white'>About Me...</h1>
                    <p className='text-white text-justify'>I am a passionate MERN stack developer, dedicated to creating efficient and user-friendly web applications. With a strong foundation in JavaScript, along with expertise in MongoDB, Express.js, React.js, and Node.js, I strive to deliver high-quality solutions that meet clients' needs. Let's turn your ideas into reality!</p>

                    <div className='md:flex gap-10 mb-10'>
                        <div className=''>
                            <p className=' text-white flex gap-2  items-center mt-5 '><FaArrowAltCircleRight className='text-2xl text-sky-500'></FaArrowAltCircleRight>Name: Md. Ibrahim Hossain</p>

                            <p className=' text-white flex gap-2  items-center mt-5 '><FaPhoneSquareAlt className='text-2xl text-sky-500 '></FaPhoneSquareAlt>Phone: +8801835-992202</p>




                        </div>

                        <div className=''>

                            <p className=' text-white flex gap-2  items-center mt-5'><FaLocationArrow className='text-2xl text-sky-500 '></FaLocationArrow>Location: Naogaon, Bangladesh</p>


                            <p className=' text-white flex gap-2  items-center mt-5'><FaMailBulk className='text-2xl text-sky-500 '></FaMailBulk>Email: mdibrahim361r@gmail.com</p>

                        </div>

                    </div>

                    <a href="#contact-form" class=" relative px-5 py-2 font-medium text-white me-10 group">
                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-700 group-hover:bg-sky-700 group-hover:skew-x-12"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-sky-500 group-hover:bg-sky-500 group-hover:-skew-x-12"></span>
                        <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-sky-500 -rotate-12"></span>
                        <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-sky-500 -rotate-12"></span>
                        <span class="relative">Contact Me</span>
                    </a>


                    <a onClick={() => { hundleDownloadResume(fileURL) }} href="#_" class=" relative px-5 py-2 font-medium text-white group">
                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-700 group-hover:bg-sky-700 group-hover:skew-x-12"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-sky-500 group-hover:bg-sky-500 group-hover:-skew-x-12"></span>
                        <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-sky-500 -rotate-12"></span>
                        <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-sky-500 -rotate-12"></span>
                        <span class="relative">Download Resume</span>
                    </a>

                </div>


            </div>
        </div>
    );
};

export default About;
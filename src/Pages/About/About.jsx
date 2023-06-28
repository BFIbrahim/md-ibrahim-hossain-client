import React, { useEffect } from 'react';
import { FaPhoneSquareAlt, FaMailBulk, FaLocationArrow, FaArrowAltCircleRight } from 'react-icons/fa';

const About = () => {

    return (
        <div>
            <div className='md:flex justify-evenly items-center mt-14 gap-5'>
                <div data-aos="fade-up-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='md:w-[30%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                    <img className='md:w-[100%] rounded-md' src="https://i.postimg.cc/nhj55BM3/ibrahim.jpg" alt="" />
                </div>

                <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='md:w-[60%] p-4 md:p-0 lg:p-0'>
                    <h1 className='text-4xl font-bold mb-5 mt-5'>About Me...</h1>
                    <p className='text-gray-600 text-justify'>I am a passionate MERN stack developer, dedicated to creating efficient and user-friendly web applications. With a strong foundation in JavaScript, along with expertise in MongoDB, Express.js, React.js, and Node.js, I strive to deliver high-quality solutions that meet clients' needs. Let's turn your ideas into reality!</p>

                    <div className='md:flex gap-10'>
                        <div className=''>
                            <p className=' text-gray-900 flex gap-2 font-semibold items-center mt-5 '><FaArrowAltCircleRight className='text-2xl text-pink-600 '></FaArrowAltCircleRight>Name: Md. Ibrahim Hossain</p>

                            <p className=' text-gray-900 flex gap-2 font-semibold items-center mt-5 '><FaPhoneSquareAlt className='text-2xl text-pink-600 '></FaPhoneSquareAlt>Phone: +8801835-992202</p>




                        </div>

                        <div className=''>

                            <p className=' text-gray-900 flex gap-2 font-semibold items-center mt-5'><FaLocationArrow className='text-2xl text-pink-600 '></FaLocationArrow>Location: Naogaon, Bangladesh</p>


                            <p className=' text-gray-900 flex gap-2 font-semibold items-center mt-5'><FaMailBulk className='text-2xl text-pink-600 '></FaMailBulk>Email: mdibrahim361r@gmail.com</p>

                        </div>

                    </div>

                    <button onClick={() => { hundleDownloadResume(fileURL) }} className='btn border-none text-white bg-pink-600 mt-5 hover:bg-gray-300 hover:bg-opacity-60 hover:text-black'>Contact Me</button>

                </div>


            </div>
        </div>
    );
};

export default About;
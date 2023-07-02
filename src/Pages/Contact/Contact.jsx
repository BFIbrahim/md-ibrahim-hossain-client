import React from 'react';

const Contact = () => {
    return (
        <div id='contact-form' className=' md:p-32'>

            <h1 className='uppercase text-2xl font-bold text-center mb-8 text-white border-b-2 border-sky-500 w-1/4 mx-auto pb-2'>Contat Me</h1>

            <div className='grid md:grid-cols-2 items-center'>
                <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='md:w-2/6 grid grid-cols-3 md:grid-cols-1'>
                    <div className='md:w-72 rounded-t-sm bg-gray-800 p-5 text-center shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]'>
                        <img className='w-14 h-14 mx-auto' src="https://i.ibb.co/8gqfm4q/telephone-1.png" alt="" />
                        <h1 className='text-[18px] font-semibold mt-4 text-white'>+8801835-992202</h1>
                    </div>
                    <div className='md:w-72 bg-sky-500 p-5 text-center shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]'>
                        <img className='w-14 h-14 mx-auto' src="https://i.ibb.co/Gk3k3zj/gmail-logo.png" alt="" />
                        <h1 className='text-[18px] font-semibold mt-4 text-white'>mdibrahim361r@gmail.com</h1>
                    </div>
                    <div className='md:w-72 rounded-b-sm bg-gray-800 p-5 text-center shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]'>
                        <img className='w-14 h-14 mx-auto' src="https://i.ibb.co/ygv9gzk/location-1.png" alt="" />
                        <h1 className='text-[18px] font-semibold mt-4 text-white'>Naogaon, Bangladesh</h1>
                    </div>
                </div>

                <div>
                    <div data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="mt-5 md:mt-0 lg:mt-0">
                        <div className="">
                            <div className="rounded-sm bg-gray-900 shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input border-gray-700 text-white bg-gray-900" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Message</span>
                                        </label>
                                        <textarea type="text" name="myTextInput" placeholder="Write your message here" className="input h-36 bg-gray-900 border-gray-700 text-white" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <a href="#_" className=" text-center relative px-5 py-2 font-medium text-white group">
                                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-700 group-hover:bg-sky-700 group-hover:skew-x-12"></span>
                                            <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-sky-500 group-hover:bg-sky-500 group-hover:-skew-x-12"></span>
                                            <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-sky-500 -rotate-12"></span>
                                            <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-sky-500 -rotate-12"></span>
                                            <span class="relative">Send</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
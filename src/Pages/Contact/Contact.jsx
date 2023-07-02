import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2qcw5a9', 'template_eu6jkse', form.current, 'bVUvZaTy4Tgu2FAh5')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your message successfully Sent to Md. Ibrahim',
                    showConfirmButton: false,
                    timer: 2500
                })
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact-form' className=' md:p-32'>

            <h1 className='uppercase md:text-2xl font-bold text-center mb-8 text-white border-b-2 border-sky-500 w-2/4 mx-auto pb-2'>Contat Me</h1>

            <div className='grid md:grid-cols-1 lg:grid-cols-2 items-center'>
                <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className='md:w-3/6 grid grid-cols-3 md:grid-cols-1 mb-14 mx-auto md:mx-auto lg:mx-0'>
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
                            <form ref={form} onSubmit={sendEmail} className="rounded-sm bg-gray-900 shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" name='from_name' placeholder="Your Name" className="input border-gray-700 text-white bg-gray-900" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="text" name='from_email' placeholder="email" className="input border-gray-700 text-white bg-gray-900" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Message</span>
                                        </label>
                                        <textarea type="text" name="message" placeholder="Write your message here" className="input h-36 bg-gray-900 border-gray-700 text-white" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type="submit" value="send" className='bg-sky-500 w-full btn border-none text-white hover:text-black' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
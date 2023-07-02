import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';




const Navigation = () => {

    const hundleAlert = (e) => {
        e.preventDefault()
        Swal.fire({
            icon: 'error',
            title: 'Comming Soon',
            text: 'No Blog Yet',
        })

    }

    return (
        <div className="navbar absolute z-10  md:max-w-6xl mx-auto" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-sky-500 '><a href='#about' className='hover:text-white hover:font-semibold'>About</a></li>
                        <li className='text-sky-500 '><a href='#project' className='hover:text-white hover:font-semibold'>Projects</a></li>
                        <li className='text-sky-500 '><a href='#skills' className='hover:text-white hover:font-semibold'>Skills</a></li>
                        <li className='text-sky-500 '><Link onClick={hundleAlert} className='hover:text-white hover:font-semibold'>Blog</Link></li>
                    </ul>
                </div>
                <img className='ps-5 w-12' src="https://i.postimg.cc/g0NXBD9d/layers.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-sky-500 '><a href='#about' className='hover:text-white hover:font-semibold'>About</a></li>
                    <li className='text-sky-500 '><a href='#project' className='hover:text-white hover:font-semibold'>Projects</a></li>
                    <li className='text-sky-500 '><a href='#skills' className='hover:text-white hover:font-semibold'>Skills</a></li>
                    <li className='text-sky-500 '><Link onClick={hundleAlert} className='hover:text-white hover:font-semibold'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="#contact-form" className=" relative px-5 py-2 font-medium text-white group shadow-[0_5px_20px_rgba(8,_112,_184,_0.7)]">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-700 group-hover:bg-sky-700 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-sky-500 group-hover:bg-sky-500 group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-sky-500 -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-sky-500 -rotate-12"></span>
                    <span className="relative">Contact Me</span>
                </a>
            </div>
        </div>
    );
};

export default Navigation;
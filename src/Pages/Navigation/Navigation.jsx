import React from 'react';
import { Link } from 'react-router-dom';


const fileURL = 'Md._Ibrahim_developer_resume.pdf'


const Navigation = () => {

    const hundleDownloadResume = (url) => {
        const angcor = document.createElement('a')
        angcor.href = url
        angcor.setAttribute('download', "Md. Ibrahim developer resume.pdf")
        document.body.appendChild(angcor)
        angcor.click()
        angcor.remove()
    }

    return (
        <div className="navbar fixed z-10  md:max-w-6xl mx-auto" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='hover:text-red-500 hover:font-semibold'>Home</Link></li>

                        <li><Link className='hover:text-red-500 hover:font-semibold'>About</Link></li>

                        <li><Link className='hover:text-red-500 hover:font-semibold'>Projects</Link></li>

                        <li><Link className='hover:text-red-500 hover:font-semibold'>Blog</Link></li>

                        <li><Link onClick={() => { hundleDownloadResume(fileURL) }} className='hover:text-red-500 hover:font-semibold'>Download Resume</Link></li>
                    </ul>
                </div>
                <img className='ps-5 w-12' src="https://i.postimg.cc/g0NXBD9d/layers.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-white'><Link className='hover:text-red-500 hover:font-semibold'>Home</Link></li>
                    <li className='text-white'><Link className='hover:text-red-500 hover:font-semibold'>About</Link></li>
                    <li className='text-white'><Link className='hover:text-red-500 hover:font-semibold'>Projects</Link></li>
                    <li className='text-white'><Link className='hover:text-red-500 hover:font-semibold'>Blog</Link></li>
                    <li className='text-white'><Link onClick={() => { hundleDownloadResume(fileURL) }} className='hover:text-red-500 hover:font-semibold'>Download Resume</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn border-none text-white bg-red-500 mt-5 hover:bg-gray-300 hover:bg-opacity-40'>Contact Me</button>
            </div>
        </div>
    );
};

export default Navigation;
import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;
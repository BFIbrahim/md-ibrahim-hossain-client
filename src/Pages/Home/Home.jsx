import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Fotter from '../Footer/Fotter';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;
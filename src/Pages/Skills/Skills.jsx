import React, { useRef, useState } from 'react';
import CounterUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Skills = () => {

    const [counterOn, setCounterON] = useState(false)



    return (
        <ScrollTrigger onEnter={() => { setCounterON(true) }} onExit={() => { setCounterON(false) }}>
            <div className='mt-24 mb-20'>
                <h1 className=' font-bold text-4xl text-center'>My Skilss</h1>
                <p className='text-center text-red-500 font-bold mb-10'>--------------------------------</p>
                <div>
                    <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>
                            <h1 className=' font-bold mt-2 mb-2'>HTML</h1>
                            <img className='w-16 mx-auto' src="https://i.postimg.cc/x1K6yG6H/html.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={90} duration={2} delay={0} />}
                                %</p>

                        </div>
                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>

                            <h1 className=' font-bold mt-2 mb-2'>CSS</h1>

                            <img className='w-16 mx-auto' src="https://i.postimg.cc/mrtHjBw9/css-3-1.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={80} duration={2} delay={0} />}
                                %</p>
                        </div>
                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>

                            <h1 className=' font-bold mt-2 mb-2'>Tailwind</h1>

                            <img className='w-16 mx-auto' src="https://i.postimg.cc/nhSdrS5F/Tailwind.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={85} duration={2} delay={0} />}
                                %</p>
                        </div>
                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>

                            <h1 className=' font-bold mt-2 mb-2'>Bootstrap</h1>

                            <img className='w-16 mx-auto' src="https://i.postimg.cc/90XTGCRv/Bootstrap.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={85} duration={2} delay={0} />}
                                %</p>
                        </div>
                    </div>

                    <div data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6'>

                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>
                            <h1 className=' font-bold mt-2 mb-2'>JavaScript</h1>
                            <img className='w-16 mx-auto' src="https://i.postimg.cc/4ynGF6w4/JS.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={60} duration={2} delay={0} />}
                                %</p>

                        </div>
                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>

                            <h1 className=' font-bold mt-2  mb-2'>React.js</h1>

                            <img className='w-16 mx-auto' src="https://i.postimg.cc/JzNqv9s0/React.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={60} duration={2} delay={0} />}
                                %</p>
                        </div>
                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>

                            <h1 className=' font-bold mt-2  mb-2'>Node.js</h1>

                            <img className='w-16 mx-auto' src="https://i.postimg.cc/hjjNSSmp/Nodejs.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={45} duration={2} delay={0} />}
                                %</p>
                        </div>
                        <div className='text-center shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md py-5 hover:bg-red-500 hover:text-white cursor-pointer'>

                            <h1 className=' font-bold mt-2 mb-2'>MongoDB</h1>

                            <img className='w-16 mx-auto' src="https://i.postimg.cc/G3Z3SN0Z/MongoDB.png" alt="" />

                            <p className=' font-bold mt-3 text-3xl' data-val='90'>
                                {counterOn && <CounterUp start={0} end={45} duration={2} delay={0} />}
                                %</p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>

    );
};

export default Skills;
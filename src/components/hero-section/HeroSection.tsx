'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';
import HeroText from './HeroText';
// import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
    const { scrollYProgress } = useScroll();
    const videoWidth = useTransform(scrollYProgress, [0, 0.05], ['50%', '100%']);
    const videoRadius = useTransform(scrollYProgress, [0, 0.05], ['240px', '0px']);
    const videoHeight = useTransform(scrollYProgress, [0, 0.05], ['100%', '200%']);
    const translateY = useTransform(scrollYProgress, [0, 0.05], ['0%', '70%']);
    const videoPadding = useTransform(scrollYProgress, [0, 0.05], [16, 0]);
    const translateYF = useTransform(scrollYProgress, [0, 0.05], ['0', '60vh']);
    const translateYSearch = useTransform(scrollYProgress, [0, 0.06], ['0', '60vh']);
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const featureHeight = useTransform(scrollYProgress, [0, 0.05], [43, 0]);

    return (
        <>
            {/* Large Desktop */}
            <div
                className='hidden xl:flex flex-col pt-6 w-full bg-primary h-[calc(100vh-88px)] mb-[60vh]'
            >
                <HeroText />
                <div className='grid grid-cols-2 px-6 pb-6 gap-6 flex-1 relative'>
                    <div className='absolute w-full h-full'>
                        <motion.video
                            autoPlay
                            muted
                            loop
                            style={{
                                objectFit: 'cover',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: videoWidth,
                                height: videoHeight,
                                padding: videoPadding,
                                borderRadius: videoRadius,
                                translateY: translateY,
                            }}
                        >
                            <source src="/hero/16x9.mp4" type="video/mp4" />
                        </motion.video>
                        <motion.div
                            className='absolute bottom-4 right-6 flex items-center rounded-[41px]
                            p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-50 group
                             hover:bg-black w-14 hover:w-[220px] duration-500 transition-all overflow-hidden'
                            style={{
                                translateY: translateYSearch,
                                // background: 'black',
                            }}
                        >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <span className='group-hover:scale-100 scale-0 duration-500 origin-right text-white text-nowrap' >View this showcase</span>
                        </motion.div>
                    </div>
                    <div className='flex flex-col justify-between text-bg-fc'>
                        <div className='body-2-regular'>
                            {/* (SCROLL) */}
                        </div>
                        <div className='hero-description'>
                            Provide innovative, high-quality <br /> visual advertising solutions with <br /> quick times.
                        </div>
                    </div>
                    <div className='h-full'>
                        <div className='w-full h-full relative'
                            style={{
                                overflow: 'visible'
                            }}
                        >
                        </div>
                    </div>
                </div>
                <motion.div
                    style={{
                        translateY: translateYF,
                        opacity: opacity,
                        height: featureHeight,
                    }}
                >
                    <Feature />
                </motion.div>
            </div>
        </>
    );
}

export default HeroSection;

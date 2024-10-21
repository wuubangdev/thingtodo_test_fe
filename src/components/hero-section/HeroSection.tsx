'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';
import HeroText from './HeroText';
// import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
    const { scrollYProgress } = useScroll();
    const videoWidth = useTransform(scrollYProgress, [0, 0.05], ['50%', '100%']);
    const videoRadius = useTransform(scrollYProgress, [0, 0.05], ['240px', '0px']);
    const videoHeight = useTransform(scrollYProgress, [0, 0.05], ['100%', '220%']);
    const translateY = useTransform(scrollYProgress, [0, 0.05], ['0%', '70%']);

    return (
        <>
            {/* Desktop */}
            <div
                className='hidden md:flex flex-col pt-6 w-full bg-[#fcfcfc] h-[calc(100vh-83px)] mb-[60vh]'
            >
                <HeroText />
                <div className='grid grid-cols-2 px-6 pb-6 gap-6 flex-1 relative'>
                    <div className='absolute w-full h-full bg-slate-500'>
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
                                padding: 16,
                                borderRadius: videoRadius,
                                translateY: translateY,
                            }}
                        >
                            <source src="/hero/16x9.mp4" type="video/mp4" />
                        </motion.video>
                    </div>
                    <div className='flex flex-col justify-between text-primary'>
                        <div className='body-2-regular'>
                            (SCROLL)
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
                <Feature />
            </div>
        </>
    );
}

export default HeroSection;

'use client'
import React, { useEffect, useState } from 'react';
import HeroText from './HeroText';
import HeroTextMobile from './HeroTextMobile';
import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const videoWidth = useTransform(scrollYProgress, [0, 0.1], ['40%', '100%']);
    const videoRadius = useTransform(scrollYProgress, [0, 0.1], ['240px', '0px']);
    return (
        <>
            {/* Desktop */}
            <div
                className='hidden md:block py-6 w-full relative'
                style={{ height: 'auto' }}
            >
                <HeroText />
                <div className='flex flex-col justify-end items-end sticky bottom-0 gap-4'>
                    <motion.video
                        className='sticky bottom-0 right-0 z-20 px-4'
                        autoPlay
                        muted
                        loop
                        style={{
                            width: videoWidth,
                            height: 'auto',
                            borderRadius: videoRadius,
                        }}
                    >
                        <source src="/hero/video-hero.mp4" type="video/mp4" />
                    </motion.video>
                    <Feature />
                </div>
            </div>
            {/* Mobile */}
            <div className='block md:hidden bg-primary'>
                <HeroTextMobile />
            </div>
        </>
    );
}

export default Hero;

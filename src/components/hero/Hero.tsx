'use client'
import React, { useEffect, useState } from 'react';
import HeroText from './HeroText';
import HeroTextMobile from './HeroTextMobile';
import { useScroll, useTransform, motion } from 'framer-motion';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const videoWidth = useTransform(scrollYProgress, [0, 0.1], ['40%', '100%']);
    return (
        <>
            {/* Desktop */}
            <div
                className='hidden md:block p-6 w-full relative'
                style={{ height: 'auto' }}
            >
                <HeroText />
                <div className='flex justify-end sticky bottom-4'>
                    <motion.video
                        className='sticky bottom-0 right-0 z-20'
                        autoPlay
                        muted
                        loop
                        style={{
                            width: videoWidth,
                            height: 'auto',
                            // transition: 'width 0.5s ease'
                        }}
                    >
                        <source src="/hero/video-hero.mp4" type="video/mp4" />
                    </motion.video>
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

'use client'
import Feature from '../feature/Feature';
import HeroText from './HeroText';
// import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {

    return (
        <>
            {/* Desktop */}
            <div
                className='hidden md:flex flex-col pt-6 w-full bg-[#fcfcfc] h-[calc(100vh-83px)]'
            >
                <HeroText />
                <div className='grid grid-cols-2 px-6 pb-6 gap-6 flex-1'>
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
                                borderRadius: 240,
                                overflow: 'hidden'
                            }}
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                style={{
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%'
                                }}
                            >
                                <source src="/hero/16x9.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <Feature />
            </div>
        </>
    );
}

export default HeroSection;

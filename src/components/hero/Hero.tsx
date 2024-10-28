'use client'
import HeroText from './HeroText';
import HeroTextMobile from './HeroTextMobile';
import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';
import HeroTextTab from './HeroTextTab';
// import { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const videoWidth = useTransform(scrollYProgress, [0, 0.09], ['50%', '100%']);
    const videoWidthTab = useTransform(scrollYProgress, [0, 0.08], ['400px', '805px']);
    const videoWidthMo = useTransform(scrollYProgress, [0, 0.04], ['200px', '400px']);
    const videoRadius = useTransform(scrollYProgress, [0, 0.04], ['120px', '0px']);
    const padding = useTransform(scrollYProgress, [0, 0.08], ['16px', '0px']);
    const videoTranslateY = useTransform(scrollYProgress, [0, 0.08], ['0px', '43px']);

    return (
        <>
            {/* Desktop */}
            <div
                className='hidden xl:hidden lg:block sm:hidden pt-6 pb-[43px] w-full relative bg-[#fcfcfc]'
                style={{ height: 'auto' }}
            >
                <HeroText />
                <div className='flex flex-col justify-end items-end sticky bottom-0'
                >
                    {/* Desktop */}
                    <div className='relative lg:flex md:hidden sm:hidden 2xl:hidden justify-end'>
                        <motion.video
                            className='z-20'
                            autoPlay
                            muted
                            loop
                            style={{
                                width: videoWidth,
                                // height: 300,
                                borderRadius: videoRadius,
                                objectFit: 'cover',
                                padding: padding,
                                translateY: videoTranslateY
                            }}
                        >
                            <source src="/hero/16x9.mp4" type="video/mp4" />
                        </motion.video>
                        <motion.div
                            className='absolute bottom-4 right-6 flex items-center rounded-[41px]
                            p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-30 group
                             hover:bg-black w-14 hover:w-[220px] duration-500 transition-all overflow-hidden'
                            style={{
                                translateY: videoTranslateY,
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
                    <motion.div
                        className='w-full'
                        style={{
                            translateY: videoTranslateY,
                        }}
                    >
                        <Feature />
                    </motion.div>
                </div>
            </div>
            {/* Tablet */}
            <div
                className='lg:hidden md:block hidden xl:hidden pt-6 pb-[43px] w-full relative bg-[#fcfcfc]'
                style={{ height: 'auto' }}
            >
                <HeroTextTab />
                <div className='sticky w-full bottom-0  '
                >
                    {/* Tablet */}
                    <div className='relative w-full'>
                        <motion.video
                            className='z-20'
                            autoPlay
                            muted
                            loop
                            style={{
                                width: '100%',
                                height: videoWidthTab,
                                borderRadius: videoRadius,
                                objectFit: 'cover',
                                padding: padding,
                                translateY: videoTranslateY,
                            }}
                        >
                            <source src="/hero/1x1.mp4" type="video/mp4" />

                        </motion.video>
                        <motion.div
                            className='absolute bottom-4 right-6 flex items-center rounded-[41px]
                            p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-50 group
                             hover:bg-black w-14 hover:w-[220px] duration-500 transition-all overflow-hidden'
                            style={{
                                translateY: videoTranslateY,
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
                    <motion.div
                        className='w-full'
                        style={{
                            translateY: videoTranslateY,
                        }}
                    >
                        <Feature />
                    </motion.div>
                </div>
            </div>
            {/* Mobile */}
            <div className='block relative md:hidden bg-primary h-[calc(100vh-64px)]'>
                <HeroTextMobile />
                <div className='absolute w-full bottom-0 z-10'>
                    <div className='relative w-full'>
                        <motion.video
                            className='z-20'
                            autoPlay
                            muted
                            loop
                            style={{
                                width: '100%',
                                height: videoWidthMo,
                                borderRadius: videoRadius,
                                objectFit: 'cover',
                                padding: padding,
                            }}
                        >
                            <source src="/hero/16x9.mp4" type="video/mp4" />

                        </motion.video>
                        <motion.div
                            className='absolute bottom-4 right-6 flex items-center rounded-[41px]
                            p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-50 group
                             hover:bg-black w-14 hover:w-[220px] duration-500 transition-all overflow-hidden'
                            style={{
                                translateY: videoTranslateY,
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
                    <Feature />
                </div>
            </div>
        </>
    );
}

export default Hero;

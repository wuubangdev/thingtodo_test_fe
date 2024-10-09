'use client'
import React, { useRef } from 'react';
import HeroText from './HeroText';
import Image from 'next/image';
import HeroTextMobile from './HeroTextMobile';


const Hero = () => {
    return (
        <>
            {/* Desktop */}
            <div className='hidden md:block p-6 w-full overflow-hidden relative'>
                <HeroText />
                <div
                    className='flex justify-center w-1/2 absolute bottom-6 right-6'
                    onWheel={(e) => {
                        e.preventDefault();
                        console.log(123)
                    }}
                >
                    <Image
                        alt='hero-video'
                        src={'/hero/hero_image.jpeg'}
                        width={668}
                        height={290}
                        style={{
                            width: '80%',
                            height: 'auto',
                        }}
                        className='rounded-l-[150px] rounded-r-[150px] cursor-all-scroll'
                    />
                    <div
                        className='rounded-full bg-slate-500 p-2 absolute bottom-6 right-6 cursor-pointer hover:opacity-70 text-white hover:text-primary duration-500'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='block md:hidden bg-primary'>
                <HeroTextMobile />
            </div>
        </>

    )
}

export default Hero
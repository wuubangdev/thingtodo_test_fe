import React from 'react'
import { useScroll, useTransform, motion } from 'framer-motion';
import HeroTextTab from './HeroTextTab';
import Feature from '../feature/Feature';

const HeroTablet = (props: { hero: IHero }) => {
    const { hero } = props;
    const { scrollYProgress } = useScroll();
    const padding = useTransform(scrollYProgress, [0, 0.02], ['16px', '0px']);
    const videoHeight = useTransform(scrollYProgress, [0, 0.03, 0.08, 0.2], ['40%', '100%', '100%', '100%']);
    const videoWidth = useTransform(scrollYProgress, [0, 0.03, 0.08, 0.2], ['100%', '100%', '100%', '100%']);
    const radius = useTransform(scrollYProgress, [0, 0.03], ['40px', '0px']);

    const handleClick = () => {
        // Mở link trong tab mới
        window.open('https://fb.watch/vyHzMqrSNM/', '_blank');
    };
    return (
        <div
            className='lg:hidden md:block hidden xl:hidden pt-6 w-full relative bg-primary'
            style={{ height: 'auto' }}
        >
            <HeroTextTab hero={hero} />
            <div className='w-full'>
                <div className='relative w-full h-[200vh]'>
                    <div className='text-white sticky top-0 h-[100vh] flex flex-col'>
                        <div className='flex-1 flex flex-col'>
                            <div className='flex-1 relative'>
                                <div className='absolute w-full h-full'
                                >
                                    <motion.video
                                        autoPlay
                                        muted
                                        loop
                                        style={{
                                            width: videoWidth,
                                            height: videoHeight,
                                            borderRadius: radius,
                                            objectFit: 'cover',
                                            padding: padding,
                                            position: 'absolute',
                                            top: '0',
                                            border: 'none'
                                        }}
                                        transition={{
                                            ease: 'easeIn'
                                        }}
                                    >
                                        <source src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${hero.videoTablet}`} type="video/webm" />
                                    </motion.video>
                                </div>
                                <div
                                    className='absolute bottom-6 right-6 flex items-center rounded-[41px]
                                     p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-50 group
                                     hover:bg-black w-14 hover:w-[220px] duration-500 transition-all overflow-hidden'
                                    onClick={() => handleClick()}
                                >
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </div>
                                    <span className='group-hover:scale-100 scale-0 duration-500 origin-right text-white text-nowrap' >View this showcase</span>
                                </div>
                            </div>
                            <Feature />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroTablet;
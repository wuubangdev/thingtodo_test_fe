'use client'
import HeroText from './HeroText';
import HeroTextMobile from './HeroTextMobile';
import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const videoWidth = useTransform(scrollYProgress, [0, 0.05], ['40%', '100%']);
    const videoRadius = useTransform(scrollYProgress, [0, 0.05], ['240px', '0px']);
    const padding = useTransform(scrollYProgress, [0, 0.05], ['16px', '0px']);
    const videoTranslateY = useTransform(scrollYProgress, [0, 0.05], ['0px', '53px']);

    return (
        <>
            {/* Desktop */}
            <div
                className='hidden md:block py-6 w-full relative'
                style={{ height: 'auto' }}
            >
                <HeroText />
                <div className='flex flex-col justify-end items-end sticky bottom-0'
                >
                    <motion.video
                        className='sticky bottom-0 right-0 z-20'
                        autoPlay
                        muted
                        loop
                        style={{
                            width: videoWidth,
                            height: 'auto',
                            borderRadius: videoRadius,
                            objectFit: 'cover',
                            padding: padding,
                            translateY: videoTranslateY
                        }}
                    >
                        <source src="/hero/video-hero.mp4" type="video/mp4" />
                    </motion.video>
                    {/* <div className='relative -top-10 -left-6 flex items-center rounded-[41px] p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-50 group hover:bg-black duration-500 min-w-[50px] group-hover:min-w-[200px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <span className='opacity-0 w-0 duration-500 group-hover:opacity-100 group-hover:w-auto hidden group-hover:block'>View this showcase</span>
                    </div> */}
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
            <div className='block md:hidden bg-primary'>
                <HeroTextMobile />
            </div>
        </>
    );
}

export default Hero;

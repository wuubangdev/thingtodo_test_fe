import React, { useRef, useState } from 'react'
import HeroTextMobile from './HeroTextMobile'
// import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';
import ReactPlayer from 'react-player';


const HeroMobile = () => {
    // const { scrollYProgress } = useScroll();
    const containerRef = useRef<HTMLDivElement>(null);
    // const padding = useTransform(scrollYProgress, [0, 0.02], ['16px', '16px']);
    // const videoHeight = useTransform(scrollYProgress, [0, 0.03, 0.08, 0.2], ['40%', '100%', '100%', '100%']);
    // const videoWidth = useTransform(scrollYProgress, [0, 0.03, 0.08, 0.2], ['100%', '100%', '130%', '130%']);
    // const radius = useTransform(scrollYProgress, [0, 0.03], ['40px', '40px']);


    const [checkClick, setCheckClick] = useState<number>(1);


    const handleClick = () => {
        // Mở link trong tab mới
        if (checkClick === 1) {
            setCheckClick(checkClick + 1);
        }
        if (checkClick === 2) {
            setCheckClick(checkClick - 1);
            window.open('https://fb.watch/vyHzMqrSNM/', '_blank');
        }
    };
    return (
        <div
            ref={containerRef}
            // className='flex flex-col md:hidden bg-primary h-[calc(100vh-72px)] mb-[calc(130vh)] relative'
            className='flex flex-col md:hidden bg-primary relative gap-4'
        >
            <HeroTextMobile />
            <div className='px-4'>
                <div className='relative'
                    style={{
                        position: 'relative',
                        paddingTop: '100%', // Tỷ lệ khung hình 1:1
                        borderRadius: '40px',
                        overflow: 'hidden',
                    }}
                >
                    {/* <motion.video
                    autoPlay
                    muted
                    loop
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: radius,
                        objectFit: 'cover',
                        padding: padding,
                        border: 'none'
                    }}
                    transition={{
                        ease: 'easeIn'
                    }}
                >
                    <source src="/hero/1x1.mp4" type="video/mp4" />
                </motion.video> */}
                    <ReactPlayer
                        url="https://www.youtube.com/embed/MhFGl3xp_4k?modestbranding=1&controls=0&rel=0" // Sử dụng URL trực tiếp mà không cần tham số không cần thiết
                        playing={true}       // Tự động phát
                        muted={true}         // Tắt âm thanh
                        controls={false}     // Ẩn điều khiển
                        loop={true}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                    <div
                        className='absolute bottom-4 right-4 flex items-center justify-center rounded-[41px]
                                     p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-50 group
                                     hover:bg-black hover:w-[220px] w-10 h-10 duration-500 transition-all overflow-hidden'
                        onClick={() => handleClick()}
                    >
                        <div className='absolute group-hover:left-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <span className='group-hover:scale-100 scale-0 duration-500 origin-right text-white text-nowrap' >View this showcase</span>
                    </div>
                </div>
            </div>
            <Feature />
            {/* <div className='w-full relative top-[calc(-100vh-72px)]'>
                <div className='relative w-full h-[270vh]'>
                    <div className='absolute top-0 left-0 w-full h-1/2 bg-primary -z-10'></div>
                    <div className='absolute top-0 left-0 w-full h-full bg-[#f8f8f8] -z-10'></div>
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
                                            bottom: '0px',
                                            border: 'none'
                                        }}
                                        transition={{
                                            ease: 'easeIn'
                                        }}
                                    >
                                        <source src="/hero/9x16.mp4" type="video/mp4" />
                                    </motion.video>
                                </div>
                                <div
                                    className='absolute bottom-7 right-7 flex items-center rounded-[41px]
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
                        </div>
                        <Feature />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default HeroMobile
import React, { useEffect, useRef, useState } from 'react'
import HeroTextMobile from './HeroTextMobile'
import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';


const HeroMobile = () => {
    const { scrollYProgress } = useScroll();
    const { scrollY } = useScroll();
    const containerRef = useRef<HTMLDivElement>(null);
    const padding = useTransform(scrollYProgress, [0, 0.02], ['16px', '0px']);
    const videoHeight = useTransform(scrollYProgress, [0, 0.03, 0.08, 0.2], ['100%', '200%', '260%', '260%']);
    const videoWidth = useTransform(scrollYProgress, [0, 0.03, 0.08, 0.2], ['100%', '100%', '130%', '130%']);
    const translate = useTransform(scrollYProgress, [0, 0.04, 0.08], ['0px', '0px', '32px']);
    const translateF = useTransform(scrollYProgress, [0, 0.04, 0.08], ['0px', '100px', '200px']);
    const opacity = useTransform(scrollYProgress, [0, 0.01], ['1px', '0']);
    const radius = useTransform(scrollYProgress, [0, 0.03], ['40px', '0px']);
    const containerHeight = containerRef.current?.offsetHeight || 0;


    // Sử dụng useTransform để giới hạn y trong khoảng chiều cao của container
    const yTransform = useTransform(
        scrollY,
        [0, containerHeight],
        [0, containerHeight / 2] // Giảm giá trị này để làm cuộn chậm trong khoảng này
    );

    // const [checkClick, setCheckClick] = useState<number>(1);


    // const handleClick = () => {
    //     // Mở link trong tab mới
    //     if (checkClick === 1) {
    //         setCheckClick(checkClick + 1);
    //     }
    //     if (checkClick === 2) {
    //         setCheckClick(checkClick - 1);
    //         window.open('https://fb.watch/vyHzMqrSNM/', '_blank');
    //     }
    // };
    return (
        <div
            ref={containerRef}
            className='flex flex-col md:hidden bg-primary h-[calc(100vh-72px)] mb-[58vh]'
        >
            <HeroTextMobile />
            <motion.div className='w-full flex-1 flex flex-col relative'
                style={{ y: yTransform }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                }}
            >
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
                                translateY: translate,
                                borderRadius: radius,
                                objectFit: 'cover',
                                padding: padding,
                            }}
                            transition={{
                                ease: 'easeIn'
                            }}
                            className='sticky bottom-0 z-10'
                        >
                            <source src="/hero/9x16.mp4" type="video/mp4" />
                        </motion.video>
                    </div>
                </div>
                {/* <motion.div
                    className='absolute bottom-[76px] right-7 flex items-center rounded-[41px]
                        p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-10 group
                         hover:bg-black w-14 hover:w-[220px] duration-500 transition-all overflow-hidden'
                    onClick={() => handleClick()}
                    style={{
                        display: btnDisplay
                    }}
                >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <span className='group-hover:scale-100 scale-0 duration-500 origin-right text-white text-nowrap' >View this showcase</span>
                </motion.div> */}
                <motion.div
                    style={{
                        translateY: translateF,
                        opacity: opacity,
                    }}
                >
                    <Feature />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default HeroMobile
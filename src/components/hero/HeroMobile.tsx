import React, { useRef } from 'react'
import HeroTextMobile from './HeroTextMobile'
import { useScroll, useTransform, motion } from 'framer-motion';
import Feature from '../feature/Feature';


const HeroMobile = () => {
    const { scrollYProgress } = useScroll();
    const { scrollY } = useScroll();
    const containerRef = useRef<HTMLDivElement>(null);
    const padding = useTransform(scrollYProgress, [0, 0.09], ['16px', '0px']);
    const videoHeight = useTransform(scrollYProgress, [0, 0.09], ['100%', '200%']);
    const radius = useTransform(scrollYProgress, [0, 0.09], ['40px', '0px']);
    const containerHeight = containerRef.current?.offsetHeight || 0;

    // Sử dụng useTransform để giới hạn y trong khoảng chiều cao của container
    const yTransform = useTransform(
        scrollY,
        [0, containerHeight],
        [0, containerHeight / 2] // Giảm giá trị này để làm cuộn chậm trong khoảng này
    );
    return (
        <div
            ref={containerRef}
            className='flex flex-col md:hidden bg-primary h-[calc(100vh-72px)]'
        >
            <HeroTextMobile />
            <motion.div className='w-full flex-1 flex flex-col relative'

                style={{ y: yTransform }}
                transition={{
                    type: "spring",
                    damping: 0,    // Giảm hơn nữa để làm chuyển động chậm hơn
                    stiffness: 10,  // Giảm stiffness để cuộn mượt hơn
                    // mass: 0.5       
                }}
            >
                <div className='flex-1 relative'>
                    <div className='absolute w-full h-full '>
                        <motion.video
                            autoPlay
                            muted
                            loop
                            style={{
                                width: '100%',
                                height: videoHeight,
                                borderRadius: radius,
                                objectFit: 'cover',
                                padding: padding,
                            }}
                            className='absolute bottom-0'
                        >
                            <source src="/hero/1x1.mp4" type="video/mp4" />
                        </motion.video>
                        <motion.div
                            className='absolute bottom-6 right-6 flex items-center rounded-[41px]
                            p-4 gap-2 text-white bg-black-blur cursor-pointer border-3-regular z-50 group
                             hover:bg-black w-14 hover:w-[220px] duration-500 transition-all overflow-hidden'
                        >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <span className='group-hover:scale-100 scale-0 duration-500 origin-right text-white text-nowrap' >View this showcase</span>
                        </motion.div>
                    </div>
                </div>
                <Feature />
            </motion.div>
        </div>
    )
}

export default HeroMobile
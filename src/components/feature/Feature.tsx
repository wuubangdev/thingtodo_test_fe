import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const items: string[] = [
    'KEY VISUAL',
    'PACKAGING',
    'DIGITAL ASSETS',
    'POSM',
    'TVC',
]

const Feature = () => {
    const duplicatedItems = [...items, ...items]; // Nhân đôi các mục

    return (
        <Marquee
            speed={50}
            direction='left'
            pauseOnHover={true}
            loop={0} // Số lần lặp lại. Sử dụng `0` để lặp vô hạn.
            style={{ cursor: 'pointer' }}
        >
            <div className='md:bg-primary border-none bg-primary-trans md:text-white text-primary flex gap-2 justify-between'>
                {duplicatedItems.map((item, index) => (
                    <div key={item} className='flex gap-2 text-2xl items-center justify-evenly'>
                        <p className='text-nowrap'>{item}</p>
                        <div className='h-1/2 md:block hidden'>
                            <Image
                                alt='shaking'
                                src={'/hero/Mobile_shaking.svg'}
                                width={17}
                                height={17}
                                style={{
                                    width: "auto",
                                    height: "100%"
                                }}
                            />
                        </div>
                        <div className='md:hidden flex'>
                            <Image
                                alt='shaking'
                                src={'/hero/mobile_feature_icon.svg'}
                                width={17}
                                height={17}
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Marquee>
    )
}

export default Feature

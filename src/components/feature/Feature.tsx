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
    const duplicatedItems = [...items, ...items, ...items, ...items]; // Nhân đôi các mục

    return (
        <Marquee
            speed={50}
            direction='left'
            pauseOnHover={true}
            loop={0} // Số lần lặp lại. Sử dụng `0` để lặp vô hạn.
            style={{ cursor: 'pointer' }}
            className='md:bg-primary pt-2 pb-2 px-4'
        >
            <div className='md:bg-primary bg-primary-trans md:text-white text-primary flex gap-2 pr-2'>
                {duplicatedItems.map((item, index) => (
                    <div key={index} className='flex gap-2 subtitle-3-medium items-center'>
                        <p className='text-nowrap pb-1'>{item}</p>
                        <div className='md:block hidden'>
                            <Image
                                alt='shaking'
                                src={'/hero/Mobile_shaking.svg'}
                                width={17}
                                height={17}
                                style={{
                                    width: "17px",
                                    height: "17px"
                                }}
                                loading="lazy"
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
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Marquee>
    )
}

export default Feature

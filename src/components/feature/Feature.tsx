import { li } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

const items: string[] = [
    'KEY VISUAL',
    'PACKAGING',
    'DIGITAL ASSETS',
    'POSM',
    'TVC',
]

const Feature = () => {
    return (
        <div className='md:bg-primary bg-primary-trans md:text-white text-primary flex gap-2 justify-between'>
            {items && items.map((item, index) => (
                <div key={index} className='flex gap-2 text-2xl items-center justify-evenly'>
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
    )
}

export default Feature
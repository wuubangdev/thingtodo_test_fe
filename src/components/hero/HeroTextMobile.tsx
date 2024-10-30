import Image from 'next/image'
import React from 'react'

const HeroTextMobile = () => {
    return (
        <>
            <div className='pt-12 pb-8'>
                <div className='relative px-4'>
                    <div className='w-full'>
                        <Image
                            alt='hero-mobile-text'
                            src={'/hero/herotext_mob_wh.svg'}
                            width={52}
                            height={52}
                            style={{
                                width: "100%",
                                height: "auto"
                            }}
                            loading="lazy"
                        />
                    </div>
                    <div className='flex justify-between text-[#FDC6B7] mt-10'>
                        <p className='body-2-medium '>
                            Provide innovative, high-quality visual advertising solutions with quick times.
                        </p>
                        <p className='body-3-regular pt-1'>
                            {/* (SCROLL) */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroTextMobile
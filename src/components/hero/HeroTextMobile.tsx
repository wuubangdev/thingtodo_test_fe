import Image from 'next/image'
import React from 'react'

const HeroTextMobile = () => {
    return (
        <>
            <div className='pt-12 pb-8'>
                <div className='relative px-4'>
                    <div className=' text-[#FEE3DC] text-[68px] leading-[68px] font-sans font-bold'>
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
                    </div>
                    <div className=' text-white mt-44 px-2 flex  gap-10 items-start'>
                        <p className='body-2-medium text-[#FDC6B7]'>
                            Provide innovative, high-quality visual advertising solutions with quick times.
                        </p>
                        <p className='body-3-regular text-[#FDC6B7]'>
                            (SCROLL)
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroTextMobile
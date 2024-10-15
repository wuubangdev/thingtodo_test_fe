import Image from 'next/image'
import React from 'react'
const list: string[] = ['Create', 'Make', 'Build', 'Design',]

const HeroText = () => {
    return (
        <>
            <div className='py-3'>
                <div className='relative px-6'>
                    <div className='absolute left-0 right-0 -top-4'>
                        <ul className='flex justify-between w-full px-4 '>
                            {list && list.map((item, index) => (
                                <li
                                    key={index}
                                    className='border-gradient cursor-pointer text-secondary 
                                    subtitle-2-medium hover:-rotate-6 duration-300
                                    '
                                    style={{
                                        background: '#FFEEEA99',
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=' text-primary text-[9rem] leading-[9rem] font-semibold'>
                        <div className='flex flex-wrap gap-x-6 items-center justify-start'>
                            <div className='flex gap-8 justify-between'>
                                <Image
                                    alt='shaking'
                                    src={'/hero/awesomes.svg'}
                                    width={124}
                                    height={124}
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }}
                                />
                                <Image
                                    alt='shaking'
                                    src={'/hero/stuffs.svg'}
                                    width={124}
                                    height={124}
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div>T</div>
                            <div className='h-full move-top-infinite'>
                                <Image
                                    alt='shaking'
                                    src={'/hero/Shaking.svg'}
                                    width={124}
                                    height={124}
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }}
                                />
                            </div>
                            <div>GETHER</div>
                        </div>
                    </div>
                    <div className=' text-primary'>
                        <div className='text-custom-xl mt-6'>
                            (SCROLL)
                        </div>
                        <div className='text-custom-content mt-24 font-medium'>
                            Provide innovative, high-quality <br /> visual advertising solutions with <br /> quick times.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroText
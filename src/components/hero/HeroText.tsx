import Image from 'next/image'
import React from 'react'
const list: string[] = ['Create', 'Make', 'Build', 'Design',]

const HeroText = () => {
    return (
        <>
            <div className='py-3'>
                <div className='relative px-6'>
                    <div className='absolute left-0 right-0 -top-2'>
                        <ul className='flex justify-between w-full '>
                            {list && list.map((item, index) => (
                                <li
                                    key={index}
                                    className='gradient-border cursor-pointer text-secondary text-custom-content px-6 py-1 hover:-rotate-6 duration-300'
                                    style={{
                                        background: '#FFEEEA99',
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=' text-primary text-[9rem] leading-[9rem]'>
                        <div className='flex flex-wrap gap-x-6 items-center justify-start'>
                            <div>
                                AWESOME
                            </div>
                            <div className='h-full'>
                                <svg width="69" height="74" viewBox="0 0 69 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M68.5251 34.7394V39.0104L34.126 73.4095L30.2013 69.3694L59.5213 40.2225V39.703H0.117676V33.9314H59.5213V33.4696L30.2013 4.26502L34.126 0.224854L68.5251 34.7394Z" fill="#FA4616" />
                                </svg>
                            </div>
                            <div>STUFFS</div>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div>T</div>
                            <div className='h-full'>
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
                        <div className='text-custom-xl mt-12'>
                            (SCROLL)
                        </div>
                        <div className='text-custom-content mt-36'>
                            Provide innovative, high-quality <br /> visual advertising solutions with <br /> quick times.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroText
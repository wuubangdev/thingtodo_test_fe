import Image from 'next/image'
import React from 'react'
const list: string[] = ['Create', 'Make', 'Build', 'Design',]

const HeroTextTab = () => {
    return (
        <>
            <div className='py-3'>
                <div className='relative px-6 lg:pb-6 flex flex-col gap-4'>
                    <div className='absolute left-0 right-0 -top-6'>
                        <ul className='flex justify-between w-full px-4 '>
                            {list && list.map((item, index) => (
                                <li
                                    key={index}
                                    className='border-gradient cursor-pointer text-secondary 
                                    subtitle-2-medium ring-button
                                    '
                                    style={{
                                        background: '#FFEEEA99',
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className='w-full lg:hidden md:block'>
                            <Image
                                alt='shaking'
                                src={'/hero/herotext_tab_white.svg'}
                                width={717}
                                height={368}
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className=' text-white flex-1 mt-7 mb-8'>
                        <div className='text-custom-content font-medium'>
                            Provide innovative, high-quality <br /> visual advertising solutions with <br /> quick times.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroTextTab;
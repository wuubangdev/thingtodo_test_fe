import Image from 'next/image'
import React from 'react'
const list: string[] = ['Create', 'Make', 'Build', 'Design',]

const HeroText = (props: { hero: IHero }) => {
    const { hero } = props;
    return (
        <>
            <div className='py-3'>
                <div className='relative px-6 lg:pb-6 h-[84vh] flex flex-col'>
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
                        <div className='w-full lg:block md:hidden'>
                            <Image
                                alt='shaking'
                                src={'/hero/hero_text_white.svg'}
                                width={124}
                                height={124}
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className=' text-white flex-1 flex flex-col'>
                        <div className='text-custom-xl mt-6 mb-auto'>
                            {/* (SCROLL) */}
                        </div>
                        <div className='text-custom-content mt-24 font-medium sticky bottom-12'>
                            {hero.description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroText;
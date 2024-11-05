'use client'
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useContactContext } from '../context/ContactContext';

interface IStyleNav {
    isPrimary: boolean;
}

const Navbar = ({ isPrimary }: IStyleNav) => {
    const { setIsContactOpen } = useContactContext();


    return (
        <>
            <div>
                {/* Desktop */}
                <div
                    className={`hidden md:grid grid-cols-2 items-center ${isPrimary ? 'text-bg-fc bg-primary' : 'text-black bg-bg-fc/70'}   text-custom-xl py-5 px-6 gap-6`}
                    style={{
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <div className='flex items-center gap-6'>
                        <Link href={'/'} className='w-[115px] 2xl:w-[105] h-full'>
                            {
                                isPrimary ?
                                    <Image
                                        alt='nav-logo'
                                        src={'/logo/THINGTODO-WHITE.svg'}
                                        width={78}
                                        height={32}
                                        style={{ width: '100%', height: '100%' }}
                                        loading="lazy"
                                    />
                                    :
                                    <Image
                                        alt='nav-logo'
                                        src={'/logo/THINGTODO-BLACK.svg'}
                                        width={78}
                                        height={32}
                                        style={{ width: '100%', height: 'auto' }}
                                        loading="lazy"
                                    />
                            }
                        </Link>
                        {/* <div className='font-Jakarta-sans font-normal xl:text-xl 2xl:text-2xl'>
                            {isPrimary ? '(Creative Agency)' : ''}
                        </div> */}
                    </div>
                    <div className='flex justify-between items-center'>
                        <Menu isPrimary={isPrimary} isSecondary={false} />
                        <div>
                            <div
                                className='cursor-pointer group text-underline2'
                                onClick={() => setIsContactOpen(true)}
                            >
                                <div className='pb-2 pt-2 body-2-medium flex flex-nowrap gap-2 items-center'>
                                    <span className='translate-x-6 group-hover:translate-x-0 duration-500'>Let&apos;s collab</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 group-hover:scale-100 scale-0 duration-500 rotate-180"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className={`grid md:hidden  grid-cols-2 p-4  ${isPrimary ? 'text-white bg-primary' : 'text-black bg-white'}`}>
                    <div className='flex items-center gap-6'>
                        <Link href={'/'} className='h-10'>
                            {isPrimary ?
                                <Image
                                    alt=''
                                    src={'/logo/THINGTODO-WHITE.svg'}
                                    width={78}
                                    height={32}
                                    style={{ width: 'auto', height: '100%' }}

                                    loading="lazy"
                                />
                                :
                                <Image
                                    alt='nav-logo'
                                    src={'/logo/THINGTODO-BLACK.svg'}
                                    width={78}
                                    height={32}
                                    style={{ width: 'auto', height: '40px' }}
                                    loading="lazy"
                                />
                            }
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
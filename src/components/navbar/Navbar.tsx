import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

interface IStyleNav {
    isPrimary: boolean;
}

const Navbar = ({ isPrimary }: IStyleNav) => {
    return (
        <div
            style={{
                position: isPrimary ? 'sticky' : 'unset',
                zIndex: 99999,
                top: 0,
            }}
        >
            {/* Desktop */}
            <div
                className={`hidden md:grid grid-cols-2 items-center ${isPrimary ? 'text-primary' : 'text-black'} bg-bg-fc/70  text-custom-xl py-4 px-6 gap-6`}

            >
                <div className='flex items-center gap-6'>
                    <Link href={'/'} className='md:w-[16%] h-auto'>
                        {isPrimary ?
                            <Image
                                alt='nav-logo'
                                src={'/logo/THINGTODO-TANGERINE.svg'}
                                width={78}
                                height={32}
                                style={{ width: '100%', height: 'auto' }}
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
                    <div className='font-Jakarta-sans font-normal'>
                        {isPrimary ? '(Creative Agency)' : ''}
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <Menu isPrimary={isPrimary} />
                    <div>
                        <Link href='#' >
                            <div className='cursor-pointer group  text-underline2'>
                                <div className='pb-2 pt-2 body-2-medium flex flex-nowrap gap-2 items-center'>
                                    <span className='translate-x-6 group-hover:translate-x-0 duration-500 '>Let&apos;s collab</span>
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
                        </Link>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className={`grid md:hidden grid-cols-2  ${isPrimary ? 'text-white bg-primary' : 'text-black bg-white'} p-4`}>
                <div className='flex items-center gap-6'>
                    <Link href={'/'} className='h-full'>
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
                                style={{ width: 'auto', height: '100%' }}
                                loading="lazy"
                            />
                        }
                    </Link>
                </div>
                <div className='flex justify-end'>
                    <MobileMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
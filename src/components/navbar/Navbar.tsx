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
                className={`hidden md:grid grid-cols-2 ${isPrimary ? 'text-primary' : 'text-black'} bg-white  text-custom-xl py-4 px-6`}

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
                <div className='flex justify-between'>
                    <Menu isPrimary={isPrimary} />
                    <div>
                        <Link href='/projects' className='text-underline cursor-pointer body-2-medium'>
                            Start a project
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
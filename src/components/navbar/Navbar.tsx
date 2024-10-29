'use client'
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useMobileMenuContext } from '../context/MobileMenuContext';
import { useContactContext } from '../context/ContactContext';

interface IStyleNav {
    isPrimary: boolean;
}

const Navbar = ({ isPrimary }: IStyleNav) => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { setIsOpen } = useMobileMenuContext();
    const { isContactOpen, setIsContactOpen } = useContactContext();
    const navbarHeight = 40; // Đặt chiều cao của navbar, có thể tùy chỉnh

    const controlNavbar = () => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY) >= navbarHeight) {
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false); // Cuộn xuống, ẩn navbar
            } else {
                setShowNavbar(true); // Cuộn lên, hiện navbar
            }
            setLastScrollY(currentScrollY); // Cập nhật lại vị trí cuộn cuối
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);
    return (
        <>
            {!isContactOpen &&
                <>
                    <div
                        style={{
                            position: isPrimary ? 'sticky' : 'unset',
                            zIndex: 30,
                            top: `${showNavbar ? "0" : "-83px"}`,
                            transition: "top 1s ease"
                        }}
                    >
                        {/* Desktop */}
                        <div
                            className={`hidden md:grid grid-cols-2 items-center ${isPrimary ? 'text-primary' : 'text-black'} bg-bg-fc/70  text-custom-xl py-5 px-6 gap-6`}
                            style={{
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            <div className='flex items-center gap-6'>
                                <Link href={'/'} className='w-[115px] 2xl:w-[105] h-full'>
                                    {isPrimary ?
                                        <Image
                                            alt='nav-logo'
                                            src={'/logo/THINGTODO-TANGERINE.svg'}
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
                                <div className='font-Jakarta-sans font-normal xl:text-xl 2xl:text-2xl'>
                                    {isPrimary ? '(Creative Agency)' : ''}
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <Menu isPrimary={isPrimary} />
                                <div>
                                    <div
                                        className='cursor-pointer group text-underline2'
                                        onClick={() => setIsContactOpen(true)}
                                    >
                                        <div className='pb-2 pt-2 body-2-medium flex flex-nowrap gap-2 items-center'>
                                            <span className='translate-x-6 group-hover:translate-x-0 duration-500 2xl:text-2xl xl:text-xl'>Let&apos;s collab</span>
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
                            <>
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
                                    <div
                                        className='rounded-3xl bg-primary-trans py-1 px-4 cursor-pointer text-[#FEE3DC]'
                                        onClick={() => {
                                            setIsOpen(true);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" />
                                        </svg>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Navbar
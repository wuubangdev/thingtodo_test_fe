'use client'
import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useContactContext } from '../context/ContactContext';


const NavbarSecondary = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { setIsContactOpen } = useContactContext();
    const navbarHeight = 40;
    const controlNavbar = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY >= 1200) {
            if (Math.abs(currentScrollY - lastScrollY) >= navbarHeight) {
                if (currentScrollY > lastScrollY) {
                    setShowNavbar(true); // Show navbar when scrolling up
                } else {
                    setShowNavbar(false); // Hide navbar when scrolling down
                }
                setLastScrollY(currentScrollY);
            }
        } else {
            setShowNavbar(false); // Hide navbar if scroll is less than 1600px
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY, controlNavbar]);
    return (
        <>
            <div
                className={`${showNavbar ? "opacity-100" : "opacity-0"} w-full fixed`}
                style={{
                    zIndex: 60,
                    top: `${showNavbar ? "0" : "-88px"}`,
                    transition: '1s ease',
                }}
            >
                {/* Desktop */}
                <div
                    className={`hidden lg:grid grid-cols-2 items-center  text-black bg-bg-fc/70 text-custom-xl py-5 px-6 gap-6`}
                    style={{
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <div className='flex items-center gap-6'>
                        <Link href={'/'} className='w-[115px] 2xl:w-[105] h-full'>
                            <Image
                                alt='nav-logo'
                                src={'/logo/THINGTODO-BLACK.svg'}
                                width={78}
                                height={32}
                                style={{ width: '100%', height: 'auto' }}
                                loading="lazy"
                            />

                        </Link>
                        {/* <div className='font-Jakarta-sans font-normal xl:text-xl 2xl:text-2xl'>
                            {isPrimary ? '(Creative Agency)' : ''}
                        </div> */}
                    </div>
                    <div className='flex justify-between items-center'>
                        <Menu isPrimary={false} isSecondary={true} />
                        <div>
                            <div
                                className='cursor-pointer group text-underline2'
                                onClick={() => setIsContactOpen(true)}
                            >
                                <div className='pb-2 body-2-medium flex flex-nowrap gap-2 items-center'>
                                    <span className='translate-x-6 group-hover:translate-x-0 duration-500 body-2-medium'>Let&apos;s collab</span>
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
            </div>
        </>
    )
}

export default NavbarSecondary;
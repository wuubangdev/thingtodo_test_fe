'use client'
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useMobileMenuContext } from '../context/MobileMenuContext';
import { useContactContext } from '../context/ContactContext';


const NavbarError = () => {
    const { setIsContactOpen } = useContactContext();
    const { setIsOpen } = useMobileMenuContext();
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        window.scroll({
            top: element.offsetTop,
            behavior: 'smooth'
        })
    };

    return (
        <>
            <div>
                {/* Desktop */}
                <div
                    className={`hidden md:grid grid-cols-2 items-center text-bg-fc bg-[#131E29]  text-custom-xl py-5 px-6 gap-6`}
                    style={{
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <div className='flex items-center gap-6'>
                        <Link href={'/'} className='w-[115px] 2xl:w-[105] h-full'>
                            <Image
                                alt='nav-logo'
                                src={'/logo/THINGTODO-WHITE.svg'}
                                width={78}
                                height={32}
                                style={{ width: '100%', height: '100%' }}
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className='flex justify-between items-center'>
                        <ul className={`flex gap-6 text-bg-fc body-2-medium`}>
                            <li onClick={() => scrollToSection('footer')} className='text-underline cursor-pointer pb-2 2xl:text-2xl xl:text-xl'>About us</li>
                            <li onClick={() => scrollToSection('work')} className='text-underline cursor-pointer 2xl:text-2xl xl:text-xl'>Work</li>
                            <li onClick={() => scrollToSection('service')} className='text-underline cursor-pointer 2xl:text-2xl xl:text-xl'>Service</li>
                        </ul>
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
                <div className={`grid md:hidden  grid-cols-2 p-4  text-bg-fc bg-[#131E29]`}>
                    <>
                        <div className='flex items-center gap-6'>
                            <Link href={'/'} className='h-full'>
                                <Image
                                    alt=''
                                    src={'/logo/THINGTODO-WHITE.svg'}
                                    width={78}
                                    height={32}
                                    style={{ width: 'auto', height: '100%' }}

                                    loading="lazy"
                                />
                            </Link>
                        </div>
                        <div className='flex justify-end'>
                            <div
                                className='rounded-3xl p-2 flex justify-center items-center cursor-pointe'
                                onClick={() => {
                                    setIsOpen(true);
                                }}
                                style={{
                                    background: "rgba(252, 252, 252, 0.07)",
                                    width: 52,
                                    height: 40
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 text-bg-fc">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" />
                                </svg>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    )
}

export default NavbarError;
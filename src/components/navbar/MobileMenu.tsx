'use client'
import Link from 'next/link';
import React, { useState } from 'react';

interface IMobileMenu {
    link: string;
    title: string;
}

const menuItems: IMobileMenu[] = [
    {
        link: '/',
        title: 'Home',
    },
    {
        link: '/about-us',
        title: 'About us',
    },
    {
        link: '/work',
        title: 'Work',
    },
    {
        link: '/service',
        title: 'Service',
    },
    {
        link: '/contact',
        title: 'Contact',
    },
]


const MobileMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <>
            <div
                className='rounded-3xl bg-primary-trans py-1 px-4 cursor-pointer'
                onClick={() => {
                    setOpenMenu(true);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" />
                </svg>
            </div>
            <div
                className='fixed top-0 left-0 right-0 bottom-0 bg-primary z-50 pb-6'
                style={{
                    display: openMenu ? 'block' : 'none'
                }}
            >
                <div className='text-white flex flex-col justify-between w-full h-full'>
                    {/* Header & Menu Part */}
                    <div className='flex flex-col gap-4'>
                        {/* Header */}
                        <div className='p-4 flex items-center justify-end gap-4'>
                            <button
                                className='rounded-3xl border-[1px] border-white py-1 px-4 cursor-pointer text-custom-xl'
                            >
                                Start a project
                            </button>
                            <button
                                className='rounded-3xl bg-primary-trans py-1 px-2 cursor-pointer'
                                onClick={() => {
                                    setOpenMenu(false);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                        {/* Menu */}
                        <div className='px-4'>
                            <ul className='flex flex-col gap-4'>
                                {menuItems && menuItems.map((item, index) => (
                                    <li key={index} className='pb-3 border-b-[0.5px] border-white text-4xl'>
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className='flex flex-col gap-6'>
                        <div className='px-4 gap-1'>
                            <h5 className='text-sm'>Phone number</h5>
                            <Link href={'tel:+84 966 080 411'} className='text-3xl'>+84 966 080 411</Link>
                        </div>
                        <div className='px-4 gap-1'>
                            <h5 className='text-sm'>Email</h5>
                            <Link href={'mailto:contact@thingtodo.vn'} className='text-3xl'>contact@thingtodo.vn</Link>
                        </div>
                    </div>
                    {/* Social */}
                    <div className='flex gap-4 px-4'>
                        <button
                            className='rounded-3xl border-[1px] border-white py-1 px-4 cursor-pointer text-custom-xl'
                        >
                            Tiktok
                        </button>
                        <button
                            className='rounded-3xl border-[1px] border-white py-1 px-4 cursor-pointer text-custom-xl'
                        >
                            Instagram
                        </button>
                        <button
                            className='rounded-3xl border-[1px] border-white py-1 px-4 cursor-pointer text-custom-xl'
                        >
                            Facebook
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MobileMenu;
'use client'
import Link from 'next/link';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMobileMenuContext } from '../context/MobileMenuContext';
import { useContactContext } from '../context/ContactContext';

interface IMobileMenu {
    link: string;
    title: string;
}

const menuItems: IMobileMenu[] = [
    {
        link: '/',
        title: 'Home',
    },
    // {
    //     link: '#footer',
    //     title: 'About us',
    // },
    {
        link: '#work',
        title: 'Work',
    },
    {
        link: '#service',
        title: 'Service',
    },
    // {
    //     link: '#footer',
    //     title: 'Contact',
    // },
]



const MobileMenu = () => {
    const { isOpen, setIsOpen } = useMobileMenuContext();
    const { setIsContactOpen } = useContactContext();
    function scrollToBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeInOut'
                        }}
                        className='fixed inset-0 bg-black/80 z-40'
                    >
                        <div className='relative h-full'>
                            <motion.div
                                initial={{ opacity: 1, x: '440px' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 1, x: '440px' }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut'
                                }}
                                className='absolute left-6 top-0 bottom-0 right-0 md:w-[440px] bg-primary'
                            >
                                <div className='text-white flex flex-col justify-between w-full h-screen pb-4'>
                                    {/* Header & Menu Part */}
                                    <div className='flex flex-col gap-4'>
                                        {/* Header */}
                                        <div className='p-4 flex items-center justify-end gap-4'>
                                            <div
                                                className='rounded-3xl border-[1px] border-white py-1 px-4 cursor-pointer body-2-medium'
                                                onClick={() => setIsContactOpen(true)}
                                            >
                                                Let&apos;s collab
                                            </div>
                                            <button
                                                className='rounded-[40px] bg-primary-trans p-4 cursor-pointer 
                                                relative flex h-10 w-[52px] flex-col justify-center items-center gap-1'
                                                onClick={() => {
                                                    setIsOpen(false);
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-6 absolute text-primary">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        {/* Menu */}
                                        <div className='px-4'>
                                            <ul className='flex flex-col gap-4'>
                                                {menuItems && menuItems.map((item, index) => (
                                                    <li key={index} className='pb-3 border-b-[0.5px] border-white text-4xl'>
                                                        <a
                                                            href={item.link}
                                                            className='block cursor-pointer subtitle-1-medium text-[#FEE3DC]'
                                                            onClick={() => setIsOpen(false)}
                                                        >{item.title}</a>
                                                    </li>
                                                ))}
                                                <li key={'footer'} className='pb-3 border-b-[0.5px] border-white text-4xl'>
                                                    <a
                                                        href={'#'}
                                                        className='block cursor-pointer subtitle-1-medium text-[#FEE3DC]'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setIsOpen(false);
                                                            scrollToBottom();
                                                        }}
                                                    >Contact</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Contact */}
                                    <div className='flex flex-col gap-6'>
                                        <div className='px-4 gap-1'>
                                            <h5 className='body-3-regular text-[#FDC6B7]'>Phone number</h5>
                                            <Link href={'tel:+84 966 080 411'} className='subtitle-2-medium  text-[#FEE3DC]'>+84 966 080 411</Link>
                                        </div>
                                        <div className='px-4 gap-1'>
                                            <h5 className='body-3-regular text-[#FDC6B7]'>Email</h5>
                                            <Link href={'mailto:contact@thingtodo.vn'} className='subtitle-2-medium text-[#FEE3DC]'>contact@thingtodo.vn</Link>
                                        </div>
                                    </div>
                                    {/* Social */}
                                    <div className='flex gap-4 px-4 flex-wrap'>
                                        <Link
                                            href={'https://www.tiktok.com/@tutudzui'}
                                            target='_blank'
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                            className='rounded-3xl border-[1px] border-[#FEE3DC] py-1 px-4 cursor-pointer body-2-medium'
                                        >
                                            Tiktok
                                        </Link>
                                        <Link
                                            href={'https://www.instagram.com/thingtodo.agency/'}
                                            target='_blank'
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                            className='rounded-3xl border-[1px] border-[#FEE3DC] py-1 px-4 cursor-pointer body-2-medium'
                                        >
                                            Instagram
                                        </Link>
                                        <Link
                                            href={'https://www.facebook.com/profile.php?id=61562599131360'}
                                            target='_blank'
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                            className='rounded-3xl border-[1px] border-[#FEE3DC] py-1 px-4 cursor-pointer body-2-medium'
                                        >
                                            Facebook
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>
                }
            </AnimatePresence>

        </>
    )
}

export default MobileMenu;
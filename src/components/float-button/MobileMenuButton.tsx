'use client'
import React, { useEffect, useState } from 'react'
import { useMobileMenuContext } from '../context/MobileMenuContext';
import { useContactContext } from '../context/ContactContext';

const MobileMenuButton = () => {
    const { isOpen, setIsOpen } = useMobileMenuContext();
    const [isHover, setIsHover] = useState<boolean>(false);
    const { setIsContactOpen } = useContactContext();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isHover && isOpen) {
                setIsHover(true);
            }
            if (!isOpen) {
                setIsHover(false)
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [isOpen]);


    return (
        <div className='fixed top-4 right-4 z-50 md:hidden'>
            <div className='flex items-top justify-end gap-4'>
                <div
                    className={`group rounded-3xl ${isOpen ? "translate-x-0 opacity-100" : "translate-x-96 opacity-0"} flex justify-center ${isHover ? 'pl-6 pr-4' : 'px-4'} items-center duration-300 border-[1px] border-white py-1 px-4 cursor-pointer body-2-medium`}
                    onClick={() => setIsContactOpen(true)}
                >
                    <span className={`${isHover ? "-translate-x-[6px] delayed-hover" : "translate-x-1"} duration-500 text-white`}>
                        Let&apos;s collab
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`size-5 text-white ${isHover ? 'scale-x-100 delayed-hover' : 'scale-x-0'} right duration-500 rotate-180`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <div
                    className=' bg-primary-trans py-1 px-4  text-[#FEE3DC]
                                    rounded-[40px]  p-4 cursor-pointer 
                                                relative flex h-10 w-[52px] flex-col justify-center items-center gap-1
                                '
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    style={{
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <svg className={`absolute text-primary ${isOpen ? 'opacity-0' : 'opacity-100'} duration-500`}
                        width="52"
                        height="40"
                        viewBox="0 0 52 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="52" height="40" rx="20" fill="#FDC6B7" />
                        <line x1="16" y1="17.25" x2="36" y2="17.25" stroke="#FA4616" strokeWidth="1.5" />
                        <line x1="16" y1="21.25" x2="36" y2="21.25" stroke="#FA4616" strokeWidth="1.5" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`size-6 absolute text-primary ${!isOpen ? 'opacity-0' : 'opacity-100'} duration-500`}>
                        <path strokeLinecap="round"
                            strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default MobileMenuButton;
'use client'
import React from 'react'
import { useMobileMenuContext } from '../context/MobileMenuContext';

const MobileMenuButton = () => {
    const { setIsOpen } = useMobileMenuContext();
    return (
        <div className='fixed top-4 right-4 z-40 md:hidden'>
            <div
                className=' bg-primary-trans py-1 px-4  text-[#FEE3DC]
                                    rounded-[40px]  p-4 cursor-pointer 
                                                relative flex h-10 w-[52px] flex-col justify-center items-center gap-1
                                '
                onClick={() => {
                    setIsOpen(true);
                }}
                style={{
                    backdropFilter: 'blur(5px)'
                }}
            >
                <svg className="absolute text-primary" width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="52" height="40" rx="20" fill="#FDC6B7" />
                    <line x1="16" y1="17.25" x2="36" y2="17.25" stroke="#FA4616" stroke-width="1.5" />
                    <line x1="16" y1="21.25" x2="36" y2="21.25" stroke="#FA4616" stroke-width="1.5" />
                </svg>

            </div>
        </div>
    )
}

export default MobileMenuButton;
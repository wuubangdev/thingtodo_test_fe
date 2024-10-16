'use client';
import React, { useEffect, useState } from 'react';

const ButtonScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    return (
        <>
            {isVisible &&
                <div className='fixed bottom-6 right-6 z-40'>
                    <div
                        className='rounded-[50%] bg-black text-white p-3 hover:text-primary cursor-pointer duration-500 bg-black/70'
                        onClick={() => { scrollToTop() }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </div>
                </div>
            }
        </>
    )
}

export default ButtonScrollToTop;
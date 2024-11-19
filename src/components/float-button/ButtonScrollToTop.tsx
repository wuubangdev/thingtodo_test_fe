'use client';
import React, { useEffect, useState } from 'react';

const ButtonScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 1400) {
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
                <div
                    style={{
                        zIndex: 9999,
                        position: 'fixed',
                    }}
                    className='md:bottom-6 md:right-6 bottom-4 right-4'
                >
                    <div className=' flex justify-end'>
                        <div
                            className='rounded-[50%] bg-black text-white p-3 hover:text-primary cursor-pointer duration-500 bg-black/70 mr-6'
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
                </div>
            }
        </>
    )
}

export default ButtonScrollToTop;
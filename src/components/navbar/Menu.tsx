'use client'
import React from 'react';

const Menu = ({ isPrimary, isSecondary }: { isPrimary: boolean; isSecondary: boolean }) => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        window.scroll({
            top: element.offsetTop,
            behavior: 'smooth'
        })
    };

    return (
        <div>
            <ul className={`flex gap-6 ${isSecondary ? 'text-black' : isPrimary ? 'text-bg-fc' : 'text-black'} body-2-medium`}>
                <li onClick={() => scrollToSection('footer')} className='text-underline cursor-pointer pb-2'>About us</li>
                <li onClick={() => scrollToSection('work')} className='text-underline cursor-pointer'>Work</li>
                <li onClick={() => scrollToSection('service')} className='text-underline cursor-pointer'>Service</li>
            </ul>
        </div>
    )
}

export default Menu;
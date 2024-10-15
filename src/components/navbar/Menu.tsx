'use client'
import React from 'react';

const Menu = ({ isPrimary }: { isPrimary: boolean }) => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        window.scroll({
            top: element.offsetTop + 600,
            behavior: 'smooth'
        })
    };

    return (
        <div>
            <ul className={`flex gap-6 ${isPrimary ? 'text-primary' : 'text-black'} body-2-medium`}>
                <li onClick={() => scrollToSection('footer')} className='text-underline cursor-pointer'>About us</li>
                <li onClick={() => scrollToSection('work')} className='text-underline cursor-pointer'>Work</li>
                <li onClick={() => scrollToSection('service')} className='text-underline cursor-pointer'>Service</li>
            </ul>
        </div>
    )
}

export default Menu;
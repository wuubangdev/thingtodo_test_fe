import React from 'react'

const Menu = () => {
    return (
        <div>
            <ul className='flex gap-6 text-primary'>
                <li className='text-underline cursor-pointer'>About us</li>
                <li className='text-underline cursor-pointer'>Work</li>
                <li className='text-underline cursor-pointer'>Service</li>
            </ul>
        </div>
    )
}

export default Menu;
import React from 'react'

const Menu = ({ isPrimary }: { isPrimary: boolean }) => {
    return (
        <div>
            <ul className={`flex gap-6 ${isPrimary ? 'text-primary' : 'text-black'} font-Jakarta-sans font-medium`}>
                <li className='text-underline cursor-pointer'>About us</li>
                <li className='text-underline cursor-pointer'>Work</li>
                <li className='text-underline cursor-pointer'>Service</li>
            </ul>
        </div>
    )
}

export default Menu;
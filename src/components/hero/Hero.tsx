import React from 'react'

const list: string[] = ['Create', 'Make', 'Build', 'Design',]

const Hero = () => {
    return (
        <div className='p-6'>
            <div>
                <ul className='flex justify-between'>
                    {list && list.map((item, index) => (
                        <li
                            key={index}
                            className='gradient-border cursor-pointer text-secondary'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Hero
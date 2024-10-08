import React from 'react'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div>
            <div className='grid grid-cols-2 text-primary text-custom-xl py-4 px-6'>
                <div className='flex items-center gap-6'>
                    <div className=''>
                        Logo
                    </div>
                    <div>
                        (Creative Agency)
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Menu />
                    <div>
                        Start a project
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
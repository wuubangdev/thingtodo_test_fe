import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <div className='hidden md:grid grid-cols-2 text-primary text-custom-xl py-4 px-6'>
                <div className='flex items-center gap-6'>
                    <Link href={'/'} className='md:w-[16%]'>
                        <Image
                            alt=''
                            src={'/logo/Logo.png'}
                            width={78}
                            height={32}
                            className='w-full h-auto'
                        />
                    </Link>
                    <div>
                        (Creative Agency)
                    </div>
                </div>
                <div className='flex justify-between'>
                    <Menu />
                    <div className='text-underline cursor-pointer'>
                        Start a project
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
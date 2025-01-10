import Image from 'next/image';
import React from 'react'
import CustomButton from '../custom.components/CustomButton';

const DesktopNavbar = () => {
    return (
        <div
            className='w-full px-8 py-4 flex items-center fixed top-0 z-50'
            style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(5px)"
            }}
        >
            {/* Menu content */}
            <div className='flex items-center gap-6 flex-1'>
                <button className='text-underline flex flex-col justify-center items-center gap-12'>Giai phap</button>
                <button className='text-underline flex flex-col justify-center items-center gap-12'>Work</button>
                <button className='text-underline flex flex-col justify-center items-center gap-12'>Service</button>
            </div>
            {/* Logo */}
            <div className='flex self-stretch'>
                <Image
                    alt='ttd-logo'
                    src={'/logo/THINGTODO-BLACK.svg'}
                    width={100}
                    height={40}
                    // style={{ width: '100%', height: '100%' }}
                    loading="lazy"
                />
            </div>
            <div className='flex items-center gap-11 flex-1 justify-end'>
                <CustomButton contentLeft={['Chốt', 'phát']} contentRight={['mát', 'liền']} background='black' />
            </div>
        </div>
    )
}

export default DesktopNavbar;
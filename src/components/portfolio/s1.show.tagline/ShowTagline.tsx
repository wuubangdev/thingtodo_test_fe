{/* S1: Show clip with tagline */ }
import React from 'react'
import CustomButton from '../custom.components/CustomButton';
import Image from 'next/image';

const ShowTagline = () => {
    return (
        <div id='#section1'
            className='h-[150vh] relative'
            style={{
                background: "linear-gradient(180deg, #601FEB 0%, #A369EE 27.99%, #BAF2C9 68.6%, #75D3C6 105.91%)",
            }}
        >
            <div className='absolute inset-0 z-30'>
                <Image
                    alt='project-tet-1'
                    src={'/portfo_access/tagline/hs-desktop-above.webp'}
                    width={1440}
                    height={900}
                    className='w-full h-auto'
                />
            </div>
            <div className='absolute inset-0 '>
                <Image
                    alt='project-tet-1'
                    src={'/portfo_access/tagline/hs-desktop-below.webp'}
                    width={1440}
                    height={900}
                    className='w-full h-auto'
                />
            </div>
            <div
                className='h-[100vh] flex items-end justify-center pb-14 absolute inset-0 z-20'
            >
                <div className='flex flex-col gap-14 justify-center items-center text-[#fcfcfc]'>
                    <h1 className='portfolio-text-heading '>
                        Kem ngonnn <br /> Game on!
                    </h1>
                    <div className='portfolio-text-description'>
                        Chạm vị mát lành – Vẽ nên câu chuyện mê đắm cùng sắc màu <br />
                        ngọt ngào. Khơi dậy vị giác và cảm xúc, biến từng cây kem thành <br />
                        biểu tượng của sự mát lịm đầy mê hoặc.
                    </div>
                    <div className='flex relative z-50'>
                        <CustomButton background='white' contentLeft={['Khám phá', 'phát']} contentRight={['mát', 'liền']} />
                    </div>
                </div>
            </div>
            <div
                className='h-[100vh] flex items-end justify-center pb-14 absolute inset-0 z-40'
            >
                <div className='flex flex-col gap-14 justify-center items-center text-[#fcfcfc]'>
                    <h1 className='portfolio-text-heading opacity-0'>
                        Kem ngonnn <br /> Game on!
                    </h1>
                    <div className='portfolio-text-description opacity-0'>
                        Chạm vị mát lành – Vẽ nên câu chuyện mê đắm cùng sắc màu <br />
                        ngọt ngào. Khơi dậy vị giác và cảm xúc, biến từng cây kem thành <br />
                        biểu tượng của sự mát lịm đầy mê hoặc.
                    </div>
                    <div className='flex'>
                        <CustomButton background='white' contentLeft={['Khám phá', 'phát']} contentRight={['mát', 'liền']} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowTagline;
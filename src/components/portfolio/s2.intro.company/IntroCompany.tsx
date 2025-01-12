import React from 'react'
import CardIntroduction from './CardIntroduction';
import Image from 'next/image';

const IntroCompany = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className='h-screen -mt-[50vh] pt-14 relative '>
                <div className='flex justify-center'>
                    <div className='w-1/3'>
                        <CardIntroduction link='/portfo_access/tagline/image0.webp' />
                    </div>
                </div>
                <div className='flex justify-between w-full absolute bottom-0'>
                    <div className='w-1/3 -ml-16'>
                        <CardIntroduction link='/portfo_access/tagline/image1.webp' />
                    </div>
                    <div className='w-1/3 -mr-16'>
                        <CardIntroduction link='/portfo_access/tagline/image2.webp' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='portfolio-text-subheading'>
                    <div className='flex'>
                        <div>Hãy để sự sáng tạo</div>
                        <div className='flex items-center h-full scale-125 mx-2'>
                            <Image
                                alt='intro-1'
                                src={'/portfo_access/introduction/intro1.webp'}
                                width={79}
                                height={79}
                                className='h-full'
                            />
                        </div>
                        <div>kết hợp</div>
                    </div>
                    <div>cùng công nghệ, <span className='text-[#a3a3a3]'>tạo nên</span></div>
                    <div className='text-[#a3a3a3]'>
                        <div>những sản phẩm truyền thông</div>
                        <div className='flex'>
                            <div>tuyệt vời</div>
                            <div className='flex items-center h-full scale-125 mx-2'>
                                <Image
                                    alt='intro-2'
                                    src={'/portfo_access/introduction/intro2.webp'}
                                    width={49}
                                    height={90}
                                    className='w-full'
                                />
                            </div>
                            <div>, nhanh chóng và</div>
                        </div>
                        <div>phù hợp mọi nền tảng.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroCompany;
import React from 'react'
import CardIntroduction from './CardIntroduction';

const IntroCompany = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className='h-screen -mt-[50vh] pt-14 relative '>
                <div className='flex justify-center'>
                    <div className='w-1/3'>
                        <CardIntroduction />
                    </div>
                </div>
                <div className='flex justify-between w-full absolute bottom-0'>
                    <div className='w-1/3 -ml-16'>
                        <CardIntroduction />
                    </div>
                    <div className='w-1/3 -mr-16'>
                        <CardIntroduction />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='portfolio-text-subheading'>
                    Hãy để sự sáng tạo 🏵️ kết hợp <br />
                    cùng công nghệ,&nbsp;
                    <span className='text-[#a3a3a3]'>
                        tạo nên <br />
                        những sản phẩm truyền thông <br />
                        tuyệt vời, nhanh chóng và phù <br />
                        hợp mọi nền tảng.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default IntroCompany;
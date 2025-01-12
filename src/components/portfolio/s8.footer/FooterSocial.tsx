import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterSocial = () => {
    return (
        <div
            className='px-[200px] items-center flex flex-col gap-24 pt-24'
        >
            {/* Heading & social */}
            <div className='flex flex-col items-center gap-8'>
                {/* Heading */}
                <div className='flex flex-col items-center gap-4'>
                    <div className='portfolio-compo-heading portfolio-text-gradient w-full'>
                        Thank you.
                    </div>
                    <span className='portfolio-footer-description text-center'>
                        Cảm ơn bạn đã "nếm thử" proposal của chúng tôi! Hy vọng ý tưởng này <br />
                        đã mang lại chút cảm hứng thú vị. Mong được cùng bạn "chốt đơn" và <br />
                        biến những sáng tạo này thành hiện thực lung linh! ❤️✨
                    </span>
                </div>
                {/* Social */}
                <div className='flex gap-8'>
                    <Link href={'https://www.facebook.com/profile.php?id=61562599131360'} className='flex gap-1'>
                        <span className='body-2-regular text-[#fcfcfc]' >Facebook</span>
                        <svg
                            width="16" height="18" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.54441 3.21138L2.53748 4.53613L12.4387 4.48429L12.4456 3.15955L2.54441 3.21138Z" fill="#fcfcfc" />
                            <path d="M12.3849 3.15981L12.3848 3.17702L1.60128 13.9609L2.61103 14.9706L12.893 4.68832L13.3806 5.20189L12.3689 6.21362L12.3263 14.3514L13.6768 14.3443L13.7354 3.15274L12.3849 3.15981Z" fill="#fcfcfc" />
                        </svg>
                    </Link>
                    <Link href={'https://www.instagram.com/thingtodo.agency/'} className='flex gap-1'>
                        <span className='body-2-regular text-[#fcfcfc]' >Instagram</span>
                        <svg
                            width="16" height="18" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.54441 3.21138L2.53748 4.53613L12.4387 4.48429L12.4456 3.15955L2.54441 3.21138Z" fill="#fcfcfc" />
                            <path d="M12.3849 3.15981L12.3848 3.17702L1.60128 13.9609L2.61103 14.9706L12.893 4.68832L13.3806 5.20189L12.3689 6.21362L12.3263 14.3514L13.6768 14.3443L13.7354 3.15274L12.3849 3.15981Z" fill="#fcfcfc" />
                        </svg>
                    </Link>
                    <Link href={'https://www.thingtodo.vn/'} className='flex gap-1'>
                        <span className='body-2-regular text-[#fcfcfc]' >Website</span>
                        <svg
                            width="16" height="18" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.54441 3.21138L2.53748 4.53613L12.4387 4.48429L12.4456 3.15955L2.54441 3.21138Z" fill="#fcfcfc" />
                            <path d="M12.3849 3.15981L12.3848 3.17702L1.60128 13.9609L2.61103 14.9706L12.893 4.68832L13.3806 5.20189L12.3689 6.21362L12.3263 14.3514L13.6768 14.3443L13.7354 3.15274L12.3849 3.15981Z" fill="#fcfcfc" />
                        </svg>
                    </Link>
                </div>

            </div>
            {/* Contact button & Ads */}
            <div className='flex flex-col gap-14'>
                {/* Contac button */}
                <div className='flex items-center gap-7'>
                    <div
                        className='bg-[#9EFEFD] px-8 flex gap-5 items-center rounded-[56px] portfolio-footer-btn '
                        style={{
                            boxShadow: '0px 0px 2.1px 0px #FFF, 0px 0px 21.9px 0px rgba(255, 255, 255, 0.25), 0px 10px 37.7px 0px rgba(255, 255, 255, 0.25)'
                        }}
                    >
                        <div className='py-3'>Kết nối qua email</div>
                        <div className='flex items-center h-full scale-220'>
                            <Image
                                alt=''
                                src={'/portfo_access/footer/kem1.svg'}
                                width={31}
                                height={32}
                                className='h-full'
                            />
                        </div>
                    </div>
                    <div
                        className='px-8 flex gap-5 items-center rounded-[56px] border-[1px] border-solid portfolio-footer-btn'
                    >
                        <div className='py-3 text-[#fcfcfc]'>Kết nối qua SĐT</div>
                        <div className='flex items-center h-full scale-125'>
                            <Image
                                alt=''
                                src={'/portfo_access/footer/kem2.webp'}
                                width={31}
                                height={32}
                                className='h-full'
                            />
                        </div>
                    </div>
                </div>
                {/* Ads */}
                <div className='portfolio-footer-ads w-full pt-3 border-t-[0.5px] border-[rgba(102, 109, 116, 0.30)] flex justify-center gap-[10px]'>
                    <span>© 2024 Thingtodo Creative</span>
                    <span className='text-[#959A9F]'>Trang web này được hoàn thiện trong 4 ngày làm việc.</span>
                </div>
            </div>
        </div>
    )
}

export default FooterSocial
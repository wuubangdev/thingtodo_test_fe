import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-primary text-white md:flex hidden flex-col gap-60 px-6 pb-6'>
                {/* Heading */}
                <div className='border-b-[0.5px] border-white flex items-center gap-10 py-4'>
                    <h4 className='headline-4'>LET'S COLLAB</h4>
                    <div>
                        <Image
                            alt=''
                            src={'/logo/arrow.png'}
                            width={196}
                            height={82}
                            className='w-full h-auto cursor-pointer hover:scale-x-150 origin-left duration-500'
                        />
                    </div>
                </div>
                {/* Content */}
                <div className='flex flex-col gap-28'>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='subtitle-2-medium'>Visit us on <br /> Behance</div>
                        <div className='subtitle-2-medium'>Connect us</div>
                        <div className='title-2-medium'>+84 966 080 411</div>
                    </div>
                    {/*  */}
                    <div className='flex flex-col gap-6'>
                        <div className='grid grid-cols-3'>
                            <div className='w-full col-span-1'>
                                <Image
                                    alt='footer-logo'
                                    src={'/logo/THINGTODO-WHITE.svg'}
                                    width={143}
                                    height={60}
                                    className='w-1/4 h-auto'
                                />
                            </div>
                            <div className='col-span-2 grid grid-cols-7 gap-16 '>
                                <div className='flex flex-col gap-3 col-span-3'>
                                    <h5 className='body-2-semibold'>Office</h5>
                                    <p className='body-3-regular'>Block 3, Building TSA, 169/1 Võ Thị Sáu, Võ Thị Sáu, District 3, HCMC</p>
                                </div>
                                <div className='flex flex-col gap-3 col-span-2'>
                                    <h5 className='body-2-semibold'>Email</h5>
                                    <a href='mailto: contact@thingtodo.vn' className='body-3-regular'>contact@thingtodo.vn</a>
                                </div>
                                <div className='flex flex-col gap-3 col-span-2'>
                                    <h5 className='body-2-semibold'>Social</h5>
                                    <ul className='text-custom-xl'>
                                        <li className='body-3-regular'>Instagram</li>
                                        <li className='body-3-regular'>Facebook</li>
                                        <li className='body-3-regular'>Tiktok</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Copyright */}
                        <div className='body-3-regular'>
                            © 2024 Thingtodo Agency
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='bg-primary text-white flex md:hidden flex-col gap-28 px-4 pb-6'>
                {/* Heading */}
                <div className='border-b-[0.5px] pt-12 pb-6  border-white flex items-end gap-6'>
                    <h4 className='title-2-medium'>LET'S COLLAB</h4>
                    <div>
                        <Image
                            alt=''
                            src={'/logo/arrow.png'}
                            width={196}
                            height={82}
                            className='w-full h-auto cursor-pointer hover:scale-x-150 origin-left duration-500'
                        />
                    </div>
                </div>
                {/* Content */}
                <div className='flex md:hidden flex-col gap-28'>
                    <div className='grid grid-cols-1 gap-20'>
                        <div className='subtitle-3-medium'>Visit us on <br /> Behance</div>
                        <div className='w-full col-span-1'>
                            <Image
                                alt='footer-logo'
                                src={'/logo/logo_footer.png'}
                                width={143}
                                height={60}
                                className='w-1/4 h-auto'
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-8'>
                            <div className='flex flex-col gap-3'>
                                <h5 className='body-2-semibold'>Office</h5>
                                <p className='text-sm ml-8'>Block 3, Building TSA, 169/1 Võ Thị Sáu, Võ Thị Sáu, District 3, HCMC</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h5 className='body-2-semibold'>Email</h5>
                                <a href='mailto: contact@thingtodo.vn' className='text-sm ml-8'>contact@thingtodo.vn</a>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h5 className='body-2-semibold'>Social</h5>
                                <ul className='body-3-regular'>
                                    <li className='ml-8'>Instagram</li>
                                    <li className='ml-8'>Facebook</li>
                                    <li className='ml-8'>Tiktok</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='subtitle-3-medium'>Connect us</div>
                            <div className='title-3-medium'>+84 966 080 411</div>
                        </div>
                        <div className='text-sm'>
                            © 2024 Thingtodo Agency
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
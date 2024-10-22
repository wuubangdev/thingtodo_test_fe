import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div id='footer' className='bg-primary text-white md:flex hidden flex-col gap-60 px-6 pb-6'>
                {/* Heading */}
                <div className='border-b-[0.5px] border-white flex flex-wrap items-center gap-6 py-5 group cursor-pointer'>
                    <span className='headline-4 custom-text-wrap'>LET&apos;S COLLAB</span>
                    <div className='min-w-[296px]'>
                        <div className='pt-4 flex items-center relative'>
                            <svg
                                className=''
                                width="200"
                                height="107"
                                viewBox="0 0 200 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0.335938H200V8.33594H0V0.335938Z" fill="#FCFCFC" />
                            </svg>
                            <div className='absolute group-hover:translate-x-24 duration-500'>
                                <div className='flex items-center relative'>
                                    <svg
                                        className=''
                                        width="200"
                                        height="10"
                                        viewBox="0 0 200 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.335938H200V8.33594H0V0.335938Z" fill="#FCFCFC" />
                                    </svg>
                                    <svg
                                        className='absolute -right-2'
                                        width="47" height="82" viewBox="0 0 47 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.96077 0.671875L0.0965576 5.48542L36.4518 41.462L41.316 36.6484L4.96077 0.671875Z" fill="#FCFCFC" />
                                        <path d="M41.0931 36.4278L41.0299 36.4903L36.4518 36.4917L36.4518 43.8683L37.366 43.8669L37.2712 47.524H29.8802L0 77.0929L4.95895 82.0002L46.0521 41.3351L41.0931 36.4278Z" fill="#FCFCFC" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Content */}
                <div className='flex flex-col gap-28'>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='subtitle-2-medium'>Visit us on <br /> Behance</div>
                        <div className='subtitle-2-medium'>Connect us</div>
                        <div className='title-2-medium'><a href="tel:+84 966 080 411">+84 966 080 411</a></div>
                    </div>
                    {/*  */}
                    <div className='flex flex-col gap-6'>
                        <div className='grid grid-cols-3'>
                            <div className='w-full col-span-1'>
                                <Link href="/">
                                    <Image
                                        alt='footer-logo'
                                        src={'/logo/THINGTODO-WHITE.svg'}
                                        width={143}
                                        height={60}
                                        className='w-1/4 h-auto'
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className='col-span-2 grid grid-cols-7 gap-16 '>
                                <div className='flex flex-col gap-3 col-span-3'>
                                    <h5 className='body-2-semibold'>Office</h5>
                                    <p className='body-3-regular'>
                                        <a href="https://maps.app.goo.gl/decEqRHp8WZq5zqp8"
                                            target='_blank'>
                                            Block 3, Building TSA, 169/1 Võ Thị Sáu, Võ Thị Sáu, District 3, HCMC
                                        </a>
                                    </p>
                                </div>
                                <div className='flex flex-col gap-3 col-span-2'>
                                    <h5 className='body-2-semibold'>Email</h5>
                                    <a href='mailto: contact@thingtodo.vn' className='body-3-regular'>contact@thingtodo.vn</a>
                                </div>
                                <div className='flex flex-col gap-3 col-span-2'>
                                    <h5 className='body-2-semibold'>Social</h5>
                                    <ul className='text-custom-xl'>
                                        <li className='body-3-regular'><a target='_blank' href="https://www.instagram.com/thingtodo.agency/">Instagram</a></li>
                                        <li className='body-3-regular'><a target='_blank' href="https://www.facebook.com/profile.php?id=61562599131360">Facebook</a></li>
                                        <li className='body-3-regular'><a target='_blank' href="https://www.tiktok.com/@tutudzui">Tiktok</a></li>
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
                    <h4 className='title-2-medium'>LET&apos;S COLLAB</h4>
                    <div>
                        <Image
                            alt=''
                            src={'/logo/arrow.png'}
                            width={196}
                            height={82}
                            className='w-full h-auto cursor-pointer hover:scale-x-150 origin-left duration-500'
                            loading="lazy"
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
                                src={'/logo/THINGTODO-WHITE.svg'}
                                width={143}
                                height={60}
                                className='w-1/4 h-auto'
                                loading="lazy"
                            />
                        </div>
                        <div className='grid grid-cols-1 gap-8'>
                            <div className='flex flex-col gap-3'>
                                <h5 className='body-2-semibold'>Office</h5>
                                <p className='text-sm ml-8'> <a href="https://maps.app.goo.gl/decEqRHp8WZq5zqp8" target='_blank'>Block 3, Building TSA, 169/1 Võ Thị Sáu, Võ Thị Sáu, District 3, HCMC</a> </p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h5 className='body-2-semibold'>Email</h5>
                                <a href='mailto: contact@thingtodo.vn' className='text-sm ml-8'>contact@thingtodo.vn</a>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h5 className='body-2-semibold'>Social</h5>
                                <ul className='body-3-regular'>
                                    <li className='ml-8 cursor-pointer'><a target='_blank' href="https://www.instagram.com/thingtodo.agency/">Instagram</a></li>
                                    <li className='ml-8 cursor-pointer'><a target='_blank' href="https://www.facebook.com/profile.php?id=61562599131360">Facebook</a></li>
                                    <li className='ml-8 cursor-pointer'><a target='_blank' href="https://www.tiktok.com/@tutudzui">Tiktok</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='subtitle-3-medium'>Connect us</div>
                            <div className='title-3-medium'><a target='_blank' href="tel:+84 966 080 411">+84 966 080 411</a></div>
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
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary text-white flex flex-col gap-60 px-6 pb-6'>
            {/* Heading */}
            <div className='border-b-[0.5px] border-white flex items-center gap-10'>
                <h4 className='text-custom-heading'>LET'S COLLAB</h4>
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
                    <div className='text-custom-content'>Visit us on <br /> Behance</div>
                    <div className='text-custom-content'>Connect us</div>
                    <div className='text-custom-phone'>+84 966 080 411</div>
                </div>
                {/*  */}
                <div className='flex flex-col gap-6'>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className='w-full'>
                            <Image
                                alt='footer-logo'
                                src={'/logo/logo_footer.png'}
                                width={143}
                                height={60}
                                className='w-1/4 h-auto'
                            />
                        </div>
                        <div className='grid grid-cols-8 col-span-2 gap-24'>
                            <div className='flex flex-col gap-3 col-span-4'>
                                <h5 className='text-custom-xl'>Office</h5>
                                <p className='text-sm'>Block 3, Building TSA, 169/1 Võ Thị Sáu, Võ Thị Sáu, District 3, HCMC</p>
                            </div>
                            <div className='flex flex-col gap-3 col-span-2'>
                                <h5 className='text-custom-xl'>Office</h5>
                                <p className='text-sm'>Block 3, Building TSA, 169/1 Võ Thị Sáu, Võ Thị Sáu, District 3, HCMC</p>
                            </div>
                            <div className='flex flex-col gap-3 col-span-2'>
                                <h5 className='text-custom-xl'>Office</h5>
                                <p className='text-sm'>Block 3, Building TSA, 169/1 Võ Thị Sáu, Võ Thị Sáu, District 3, HCMC</p>
                            </div>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className='text-sm'>
                        © 2024 Thingtodo Agency
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
'use client'
import ScrollAnimationWrapper from '@/app/hooks/ScrollAnimationWrapper';
import Image from 'next/image';
import React from 'react';

const ClientCard = (props: IClient) => {
    const { logo, logoHover } = props;
    return (
        <ScrollAnimationWrapper>
            <div className='w-full flex justify-center items-center relative group cursor-pointer scroll-in'>
                <Image
                    alt='client-logo-frame'
                    src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${logo}`}
                    width={135}
                    height={80}
                    className='group-hover:opacity-0 duration-500 w-full h-auto 3xl:w-[80%]'
                    loading="lazy"
                />
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center group-hover:opacity-100 opacity-0 duration-500'>
                    <Image
                        alt='client-logo-frame'
                        src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${logoHover}`}
                        width={198}
                        height={117}
                        className='w-full h-auto 3xl:w-[80%]'
                        loading="lazy"
                    />
                </div>
            </div>
        </ScrollAnimationWrapper>
    )
}

export default ClientCard;
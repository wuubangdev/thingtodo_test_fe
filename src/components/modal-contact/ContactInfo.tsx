'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export interface IContactModal {
    id: string;
    title: string;
    description: React.ReactElement;
    link: string;
    button: string;
}

interface IProps {
    contact: IContactModal;
}
const ContactInfo = (props: IProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const { id, title, description, link, button } = props.contact

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isHover) {
                setIsHover(true);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [isHover]);
    return (
        <div className='border-b-[1px] border-bg-fc/10 2xl:pb-6 pb-3 flex flex-col 2xl:gap-6 gap-3'>
            <h3
                className='body-2-regular flex gap-[10px] items-center'
            >
                <span
                    className='body-2-medium flex items-center justify-center opacity-60 p-2 w-8 h-8 rounded-[20px] border-[0.5px] border-bg-fc'
                    style={{
                        backgroundColor: 'rgba(252, 252, 252, 0.07)'
                    }}
                >{id}</span>
                {title}
            </h3>
            <div
                className={`flex flex-col ${isHover ? 'md:gap-6' : 'md:gap-0'}  gap-6 cursor-pointer w-full group duration-500 pb-3 2xl:pb-6`}
                onMouseEnter={() => {
                    setIsHover(true)
                }}
                onMouseLeave={() => setIsHover(false)}
            >
                <h1 className='subtitle-1-medium'>{description}</h1>
                <div className={`relative duration-300 ${isHover ? "h-12 pt-2 pb-3 px-2 opacity-100" : "md:opacity-0 md:h-0 md:px-0 md:pt-0 md:pb-0 h-12 opacity-100 pt-2 pb-3 px-2"}`}>
                    <Link
                        href={link}
                        target='_blank'
                        className={
                            `absolute body-2-medium text-center top-0 w-full h-12 flex items-center justify-center gap-0
                                                            left-0 pt-2 px-2 pb-3 md:opacity-0 opacity-100 md:border-none border-[0.5px] border-bg-fc
                                                            duration-200 ${isHover ? "change-background md:opacity-100 " : "bg-[rgba(252, 252, 252, 0.07)]"}`
                        }
                        style={{
                            borderRadius: 8,
                        }}
                    >
                        <span className={`${isHover ? "text-black -translate-x-2 font-semibold delayed-hover duration-300" : "text-white translate-x-1"} `}>{button}</span>
                        <svg
                            className={`${isHover ? "opacity-100 delayed-hover" : 'opacity-0'}  `}
                            width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.54441 3.21138L2.53748 4.53613L12.4387 4.48429L12.4456 3.15955L2.54441 3.21138Z" fill="#131E29" />
                            <path d="M12.3849 3.15981L12.3848 3.17702L1.60128 13.9609L2.61103 14.9706L12.893 4.68832L13.3806 5.20189L12.3689 6.21362L12.3263 14.3514L13.6768 14.3443L13.7354 3.15274L12.3849 3.15981Z" fill="#131E29" />
                        </svg>
                    </Link>
                    <div
                        className='absolute -bottom-12 w-full h-6 2xl:block hidden'
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
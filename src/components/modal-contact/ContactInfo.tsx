'use client'
import useMediaQuery from '@/app/hooks/useMediaQuery';
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
    const { id, title, description, link, button } = props.contact
    const [isHover, setIsHover] = useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 767px)')


    useEffect(() => {
        if (isMobile) {
            const timer = setTimeout(() => {
                if (!isHover) {
                    setIsHover(true);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isHover, isMobile]);
    return (
        <div className='border-b-[1px] border-bg-fc/10 flex flex-col 2xl:gap-6 gap-3 pb-6 2xl:pb-12'>
            <h3
                className='body-2-regular flex gap-[10px] items-center'
            >
                <span
                    className='body-2-medium flex items-center justify-center opacity-60 p-2 w-8 h-8 rounded-full border-[0.5px] border-bg-fc'
                    style={{
                        backgroundColor: 'rgba(252, 252, 252, 0.07)'
                    }}
                >{id}</span>
                {title}
            </h3>
            <div
                className={`flex flex-col  gap-6 cursor-pointer w-full group duration-500`}
            >
                <h1 className='subtitle-2-medium'>{description}</h1>
                <div className={`relative duration-300 ${isHover ? "h-12 pt-2 pb-3 px-2 opacity-100" : "h-12 opacity-100 pt-2 pb-3 px-2"}`}>
                    <Link
                        onMouseEnter={() => {
                            setIsHover(true)
                        }}
                        onMouseLeave={() => setIsHover(false)}
                        href={link}
                        target='_blank'
                        className={
                            `absolute body-2-medium text-center top-0 w-full h-12 flex items-center justify-center gap-0 rounded-lg lg:rounded-2xl
                                                            left-0 pt-1 px-2 pb-2 border-[0.5px] border-bg-fc
                                                            duration-200 ${isHover && isMobile ? "change-background" : isHover ? "change-background-desk" : "bg-[rgba(252, 252, 252, 0.07)]"}`
                        }
                    >
                        <span className={`${isHover && isMobile
                            ?
                            "text-black -translate-x-2 font-semibold delayed-hover duration-300"
                            :
                            isHover
                                ?
                                "text-black -translate-x-2 font-semibold duration-700"
                                :
                                "text-white translate-x-1"
                            }`}>{button}</span>
                        <svg
                            className={`${isHover && isMobile ? "opacity-100 delayed-hover scale-100" : isHover ? "opacity-100 scale-100" : 'scale-0 opacity-0'} duration-500 `}
                            width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.54441 3.21138L2.53748 4.53613L12.4387 4.48429L12.4456 3.15955L2.54441 3.21138Z" fill="#131E29" />
                            <path d="M12.3849 3.15981L12.3848 3.17702L1.60128 13.9609L2.61103 14.9706L12.893 4.68832L13.3806 5.20189L12.3689 6.21362L12.3263 14.3514L13.6768 14.3443L13.7354 3.15274L12.3849 3.15981Z" fill="#131E29" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
'use client'
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContactContext } from '../context/ContactContext';
import ContactInfo, { IContactModal } from './ContactInfo';
import { sendRequest } from '@/utils/api';

const ContactModal = () => {
    const { isContactOpen, setIsContactOpen } = useContactContext();
    const [catalog, setCatalog] = useState<ICatalog>();

    const contacts: IContactModal[] = [
        {
            id: '1',
            title: 'Phone number/Zalo',
            description: <span>{catalog?.phone}</span>,
            link: `tel:${catalog?.phone}`,
            button: 'Call us'
        },
        {
            id: '2',
            title: 'Email',
            description: <span>contact <br />@thingtodo.vn</span>,
            link: 'mailto:contact@thingtodo.vn',
            button: 'Send mail'
        },
    ]


    const fetchData = async () => {
        const catalogRes = await sendRequest<IBackendRes<ICatalog>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/catalogs/1`,
            method: "GET",
        })
        if (catalogRes.statusCode === 200) {
            setCatalog(catalogRes.data);
        }
    }
    useEffect(() => {
        if (isContactOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isContactOpen]);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <AnimatePresence>
                {isContactOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                        className='fixed inset-0 bg-black/80'
                        style={{
                            zIndex: 80
                        }}
                    >
                        <div className='relative h-full'>
                            <motion.div
                                initial={{ opacity: 1, x: '440px' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 1, x: '440px' }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut'
                                }}
                                className='absolute left-6 md:right-0 md:left-auto top-0 bottom-0 md:w-[440px] right-0'
                            >
                                <div
                                    className='flex flex-col md:gap-6 xl:gap-20 text-[#fcfcfc] relative h-full md:rounded-tl-[32px] md:rounded-bl-[32px]
                                        pt-4 px-4 pb-10 md:pt-8 mt:px-8 
                                    '
                                    style={{
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div className='absolute inset-0 -z-10'
                                        style={{
                                            background: "url(https://github.com/bangkbdtvtcm/file/blob/main/noise.png?raw=true)",
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            opacity: 0.1,
                                        }}
                                    >
                                    </div>
                                    <div className='absolute inset-0 -z-20'
                                        style={{
                                            background:
                                                "linear-gradient(0deg, rgba(252, 252, 252, 0.07), rgba(252, 252, 252, 0.07)),linear-gradient(170.8deg, rgba(242, 72, 34, 0) 31.99%, rgba(242, 72, 34, 0.7) 110.95%),linear-gradient(171.83deg, rgba(242, 72, 34, 0.25) 88.8%, rgba(242, 72, 34, 0.5) 109.82%)",
                                            backdropFilter: "blur(80px)",
                                        }}
                                    >
                                    </div>
                                    {/* Header */}
                                    <div className='flex items-center justify-end gap-4 z-30'>
                                        <button
                                            className='rounded-[20px] lg:rounded-full p-2 cursor-pointer w-[56px] h-10 md:w-auto md:h-auto flex flex-col justify-center items-center'
                                            style={{
                                                backgroundColor: 'rgba(252, 252, 252, 0.07)',
                                            }}
                                            onClick={() => {
                                                setIsContactOpen(false);
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6 text-[#fcfcfc] opacity-60">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Content */}
                                    <div className='sticky bottom-0 flex flex-col justify-end md:px-3 px-2 z-10'>
                                        <div className='flex flex-col gap-10 flex-1'>
                                            <h1 className='subtitle-1-regular'>
                                                Let&apos;s collab!
                                            </h1>
                                            <p className='body-2-regular mb-auto'>
                                                We&apos;re available from Monday <br />to Friday, 09:00 - 18:30
                                            </p>
                                            <div className='flex flex-col gap-10'>
                                                {contacts.map((contact, index) => (
                                                    <div key={`contact-${index}`} className={`z-${20 + index * 20}`}>
                                                        <ContactInfo contact={contact} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default ContactModal;
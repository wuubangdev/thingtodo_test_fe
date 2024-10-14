import Image from 'next/image';
import React from 'react';

export interface IFeedback {
    id: string;
    topLetter: string;
    botLetter: string;
    clientLogo: string;
    client: {
        clientAvatar: string;
        clientName: string;
        clientDescription: string;
    }
}

const FeedbackCard = (props: IFeedback) => {
    const { topLetter, botLetter, clientLogo, client } = props;
    return (
        <>
            {/* Desktop */}
            <div className='hidden md:flex flex-col mx-5  text-[#FCFCFC]'>
                <div className='flex flex-1 flex-col gap-28 pb-6 border-b-[1px] border-[#666D74]'>
                    <div className='pr-[352px]'>
                        <p className='title-1-regular line-clamp-6'>
                            "{topLetter}
                            <span className='title-1-medium'>Thing To Do Agency </span>
                            {botLetter}"
                        </p>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        {/* Client logo */}
                        <div className='flex items-center gap-8'>
                            <div>
                                <Image
                                    alt='feedback-logo'
                                    src={clientLogo}
                                    width={143}
                                    height={60}
                                    className='h-full w-auto'
                                />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <div className='w-1/5'>
                                <Image
                                    alt='feedback-logo'
                                    src={'/logo/THINGTODO-WHITE.svg'}
                                    width={143}
                                    height={60}
                                    className='w-full h-auto'
                                />
                            </div>
                        </div>
                        {/* Client info */}
                        <div className='flex gap-6'>
                            <div className='h-full'>
                                <Image
                                    alt='feedback-logo'
                                    src={client.clientAvatar}
                                    width={48}
                                    height={48}
                                    className='w-auto h-full rounded-[40px] scale-120'
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='body-2-semibold'>{client.clientName}</h2>
                                <p className='body-3-light'>{client.clientDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className='md:hidden flex flex-col  text-[#FCFCFC] mx-2'>
                <div className='flex flex-1 flex-col gap-28 pb-6 border-b-[1px] border-[#666D74] border-dashed'>
                    <div className=''>
                        <p className='subtitle-1-regular line-clamp-[10]'>
                            "{topLetter}
                            <span className='subtitle-1-regular'> Thing To Do Agency </span>
                            {botLetter}"
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        {/* Client logo */}
                        <div>
                            <Image
                                alt='feedback-logo'
                                src={clientLogo}
                                width={143}
                                height={60}
                                className='h-full w-auto'
                            />
                        </div>
                        {/* Client info */}
                        <div className='flex gap-6 items-center '>
                            <div className='h-full'>
                                <Image
                                    alt='feedback-logo'
                                    src={client.clientAvatar}
                                    width={48}
                                    height={48}
                                    className='w-auto h-full rounded-[40px] scale-120'
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='body-2-semibold'>{client.clientName}</h2>
                                <p className='body-3-light'>{client.clientDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedbackCard;
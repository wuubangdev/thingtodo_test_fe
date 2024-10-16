'use client';
import React, { useRef, useState } from 'react';
import Slider, { Settings } from "react-slick";
import FeedbackCard, { IFeedback } from './FeedbackCard';
import Image from 'next/image';

const feedbacks: IFeedback[] = [
    {
        id: '1',
        topLetter: 'Working with',
        botLetter: 'has been a perfect experience. Their team is expertise and attention to detail have resulted in packaging that truly represents our brand.',
        clientLogo: '/feedback/LogoVNM.svg',
        client: {
            clientAvatar: '/feedback/NDA_Avatar.svg',
            clientName: 'Ngo Duc Anh',
            clientDescription: 'Brand Manager',
        }

    },
    {
        id: '2',
        topLetter: 'The packaging design created by ',
        botLetter: 'perfectly captures our brand essence and has exceeded our expectations. It is the perfect match for our target audience.',
        clientLogo: '/feedback/Logohuggues.svg',
        client: {
            clientAvatar: '/feedback/HAD_Avatar.svg',
            clientName: 'Ha Anh Duc',
            clientDescription: 'Marketing Director',
        }
    }
]

const ClientFeedBack: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => setCurrentPage(current + 1),
    };

    return (
        <div className='md:px-6 px-4 flex flex-col gap-12'>
            <div className='border-b-[0.5px] pb-4 border-[#666D74] flex justify-between items-center'>
                <div className='flex gap-12 items-center'>
                    <h1 className='body-2-medium text-white'>
                        CLIENT FEEDBACKS
                    </h1>
                    <div className='text-white body-2-bold'>
                        {currentPage <= 9 ? `0${currentPage}` : currentPage}
                        <span className='body-2-regular text-[#80868B]'>
                            /{feedbacks.length <= 9 ? `0${feedbacks.length}` : feedbacks.length}
                        </span>
                    </div>
                </div>
                <div className='flex gap-6 items-center pr-3'>
                    <Image
                        alt='feedback-arrow-left'
                        src={'/feedback/arrow_right.svg'}
                        width={28}
                        height={20}
                        className='h-full w-auto rotate-180 translate-x-full cursor-pointer hover:scale-x-150 origin-left duration-500'
                        onClick={() => sliderRef.current?.slickPrev()}
                    />
                    <Image
                        alt='feedback-arrow-left'
                        src={'/feedback/arrow_right.svg'}
                        width={28}
                        height={20}
                        className='h-full w-auto cursor-pointer hover:scale-x-150 origin-left duration-500'
                        onClick={() => sliderRef.current?.slickNext()}
                    />
                </div>
            </div>
            <div>
                <Slider ref={sliderRef} {...settings} className='flex duration-500'>
                    {feedbacks && feedbacks.map((feedback) => (
                        <FeedbackCard
                            key={feedback.id}
                            id={feedback.id}
                            topLetter={feedback.topLetter}
                            botLetter={feedback.botLetter}
                            clientLogo={feedback.clientLogo}
                            client={feedback.client}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientFeedBack;

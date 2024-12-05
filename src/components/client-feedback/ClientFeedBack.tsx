
'use client'
import { useRef, useState } from 'react';
import Slider, { Settings } from "react-slick";
import FeedbackCard from './FeedbackCard';

interface IProps {
    clientFeedback: IClientFeedback[]
}

const ClientFeedBack: React.FC<IProps> = ({ clientFeedback }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current: number) => {
            setCurrentPage(current + 1);
        },
    };

    return (
        <div className='md:px-6 px-4 flex flex-col gap-12'>
            <div className='border-b-[0.5px] pb-4 border-[#666D74] flex justify-between md:items-center items-end'>
                <div className='flex gap-4 flex-col md:flex-row md:items-center items-start'>
                    <h1 className='body-2-medium text-white'>
                        CLIENT FEEDBACKS
                    </h1>
                    <div className='text-white body-2-bold'>
                        {currentPage <= 9 ? `0${currentPage}` : currentPage}
                        <span className='body-2-regular text-[#80868B]'>
                            /{clientFeedback.length <= 9 ? `0${clientFeedback.length}` : clientFeedback.length}
                        </span>
                    </div>
                </div>
                <div className='flex gap-6 md:items-center'>
                    <div
                        className='flex items-center group h-full cursor-pointer rotate-180 relative'
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                        <div className='absolute right-0 -translate-x-1 scale-x-300'>
                            <svg
                                className='text-white'
                                width="10"
                                height="21"
                                viewBox="0 0 10 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2060_990)">
                                    <path
                                        d="M-27.7681 9.93218V11.0994L-18.3675 20.5L-17.295 19.3959L-25.3076 11.4306V11.2886L10 11.2886V9.71136L-25.3076 9.71136V9.58517L-17.295 1.6041L-18.3675 0.5L-27.7681 9.93218Z"
                                        fill="#FCFCFC"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2060_990">
                                        <rect width="10" height="20" fill="white" transform="matrix(-1 0 0 1 10 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className='group-hover:translate-x-6 translate-x-2 duration-500'>
                            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2060_996)">
                                    <path
                                        d="M27.7681 9.93218V11.0994L18.3675 20.5L17.295 19.3959L25.3076 11.4306V11.2886L10 11.2886V9.71136L25.3076 9.71136V9.58517L17.295 1.6041L18.3675 0.5L27.7681 9.93218Z"
                                        fill="#FCFCFC" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2060_996">
                                        <rect width="28" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div
                        className='flex items-center group h-full cursor-pointer relative'
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                        <div className='absolute left-0 group-hover:scale-x-300 scale-x-150 origin-right duration-500'>
                            <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2060_990)">
                                    <path
                                        d="M-27.7681 9.93218V11.0994L-18.3675 20.5L-17.295 19.3959L-25.3076 11.4306V11.2886L10 11.2886V9.71136L-25.3076 9.71136V9.58517L-17.295 1.6041L-18.3675 0.5L-27.7681 9.93218Z"
                                        fill="#FCFCFC" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2060_990">
                                        <rect width="10" height="20" fill="white" transform="matrix(-1 0 0 1 10 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className=' duration-500'>
                            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2060_996)">
                                    <path
                                        d="M27.7681 9.93218V11.0994L18.3675 20.5L17.295 19.3959L25.3076 11.4306V11.2886L10 11.2886V9.71136L25.3076 9.71136V9.58517L17.295 1.6041L18.3675 0.5L27.7681 9.93218Z"
                                        fill="#FCFCFC" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2060_996">
                                        <rect width="28" height="20" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Slider ref={sliderRef} {...settings} className='flex duration-500'>
                    {clientFeedback.map((feedback) => (
                        <FeedbackCard
                            key={feedback.id}
                            clientFeedback={feedback}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientFeedBack;

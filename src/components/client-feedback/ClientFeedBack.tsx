
'use client'
import { useRef, useState } from 'react';
import Slider, { Settings } from "react-slick";
import FeedbackCard, { IFeedback } from './FeedbackCard';

const feedbacks: IFeedback[] = [
    {
        id: '1',
        title: 'Working with Thing to do has been a perfect experience. Their team is expertise and attention to detail have resulted in packaging that truly represents our brand.',
        clientLogo: '/feedback/LogoVNM.svg',
        client: {
            clientAvatar: '/feedback/NDA_Avatar.svg',
            clientName: 'Ngo Duc Anh',
            clientDescription: 'Brand Manager',
        }
    },
    {
        id: '2',
        title: 'The packaging design created by Thing to do perfectly captures our brand essence and has exceeded our expectations. It is the perfect match for our target audience.',
        clientLogo: '/feedback/Logohuggues.svg',
        client: {
            clientAvatar: '/feedback/HAD_Avatar.svg',
            clientName: 'Ha Anh Duc',
            clientDescription: 'Marketing Director',
        }
    }
];

const ClientFeedBack: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    // const [fade, setFade] = useState<boolean>(true); // Thêm trạng thái fade
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // beforeChange: () => setFade(false), // Khi bắt đầu chuyển đổi, đặt fade về false
        afterChange: (current: number) => {
            setCurrentPage(current + 1);
            // setFade(true); // Khi kết thúc chuyển đổi, đặt fade về true
        },
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
                <div className='flex gap-2 items-center'>
                    <div
                        className='flex items-center group h-full cursor-pointer rotate-180 relative'
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                        <div className='absolute right-0 -translate-x-1 scale-x-150'>
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
                        <div className='group-hover:translate-x-4 translate-x-2 duration-500'>
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
                        <div className='absolute left-0 group-hover:scale-x-150 origin-right duration-500'>
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
                    {feedbacks.map((feedback) => (
                        // <div key={feedback.id} className={`slide ${fade ? 'fade-in' : 'fade-out'}`}>
                        <FeedbackCard
                            key={feedback.id}
                            id={feedback.id}
                            title={feedback.title}
                            clientLogo={feedback.clientLogo}
                            client={feedback.client}
                        />
                        // </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientFeedBack;

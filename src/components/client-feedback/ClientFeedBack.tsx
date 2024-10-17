
'use client'
import { useRef, useState } from 'react';
import Slider, { Settings } from "react-slick";
import FeedbackCard, { IFeedback } from './FeedbackCard';
import Image from 'next/image';

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

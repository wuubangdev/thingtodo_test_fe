import React from 'react';

interface ICarouselItem {
    title: string;
    link: string;
}

const CarouselItem: React.FC<ICarouselItem> = ({ link, title }) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='rounded-[1.25rem] pt-[177.78%] bg-slate-500'>
            </div>
            <p className='portfolio-carousel-item'>{title}</p>
        </div>
    )
}

export default CarouselItem
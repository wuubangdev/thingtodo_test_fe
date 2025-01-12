import React from 'react';

interface ICarouselItem {
    link?: string;
}

const CarouselItem: React.FC<ICarouselItem> = ({ link }) => {
    return (
        <div className='flex flex-col gap-4 mx-4'>
            <div className='w-full'>
                <div className='rounded-[1.25rem] pt-[400px] bg-slate-500'>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem
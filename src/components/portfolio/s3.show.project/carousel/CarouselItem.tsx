import Image from 'next/image';
import React from 'react';

export interface ICarouselItem {
    title: string;
    link: string;
}

const CarouselItem: React.FC<ICarouselItem> = ({ link, title }) => {
    return (
        <div className='flex flex-col gap-4 mx-4'>
            <div className='w-full'>
                <div className='rounded-[1.25rem]'>
                    <Image
                        alt='project-tet-other'
                        src={link}
                        width={320}
                        height={400}
                        className='w-full'
                    />
                </div>
            </div>
            <p className='portfolio-carousel-item'>{title}</p>
        </div>
    )
}

export default CarouselItem
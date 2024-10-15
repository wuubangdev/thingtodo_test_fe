import Image from 'next/image';
import React from 'react';
import MovingImage from './MovingImage';

export interface IService {
    id: number;
    title: string;
    icon: string;
    image: string;
    description: string;
    subService: string[];
}

const CardService = (props: IService) => {
    const { id, title, icon, image, description, subService } = props;
    return (
        <div>
            {/* Desktop */}
            <div
                className='px-6 md:block hidden relative'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 pt-3 pb-6 gap-6 border-t-[1px] '>
                    <div className='title-3-medium'>
                        (0{id})
                    </div>
                    <div className='flex items-center justify-between'>
                        <h2 className='title-3-medium'>{title}</h2>
                        <Image
                            alt='icon-service'
                            src={icon}
                            width={28}
                            height={28}
                            style={{
                                height: '70%',
                                width: 'auto'
                            }}
                            className='md:block hidden'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 pt-3 pb-6 gap-6'>
                    <div>
                    </div>
                    <div className='flex flex-col gap-3 pb-[120px]'>
                        <p className='body-2-regular'>{description}</p>
                        <ul>
                            {subService && subService.map((item, index) => (
                                <li key={index} className='border-b-[1px] py-4 flex items-center gap-2 '>
                                    <p className='subtitle-3-medium text-[#959A9F]'>0{index + 1}</p>
                                    <p className='subtitle-2-medium'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='absolute w-full h-full top-0 left-0 right-0'>
                    <div className='grid grid-cols-2 h-full'>
                        <div>
                            <MovingImage image={image} />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div
                className='md:hidden px-4 flex flex-col gap-14'
            >
                <div className='flex pt-3 pb-6 gap-2 border-t-[1px]'>
                    <div className='subtitle-1-medium'>
                        (0{id})
                    </div>
                    <h2 className='subtitle-1-medium'>{title}</h2>
                </div>
                <div className='grid grid-cols-1 pb-20 gap-20'>
                    <div>
                        <Image
                            alt='icon-service'
                            src={image}
                            width={240}
                            height={240}
                            style={{
                                height: 'auto',
                                width: '100%'
                            }}
                            className='md:hidden block'
                        />
                    </div>
                    <div className='flex flex-col gap-3 pb-[120px]'>
                        <p className='body-3-regular'>{description}</p>
                        <ul>
                            {subService && subService.map((item, index) => (
                                <li key={index} className='border-b-[1px] py-4 flex items-center gap-2 '>
                                    <p className='subtitle-3-medium text-[#959A9F]'>0{index + 1}</p>
                                    <p className='subtitle-2-medium'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardService;
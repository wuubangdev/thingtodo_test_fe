'use client';
import Image from 'next/image';
import MovingImage from './MovingImage';

export interface IService {
    id: number;
    title: string;
    icon: string;
    image: string;
    description: string;
    subService: string[];
}

interface IProps {
    service: IService;
    index: number;
    total: number
}

const CardService = (props: IProps) => {
    const { index, service, total } = props;

    return (
        <>
            <div
                className={`sticky bg-bg-fc md:block hidden`}
                style={{
                    top: `calc(0vh + ${5.25 * index + 5.25}rem)`,
                    marginBottom: `${5.25 * total - 5.25 * index - 5.25}rem`,
                    zIndex: 1,
                }}
            >
                {/* Desktop */}
                <div
                    className={`px-6 relative`}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 pt-3 pb-6 gap-6 border-t-[1px] '>
                        <div className='title-3-medium'>
                            (0{index + 1})
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='title-3-medium'>{service.title}</h2>
                            <Image
                                alt='icon-service'
                                src={service.icon}
                                width={28}
                                height={28}
                                style={{
                                    height: '70%',
                                    width: 'auto'
                                }}
                                className='md:block hidden'
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 pt-3 pb-6 gap-6'>
                        <div>
                        </div>
                        <div className='flex flex-col gap-3 pb-[120px]'>
                            <p className='body-2-regular'>{service.description}</p>
                            <ul>
                                {service.subService && service.subService.map((item, index) => (
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
                                <MovingImage image={service.image} />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div
                className='md:hidden px-4 flex flex-col gap-14'
            >
                <div className='flex pt-3 pb-6 gap-2 border-t-[1px]'>
                    <div className='subtitle-1-medium'>
                        (0{index + 1})
                    </div>
                    <h2 className='subtitle-1-medium'>{service.title}</h2>
                </div>
                <div className='grid grid-cols-1 pb-20 gap-20'>
                    <div>
                        <Image
                            alt='icon-service'
                            src={service.image}
                            width={240}
                            height={240}
                            style={{
                                height: 'auto',
                                width: '100%'
                            }}
                            className='md:hidden block'
                            loading="lazy"
                        />
                    </div>
                    <div className='flex flex-col gap-3 pb-[120px]'>
                        <p className='body-3-regular'>{service.description}</p>
                        <ul>
                            {service.subService && service.subService.map((item, index) => (
                                <li key={index} className='border-b-[1px] py-4 flex items-center gap-2 '>
                                    <p className='subtitle-3-medium text-[#959A9F]'>0{index + 1}</p>
                                    <p className='subtitle-2-medium'>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardService;
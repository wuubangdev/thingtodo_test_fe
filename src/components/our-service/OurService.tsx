import React from 'react'
import CardService, { IService } from './CardService';

const services: IService[] = [
    {
        id: 1,
        title: 'Digital Asset',
        icon: '/service/icon1.svg',
        description: 'Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.',
        subService: ['Social Media Asset', 'E-commerce Visual', 'Website Asset']
    },
    {
        id: 2,
        title: 'Video Production',
        icon: '/service/icon2.svg',
        description: 'Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.',
        subService: ['Commercial videos', 'Documentary videos', 'Corporate videos']
    },
    {
        id: 3,
        title: 'Packaging',
        icon: '/service/icon3.svg',
        description: 'Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.',
        subService: ['Structural design', 'Branding integration', 'Sustainability solutions']
    },
    {
        id: 4,
        title: 'CGI, VFX',
        icon: '/service/icon4.svg',
        description: 'Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.',
        subService: ['Character animation', 'Environmental effects', 'Product visualization']
    },
]

const OurService = () => {
    return (
        <div>
            <div className='md:pb-28 pb-20'>
                {/* Desktop */}
                <div className='hidden md:grid grid-cols-2 pt-3 pb-4 px-6 items-end gap-6'>
                    <div className='headline-4'>
                        HOW CAN WE  HELP YOU?
                    </div>
                    <div className='subtitle-2-medium'>
                        [Our Services]
                    </div>
                </div>
                {/* Mobile */}
                <div className='grid md:hidden grid-cols-1 md:grid-cols-2 pt-6 pb-6 px-4 items-end gap-6'>
                    <div className='title-2-medium'>
                        HOW CAN WE  HELP YOU?
                    </div>
                    <div className='subtitle-2-medium text-[#666D74]'>
                        [Our Services]
                    </div>
                </div>
            </div>
            {services && services.map((service, index) => (
                <CardService
                    key={index}
                    id={service.id}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                    subService={service.subService}
                />
            ))}
        </div>
    )
}

export default OurService;
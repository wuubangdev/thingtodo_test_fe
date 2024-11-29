import React from 'react'
import CardService from './CardService';

interface IProps {
    services: IService[];
}

const OurService = (props: IProps) => {
    const { services } = props;
    return (
        <div id='service' className='bg-bg-fc pt-4'>
            <div className='md:pb-28 pb-20'>
                {/* Desktop */}
                <div className='hidden lg:grid grid-cols-2 pt-3 pb-4 px-6 items-end gap-6'>
                    <div className='headline-4'>
                        HOW CAN WE  HELP YOU?
                    </div>
                    <div className='subtitle-2-medium'>
                        [Our Services]
                    </div>
                </div>
                {/* Mobile */}
                <div className='grid lg:hidden grid-cols-1 pt-6 pb-6 px-4 items-end gap-6 sticky top-0'>
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
                    service={service}
                    total={services.length}
                    index={index}
                />
            ))}
        </div>
    )
}

export default OurService;
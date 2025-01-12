import Image from 'next/image'
import React from 'react'

const PortCTA = () => {
    return (
        <div className='px-5 flex gap-5 portfolio-cta-marquee'>
            <span className='py-5'>Chốt liền.</span>
            <Image
                alt=''
                src={'/portfo_access/cta/cta_pic1.svg'}
                width={158}
                height={139}
                className='h-[120%]'
            />
            <span className='py-5'>Chốt liền.</span>
            <Image
                alt=''
                src={'/portfo_access/cta/cta_pic2.svg'}
                width={158}
                height={139}
                className='h-[120%]'
            />
        </div>
    )
}

export default PortCTA
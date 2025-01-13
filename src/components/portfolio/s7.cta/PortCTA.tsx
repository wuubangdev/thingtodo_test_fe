import { useCursorVariantContext } from '@/components/context/CursorVariantContext';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const PortCTA = () => {
    const { setCursorVariant } = useCursorVariantContext();
    const enterContact = () => setCursorVariant('contact');
    const leaveContact = () => setCursorVariant('default');
    return (
        <Link
            href={"mailto:contact@thingtodo.vn"}
            className='px-5 flex gap-5 portfolio-cta-marquee'
            onMouseOver={() => enterContact()}
            onMouseLeave={() => leaveContact()}
            style={{ cursor: 'none' }}
        >
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
        </Link>
    )
}

export default PortCTA
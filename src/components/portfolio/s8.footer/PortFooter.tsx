import React from 'react'
import FooterHeading from './FooterHeading';
import GameCarousel from './carousel/GameCarousel';
import FooterSocial from './FooterSocial';

const PortFooter = () => {
    return (
        <div
            className='relative z-20 -mt-20'
            style={{
                borderRadius: '5rem 5rem 0px 0px',
                padding: '5rem 0rem 1.5rem 0rem',
                background: '#131E29'
            }}
        >
            <FooterHeading />
            <GameCarousel />
            <FooterSocial />
        </div>
    )
}

export default PortFooter;
{/* S7: CTA */ }
import React from 'react';
import Marquee from 'react-fast-marquee';
import PortCTA from './PortCTA';

const CTA = () => {
    return (
        <div className='bg-[#9EFEFD]'>
            <Marquee
                speed={100}
                direction='left'
                pauseOnHover={true}
                loop={0}
                style={{ cursor: 'pointer' }}
            >
                <PortCTA />
                <PortCTA />
                <PortCTA />
            </Marquee>
            <div className='w-full'>
                <video
                    className='w-full'
                    autoPlay
                    muted
                    loop
                    style={{
                        width: "100%",
                    }}
                >
                    <source src={`https://ttdasset.s3.ap-southeast-1.amazonaws.com/portfolio/kem.webm`} type="video/webm" />
                </video>
            </div>
        </div>
    )
}

export default CTA;
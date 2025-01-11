{/* S5: Ai Generate */ }
import React from 'react';
import CGIHeading from './CGIHeading';
import CGIContent from './CGIContent';
import CGIFooter from './CGIFooter';

const AiGenerateAndCGI = () => {
    return (
        <div
            className='flex flex-col items-center gap-20'
            style={{
                borderRadius: '5rem 5rem 0px 0px',
                padding: '7.5rem 7.5rem 0px 7.5rem',
                background: '#131E29'
            }}
        >
            <CGIHeading />
            <CGIContent />
            <CGIFooter />
        </div>
    )
}

export default AiGenerateAndCGI;
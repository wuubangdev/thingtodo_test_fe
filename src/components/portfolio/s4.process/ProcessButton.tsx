import React from 'react'



const ProcessButton: React.FC = () => {
    return (
        <div className='flex justify-end items-center py-6 px-14 w-full'
            style={{
                borderRadius: '2.813rem',
                background: 'linear-gradient(270deg, #601FEB 13.43%, #A369EE 28.58%, #FBBD37 54.26%, #D0FFCA 66.24%, #9EFEFD 75.69%, #66C4EA 92.21%)',
            }}
        >
            <div className='portfolio-process-item'>
                <span className='text-white font-bold'>Kem ngonnn. Game on.</span>
            </div>
        </div>
    )
}

export default ProcessButton;
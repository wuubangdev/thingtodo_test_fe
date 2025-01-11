import React from 'react'



const ProcessButton: React.FC = () => {
    return (
        <div className='flex justify-end items-center py-6 px-14 w-full'
            style={{
                borderRadius: '2.813rem',
                background: 'linear-gradient(90deg, #131E29 0%, #687683 45.5%, #384450 57%, #576471 73.5%)',
            }}
        >
            <div className='portfolio-process-item'>
                <span className='text-white font-bold'>Kem ngonnn. Game on.</span>
            </div>
        </div>
    )
}

export default ProcessButton;
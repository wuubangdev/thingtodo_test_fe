import React from 'react'

const LoadingState = ({ percent, percentNumber }: { percent: number; percentNumber: number }) => {
    return (
        <>
            <div className='md:flex hidden w-screen h-screen items-center justify-center'>
                <div
                    className='flex justify-center items-center'
                    style={{
                        width: percent <= 99 ? percent * 10 : '100vw',
                        height: percent <= 99 ? percent * 10 : '100vh',
                        borderRadius: percent <= 99 ? '50%' : '0',
                        background: percent >= 19 ? '#fa4616' : '',
                    }}
                >
                    <div className='title-1-medium flex items-center justify-center text-white'>
                        {percentNumber}
                        <span className='title-3-medium'>%</span>
                    </div>
                </div>
            </div>
            <div className='flex md:hidden w-screen h-screen items-center justify-center'>
                <div
                    className='flex justify-center items-center'
                    style={{
                        width: percent <= 99 ? percent * 5 : '100vw',
                        height: percent <= 99 ? percent * 5 : '100vh',
                        borderRadius: percent <= 99 ? '50%' : '0',
                        background: percent >= 19 ? '#fa4616' : '',
                    }}
                >
                    <div className='title-3-medium flex items-center justify-center text-white'>
                        {percentNumber}
                        <span className='title-3-medium'>%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingState
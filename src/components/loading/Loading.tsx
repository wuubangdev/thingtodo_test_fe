'use client'
import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [percent, setPercent] = useState<number>(10);

    useEffect(() => {
        setPercent(1);

    }, [])

    return (
        <div className='flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-white'>
            <div className='relative'>
                <div
                    className='bg-primary w-72 h-72 rounded-[50%] flex justify-center items-center'
                    style={{
                        transform: `Scale(${100 + percent}%)`
                    }}
                >
                </div>
                <div className='headline-4 absolute top-1/2 w-1/2 translate-x-1/3 -translate-y-1/2 text-white'>
                    {percent < 10 ? `0${percent}` : percent}%
                </div>
            </div>
        </div>
    )
}

export default Loading;
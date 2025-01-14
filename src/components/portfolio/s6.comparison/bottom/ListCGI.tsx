import React from 'react';

interface ILabel {
    labelType: 'all' | 'AI' | 'CGI'
}

const Label: React.FC<ILabel> = ({ labelType }) => {
    return (
        <div >
            {labelType === 'all'
                ?
                <div className='flex gap-2'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="64" viewBox="0 0 48 64" fill="none">
                            <path d="M0 -0.219727H48V50.7803L24 63.7803L0 50.7803V-0.219727Z" fill="url(#paint0_linear_3127_152)" />
                            <defs>
                                <linearGradient id="paint0_linear_3127_152" x1="69.9485" y1="92.91" x2="69.9485" y2="-0.219728" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FBBD37" />
                                    <stop offset="0.54654" stopColor="#D0FFCA" />
                                    <stop offset="1" stopColor="#28BAF5" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='text-[#131E29] relative -top-10 w-full text-center'>CGI</div>
                    </div>
                    <div className='w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="64" viewBox="0 0 48 64" fill="none">
                            <path d="M0 -0.219727H48V50.7803L24 63.7803L0 50.7803V-0.219727Z" fill="#9EFEFD" />
                        </svg>
                        <div className='text-[#131E29] relative -top-10 w-full text-center'>AI</div>
                    </div>
                </div>
                :
                labelType === 'AI'
                    ?
                    <div className='flex gap-2'>
                        <div className='w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="64" viewBox="0 0 48 64" fill="none">
                                <path d="M0 -0.219727H48V50.7803L24 63.7803L0 50.7803V-0.219727Z" fill="#9EFEFD" />
                            </svg>
                            <div className='text-[#131E29] relative -top-10 w-full text-center'>AI</div>
                        </div>
                    </div>
                    :
                    <div className='flex gap-2'>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="64" viewBox="0 0 48 64" fill="none">
                                <path d="M0 -0.219727H48V50.7803L24 63.7803L0 50.7803V-0.219727Z" fill="url(#paint0_linear_3127_152)" />
                                <defs>
                                    <linearGradient id="paint0_linear_3127_152" x1="69.9485" y1="92.91" x2="69.9485" y2="-0.219728" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FBBD37" />
                                        <stop offset="0.54654" stopColor="#D0FFCA" />
                                        <stop offset="1" stopColor="#28BAF5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className='text-[#131E29] relative -top-10 w-full text-center'>CGI</div>
                        </div>
                    </div>
            }
        </div>
    )
}

const ListCGI = () => {
    return (
        <div className='portfolio-carousel-item w-full grid grid-cols-3 gap-9'>
            <div className='flex flex-col gap-4 relative'>
                <div className='w-full pt-[136%] bg-slate-400 rounded-[1.25rem]'>
                </div>
                <span className='text-[#fcfcfc]'>Shoot #1</span>
                <div className='absolute right-[18px]'>
                    <Label labelType='all' />
                </div>
            </div>
            <div className='flex flex-col gap-4 relative'>
                <div className='w-full pt-[136%] bg-slate-400 rounded-[1.25rem]'>
                </div>
                <span className='text-[#fcfcfc]'>Shoot #2</span>
                <div className='absolute right-[18px]'>
                    <Label labelType='AI' />
                </div>
            </div>
            <div className='flex flex-col gap-4 relative'>
                <div className='w-full pt-[136%] bg-slate-400 rounded-[1.25rem]'>
                </div>
                <span className='text-[#fcfcfc]'>Shoot #3</span>
                <div className='absolute right-[18px]'>
                    <Label labelType='CGI' />
                </div>
            </div>
        </div>

    )
}

export default ListCGI
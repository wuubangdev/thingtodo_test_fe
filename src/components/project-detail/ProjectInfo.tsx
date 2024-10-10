import React from 'react';
import CategoryButton from '../category/CategoryButton';
import Link from 'next/link';


const ProjectInfo = () => {
    return (
        <div className='pt-16'>
            <div className='md:hidden block pb-16'>
                <Link
                    href={'/projects'}
                    className='py-3 flex gap-3 body-2-medium'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    BACK
                </Link>
            </div>
            <div className='flex flex-col gap-6'>
                {/* Top */}
                <h1 className='title-1-medium md:hidden block pb-10'>Project details from 8 to 10 characters</h1>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='body-4-medium text-black'>Overview</h1>
                        <p className='body-3-regular text-t-back-blur'>Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='body-4-medium text-black'>Client</h1>
                            <p className='text-sm text-t-back-blur'>Vinamilk</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='body-4-medium'>Year</h1>
                            <p className='text-sm text-t-back-blur'>2024</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='body-4-medium'>Categogy</h1>
                        <div className='flex gap-3'>
                            <CategoryButton
                                title='FMCG'
                                variant='FMCG'
                            />
                            <CategoryButton
                                title='Packaging'
                                variant='Packaging'
                            />
                        </div>
                    </div>
                </div>
                {/* Bot */}
                <div className='flex flex-col gap-3'>
                    <h5 className='body-4-medium'>Results</h5>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>23+</p>
                        <span className='body-4-regular justify-end text-t-back-blur'>Customer Segments</span>
                    </div>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>55+</p>
                        <span className='body-4-regular justify-end text-t-back-blur'>Automation flow</span>
                    </div>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>400%</p>
                        <span className='body-4-regular justify-end text-t-back-blur text-right'>Increase quantity of sampling broadcast</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;
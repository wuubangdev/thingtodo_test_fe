import React from 'react';
import CategoryButton from '../category/CategoryButton';


const ProjectInfo = () => {
    return (
        <div className='pt-32'>
            <div className='flex flex-col gap-6'>
                {/* Top */}
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='body-4-medium'>Overview</h1>
                        <p className='body-3-regular'>Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='body-4-medium'>Client</h1>
                            <p className='text-sm'>Vinamilk</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='body-4-medium'>Year</h1>
                            <p className='text-sm'>2024</p>
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
                        <span className='body-4-regular justify-end'>Customer Segments</span>
                    </div>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>55+</p>
                        <span className='body-4-regular justify-end'>Automation flow</span>
                    </div>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>400%</p>
                        <span className='body-4-regular justify-end'>Increase quantity of sampling broadcast</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;
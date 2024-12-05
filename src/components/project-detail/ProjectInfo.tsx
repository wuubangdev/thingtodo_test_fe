import React from 'react';
import CategoryButton from '../category/CategoryButton';
import Link from 'next/link';

interface IProps {
    project: IProject;
}

const ProjectInfo: React.FC<IProps> = ({ project }) => {
    return (
        <div className='pt-16 md:h-screen md:sticky md:top-5'>
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
                <h1 className='title-2-medium md:hidden block pb-10'>{project.title}</h1>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='body-4-medium text-black'>Overview</h1>
                        <p className='body-3-regular text-t-back-blur'>{project.overView}</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='body-4-medium text-black'>Client</h1>
                            <p className='text-sm text-t-back-blur'>{project?.clients[0]?.clientCompany ?? ""}</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='body-4-medium'>Year</h1>
                            <p className='text-sm text-t-back-blur'>{project.year}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='body-4-medium'>Categogy</h1>
                        <div className='flex gap-3'>
                            {project && project.category && project.category.map((item) => (
                                <CategoryButton
                                    key={item}
                                    title={`${item}`}
                                    variant='FMCG'
                                />
                            ))}

                        </div>
                    </div>
                </div>
                {/* Bot */}
                <div className='flex flex-col gap-3'>
                    <h5 className='body-4-medium'>Results</h5>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>{project.customerSegments}+</p>
                        <span className='body-4-regular justify-end text-t-back-blur'>Customer Segments</span>
                    </div>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>{project.automationFlow}+</p>
                        <span className='body-4-regular justify-end text-t-back-blur'>Automation flow</span>
                    </div>
                    <div className='flex justify-between items-center gap-2 pb-3 border-b-[1px] border-[#959A9F] border-dotted'>
                        <p className='subtitle-3-semibold'>{project.increaseQuantity}%</p>
                        <span className='body-4-regular justify-end text-t-back-blur text-right'>Increase quantity of sampling broadcast</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo;
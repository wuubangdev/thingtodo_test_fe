import React from 'react';
import Link from 'next/link';
import ProjectContent from '@/components/project-detail/ProjectContent';
import ProjectInfo from '@/components/project-detail/ProjectInfo';
import ProjectRelease from '@/components/project-detail/ProjectRelease';

const ProjectDetailPage = () => {
    return (
        <>
            <div className='flex flex-col gap-20 pb-20'>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-28 px-6'>
                    <div className='md:col-span-1'>
                        <ProjectInfo />
                    </div>
                    <div className='md:col-span-2'>
                        <ProjectContent />
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-36 px-6'>
                        <div className='md:col-span-1'>
                        </div>
                        <div className='md:col-span-2 flex md:gap-6 flex-col md:flex-row md:items-end'>
                            <div>
                                <Link
                                    href={'/projects'}
                                    className='py-3  items-center gap-4 title-2-medium hidden md:flex'
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-12 rotate-180"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                    Next Project
                                </Link>
                                <Link
                                    href={'/projects'}
                                    className='py-3 flex items-center gap-4 md:hidden subtitle-1-medium'
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-12 rotate-180"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                    Next Project
                                </Link>
                            </div>
                            <div className='subtitle-3-regular md:py-3 pl-16 md:pl-0 text-[#666D74]'>
                                Project details, 8-10 <br />characters
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectRelease />
        </>
    )
}

export default ProjectDetailPage;
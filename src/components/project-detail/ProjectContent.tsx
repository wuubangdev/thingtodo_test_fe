import Link from 'next/link';
import React from 'react'
import ProjectList from './ProjectList';

const ProjectContent = () => {
    return (
        <div className='flex flex-col gap-16 pt-10'>
            {/* Back */}
            <div className='md:block hidden sticky top-0 h-auto bg-white'>
                <Link
                    href={'/projects'}
                    className='flex py-2 gap-3 body-2-medium'
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
            <div className='flex flex-col gap-20'>
                <h1 className='title-1-medium md:block hidden'>Project details from 8 to 10 characters</h1>
                <ProjectList />
            </div>
        </div>
    )
}

export default ProjectContent;
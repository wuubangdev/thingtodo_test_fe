import ContentProject from '@/components/projects/ContentProject';
import React from 'react'

const ProjectPage = () => {
    return (
        <div className='md:pt-20 pt-7 pb-28 flex flex-col md:gap-28 gap-10'>
            <div className='px-5 flex justify-between items-end'>
                <h1 className='md:block hidden headline-4 text-black'>Selected projects 2022-2024</h1>
                <h1 className='title-2-medium md:hidden block text-black'>Selected projects 2022-2024</h1>
                <h3 className='md:block hidden body-2-regular'>(SCROLL)</h3>
            </div>
            <ContentProject />
        </div>
    )
}

export default ProjectPage;
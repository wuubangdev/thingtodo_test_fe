import ProjectContent from '@/components/project-detail/ProjectContent';
import ProjectInfo from '@/components/project-detail/ProjectInfo';
import React from 'react'

const ProjectDetailPage = () => {
    return (
        <div className='flex flex-col gap-28'>
            <div className='grid grid-cols-3 gap-36 px-6'>
                <div className='col-span-1'>
                    <ProjectInfo />
                </div>
                <div className='col-span-2'>
                    <ProjectContent />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProjectDetailPage;
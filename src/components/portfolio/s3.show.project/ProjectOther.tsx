import React from 'react'
import ProjectCarousel from './carousel/ProjectCarousel';

interface IProjectInfo {

}

const ProjectOther: React.FC<IProjectInfo> = ({ }) => {
    return (
        <div className='flex flex-col gap-16 pb-[120px]'>
            {/* Project info */}
            <div className='flex flex-col gap-4 px-[200px]'>
                <h2 className='portfolio-project-title'>Dự án khác 🌺</h2>
                <p className='portfolio-project-desc'>
                    Vẫn chất lượng. Vẫn siu chất!
                </p>
            </div>
            {/* Access */}
            <div className='grid grid-cols-1 gap-3'>
                <ProjectCarousel />
            </div>
        </div>
    )
}

export default ProjectOther;
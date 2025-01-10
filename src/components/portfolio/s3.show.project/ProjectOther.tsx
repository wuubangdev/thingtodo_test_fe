import React from 'react'

interface IProjectInfo {

}

const ProjectOther: React.FC<IProjectInfo> = ({ }) => {
    return (
        <div className='flex flex-col gap-16'>
            {/* Project info */}
            <div className='flex flex-col gap-4'>
                <h2 className='portfolio-project-title'>Dự án khác 🌺</h2>
                <p className='portfolio-project-desc'>
                    Vẫn chất lượng. Vẫn siu chất!
                </p>
            </div>
            {/* Access */}
            <div className='grid grid-cols-2 gap-3'>

            </div>
        </div>
    )
}

export default ProjectOther;
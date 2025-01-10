import React from 'react'

interface IProjectInfo {

}

const ProjectTet: React.FC<IProjectInfo> = ({ }) => {
    return (
        <div className='flex flex-col gap-12'>
            {/* Project info */}
            <div className='flex flex-col gap-4'>
                <h2 className='portfolio-project-title'>Tết Hoàng Kim 🎇</h2>
                <p className='portfolio-project-desc'>Bộ ảnh hòa quyện vị kem trân châu độc đáo với sắc vàng hoàng kim, <br />
                    tái hiện không khí Tết Việt sang trọng và đầy cảm xúc.</p>
            </div>
            {/* Access */}
            <div className='grid grid-cols-1 gap-3'>
                <div className='bg-blue-600 rounded-[2rem] pt-[50%]'>

                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-blue-600 rounded-[2rem] pt-[50%]'>

                    </div>
                    <div className='bg-blue-600 rounded-[2rem] pt-[50%]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTet;
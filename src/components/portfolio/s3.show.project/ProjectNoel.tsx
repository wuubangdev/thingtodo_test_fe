import React from 'react'

interface IProjectInfo {

}

const ProjectNoel: React.FC<IProjectInfo> = ({ }) => {
    return (
        <div className='flex flex-col gap-12'>
            {/* Project info */}
            <div className='flex flex-col gap-4'>
                <h2 className='portfolio-project-title'>Nô-En No-end 🎄</h2>
                <p className='portfolio-project-desc'>
                    Tràn đầy sắc màu và cảm xúc lễ hội, mang đến hương vị kem ngọt ngào <br />
                    hòa cùng không khí Giáng sinh bất tận, đong đầy niềm vui mùa cuối năm.
                </p>
            </div>
            {/* Access */}
            <div className='grid grid-cols-2 gap-3'>
                <div className='bg-blue-600 rounded-[2rem] pt-[150%]'>

                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <div className='bg-blue-600 rounded-[2rem] pt-[50%]'>

                    </div>
                    <div className='bg-blue-600 rounded-[2rem] pt-[50%]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectNoel;
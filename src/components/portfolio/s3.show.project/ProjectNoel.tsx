import { useCursorVariantContext } from '@/components/context/CursorVariantContext';
import Image from 'next/image';
import React from 'react'

interface IProjectInfo {

}

const ProjectNoel: React.FC<IProjectInfo> = ({ }) => {
    const { setCursorVariant } = useCursorVariantContext();

    const enterPic = () => setCursorVariant('picture');
    const leavePic = () => setCursorVariant('default');

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
                <div className='w-full rounded-[2rem]'>
                    <Image
                        alt='project-tet-1'
                        src={'/portfo_access/projects/noel1.webp'}
                        width={514}
                        height={771}
                        className='w-full h-auto'
                        onMouseOver={() => enterPic()}
                        onMouseLeave={() => leavePic()}
                        style={{ cursor: 'none' }}
                    />
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <div className='rounded-[2rem]'>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/projects/noel2.webp'}
                            width={514}
                            height={379}
                            className='w-full h-auto'
                            onMouseOver={() => enterPic()}
                            onMouseLeave={() => leavePic()}
                            style={{ cursor: 'none' }}
                        />
                    </div>
                    <div className='rounded-[2rem]'>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/projects/noel3.webp'}
                            width={514}
                            height={379}
                            className='w-full h-auto'
                            onMouseOver={() => enterPic()}
                            onMouseLeave={() => leavePic()}
                            style={{ cursor: 'none' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectNoel;
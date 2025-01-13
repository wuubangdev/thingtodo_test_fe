import { useCursorVariantContext } from '@/components/context/CursorVariantContext';
import Image from 'next/image';
import React from 'react'

interface IProjectInfo {

}

const ProjectTet: React.FC<IProjectInfo> = ({ }) => {
    const { setCursorVariant } = useCursorVariantContext();
    const enterPic = () => setCursorVariant('picture');
    const leavePic = () => setCursorVariant('default');
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
                <div className='rounded-[2rem]'>
                    <Image
                        alt='project-tet-1'
                        src={'/portfo_access/projects/tet1.webp'}
                        width={1040}
                        height={686}
                        className='w-full h-auto'
                        onMouseOver={() => enterPic()}
                        onMouseLeave={() => leavePic()}
                        style={{ cursor: 'none' }}
                    />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='rounded-[2rem]'>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/projects/tet2.webp'}
                            width={514}
                            height={344}
                            className='w-full h-auto'
                            onMouseOver={() => enterPic()}
                            onMouseLeave={() => leavePic()}
                            style={{ cursor: 'none' }}
                        />
                    </div>
                    <div className='rounded-[2rem]'>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/projects/tet3.webp'}
                            width={514}
                            height={344}
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

export default ProjectTet;
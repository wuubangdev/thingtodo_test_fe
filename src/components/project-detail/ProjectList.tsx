import Image from 'next/image';
import React from 'react'

interface IProjectData {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    descript1: string;
    descript2: string;
}
const projectData: IProjectData = {
    image1: '/project/media_content1.svg',
    image2: '/project/media_content2.svg',
    image3: '/project/media_content3.svg',
    image4: '/project/media_content4.svg',
    image5: '/project/media_content5.svg',
    descript1: 'Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.',
    descript2: 'Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.'
}
const ProjectList = () => {
    return (
        <>
            {projectData &&
                <div className='border-b-[1px] border-dashed border-[#666D74] pb-10 flex flex-col md:gap-16 gap-6'>
                    {/* Product 1 & 2 */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <Image
                                alt='project-image-item'
                                className='rounded'
                                src={projectData.image2}
                                width={444}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </div>
                        <div>
                            <Image
                                alt='project-image-item'
                                className='rounded'
                                src={projectData.image3}
                                width={444}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                        </div>
                    </div>
                    {/* Product 3 */}
                    <div className='w-full md:w-[80%]'>
                        <Image
                            alt='project-image-item'
                            className='rounded'
                            src={projectData.image4}
                            width={658}
                            height={600}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </div>
                    {/* Description 1 */}
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div><p className='body-2-regular'>{projectData.descript1}</p></div>
                        <div></div>
                    </div>
                    {/* Product 4 */}
                    <div className='flex justify-end w-full md:w-[80%]'>
                        <Image
                            alt='project-image-item'
                            className='rounded'
                            src={projectData.image5}
                            width={658}
                            height={600}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </div>
                    {/* Product 5 */}
                    <div className='flex justify-end'>
                        <Image
                            alt='project-image-item'
                            className='rounded'
                            src={projectData.image1}
                            width={658}
                            height={600}
                            style={{
                                width: '100%',
                                height: 'auto'
                            }}
                        />
                    </div>
                    {/* Description 2 */}
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div><p className='body-2-regular'>{projectData.descript1}</p></div>
                        <div></div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectList
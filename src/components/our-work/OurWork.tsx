import React from 'react'
import ProjectCard, { IProjectCard } from './ProjectCard'
import ProjectCardMobile from './ProjectCardMobile'

const projects: IProjectCard[] = [
    {
        image: '/ourwork/media_content.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
    {
        image: '/ourwork/media_content_2.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
    {
        image: '/ourwork/media_content_3.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
    {
        image: '/ourwork/media_content_4.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
    {
        image: '/ourwork/media_content_5.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
    {
        image: '/ourwork/media_content_6.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
]

const OurWork = () => {
    return (
        <div className='mx-6 flex flex-col gap-20 pt-4 pb-40'>
            <div className='md:px-5 p-4 flex md:gap-6 items-end flex-wrap'>
                <h1 className='md:text-custom-heading text-custom-phone tracking-[-0.05em] md:leading-[108px]'>OUR WORK</h1>
                <h3 className='text-[#666D74] text-custom-content'>Selected projects 2022-2024</h3>
            </div>
            <div className='md:grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20 hidden '>
                {projects && projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        description={project.description}
                        title={project.title}
                    />
                ))}
            </div>
            <div className='md:hidden grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20 grid'>
                {projects && projects.map((project, index) => (
                    <ProjectCardMobile
                        key={index}
                        image={project.image}
                        description={project.description}
                        title={project.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurWork
import React from 'react'
import ProjectCardMobile, { IProjectCard } from '../our-work/ProjectCardMobile'
import Link from 'next/link'
import ProjectCard from '../our-work/ProjectCard'

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
]

const ProjectRelease = () => {
    return (
        <div className='pt-12 pb-40 relative'>
            <div className='px-6 flex flex-col gap-6'>
                <div className='pb-4 border-b-[0.5px] border-[#666D74]'>
                    <h1 className='body-2-medium'>RELEASE PROJECT</h1>
                </div>
                <div>
                    <div className='md:grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-20 hidden '>
                        {projects && projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                isRelease={true}
                            />
                        ))}
                    </div>
                    <div className='md:hidden grid-cols-1 gap-x-6 gap-y-20 grid'>
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
            </div>
            <div className='absolute left-6 bottom-4'>
                <Link
                    href={'/projects'}
                    className='py-3 flex gap-3 body-2-medium'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    BACK TO ALL PROJECT
                </Link>
            </div>
        </div>
    )
}

export default ProjectRelease
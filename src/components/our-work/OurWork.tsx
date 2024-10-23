import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardMobile, { IProjectCard } from './ProjectCardMobile'
import Link from 'next/link'

const projects: IProjectCard[] = [
    {
        image: '/ourwork/media_content_6.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
    {
        image: '/ourwork/media_content_2.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies'
    },
    {
        image: '/ourwork/media_content.svg',
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
        <div
            id='work'
            className='px-6 flex flex-col gap-20 pt-4 pb-40'
            style={{
                backgroundImage: "url(/ourwork/noise.png)",
                backgroundColor: '#fcfcfc',
                // backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
                backdropFilter: 'blur(30px)',
                boxShadow: "0px 1px 2px 0px #FFFFFF80 inset",
            }}
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-end flex-wrap pt-6 md:pt-[53px]'>
                <h1 className='md:block hidden headline-4'>OUR WORKS</h1>
                <h1 className='md:hidden block title-2-medium'>OUR WORKS</h1>
                <h3 className='subtitle-2-regular text-[#666D74]'>Selected projects <br /> 2022-2024</h3>
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
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div></div>
                <div className='flex'>
                    <Link
                        href={'/projects'}
                        className='text-underline pb-1'
                    >
                        <div className='flex gap-4 items-center cursor-pointer'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="md:size-10 size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                            <span className='md:block hidden title-2-medium pb-3'>See all projects</span>
                            <span className='md:hidden block subtitle-1-medium flex-1 pb-2'>See all projects</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurWork
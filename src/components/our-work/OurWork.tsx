'use client'
import React, { useMemo } from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardMobile from './ProjectCardMobile'
import ScrollAnimationWrapper from '@/app/hooks/ScrollAnimationWrapper'
import useMediaQuery from '@/app/hooks/useMediaQuery'

export interface IProjectCard {
    link: string;
    linkMobile: string;
    title: React.ReactElement;
    description: string;
    category: string[],
    sector: string[],
}

const OurWork = (props: { projects: IProject[] }) => {
    const { projects } = props;
    const isMobile = useMediaQuery('(max-width: 767px)')

    // Tối ưu hóa việc render chỉ khi dữ liệu thay đổi
    const renderProjects = useMemo(() => {
        return projects.map((project) => (
            <ScrollAnimationWrapper key={project.title}>
                {isMobile ? (
                    <ProjectCardMobile
                        project={project}
                    />
                ) : (
                    <ProjectCard project={project} isRelease={true} />
                )}
            </ScrollAnimationWrapper>
        ))
    }, [isMobile])

    return (
        <div
            id='work'
            className='px-6 flex flex-col gap-20 pt-4 md:pb-40 pb-10'
            style={{
                backgroundColor: '#f8f8f8',
                backdropFilter: 'blur(30px)',
                boxShadow: "0px 1px 2px 0px #FFFFFF80 inset",
            }}
        >
            <ScrollAnimationWrapper>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-end flex-wrap pt-6 md:pt-[53px] scroll-in'>
                    <h1 className='md:block hidden headline-4'>OUR WORKS</h1>
                    <h1 className='md:hidden block title-2-medium'>OUR WORKS</h1>
                    <h3 className='subtitle-2-regular text-[#666D74]'>Selected projects <br /> 2022-2024</h3>
                </div>
            </ScrollAnimationWrapper>

            {/* Render các project cho cả desktop và mobile */}
            <div className={isMobile ? 'grid-cols-1 grid gap-y-10' : 'md:grid-cols-2 hidden md:grid gap-x-6 gap-y-20'}>
                {renderProjects}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div></div>
                <div className='flex'>
                    {/* Cải thiện link chỉ khi cần */}
                </div>
            </div>
        </div>
    )
}

export default OurWork

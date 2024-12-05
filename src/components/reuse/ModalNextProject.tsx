"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface IProps {
    project: IProject;
    projects: IProject[];
}

const ModalNextProject: React.FC<IProps> = ({ project, projects }) => {
    const [nextSlug, setNextSlug] = useState<string>("")
    const getCurrentProject = (project: IProject, projects: IProject[]) => {
        const currentIndex = projects.findIndex((item) => item.id === project.id);
        const nextProject = currentIndex !== -1 && currentIndex + 1 < projects.length ?
            projects[currentIndex + 1] : projects[0];
        setNextSlug(nextProject?.id + "");
    }

    useEffect(() => {
        getCurrentProject(project, projects);
    }, [])

    return (
        <div>
            <div className='hidden md:flex'>
                <Link
                    href={`/projects/${nextSlug}`}
                    className='py-3 items-center gap-4 title-2-medium hidden md:flex text-underline'
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-12 rotate-180"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <span className='pb-1'>Next Project</span>
                </Link>
            </div>
            <Link
                href={`/projects/${nextSlug}}`}
                className='py-3 flex items-center flex-nowrap gap-4 md:hidden subtitle-1-medium text-underline'
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-12 rotate-180"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <div>
                    Next Project
                </div>
            </Link>
        </div>
    )
}

export default ModalNextProject
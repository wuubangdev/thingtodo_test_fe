'use client'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../our-work/ProjectCard'
import ProjectCardMobile from '../our-work/ProjectCardMobile'

export interface IProjectCard {
    image: string,
    title: string,
    description: string,
    category: string[],
    sector: string[],
}

const projects: IProjectCard[] = [
    {
        image: '/ourwork/media_content.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies',
        category: ['ALL'],
        sector: ['ALL'],
    },
    {
        image: '/ourwork/media_content_2.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies',
        category: ['LOGO'],
        sector: ['BEAUTY'],
    },
    {
        image: '/ourwork/media_content_3.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies',
        category: ['LOGO'],
        sector: ['EDUCATION'],
    },
    {
        image: '/ourwork/media_content_4.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies',
        category: ['WEBSITE'],
        sector: ['EDUCATION'],
    },
    {
        image: '/ourwork/media_content_5.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies',
        category: ['WEBSITE'],
        sector: ['ALL'],
    },
    {
        image: '/ourwork/media_content_6.svg',
        description: 'Project details, 8-10 characters',
        title: 'Huggies',
        category: ['ALL'],
        sector: ['EDUCATION'],
    },
]

interface IProps {
    categoryValue: string,
    sectorValue: string,
}

const ListProjectFilter = (props: IProps) => {
    const { categoryValue, sectorValue } = props;
    const [listProject, setListProject] = useState<IProjectCard[] | null>(null);

    const FilterProjects = (categoryValue: string, sectorValue: string) => {
        if (categoryValue === 'ALL' && sectorValue === 'ALL') {
            return projects;
        }
        if (categoryValue === 'ALL') {
            const list = projects.filter(item => {
                return item.sector.every(i => i === sectorValue)
            })
            return list;
        }
        if (sectorValue === 'ALL') {
            const list = projects.filter(item => {
                return item.category.every(i => i === categoryValue)
            })
            return list;
        }
        const list = projects.filter(item => {
            return item.category.every(i => i === categoryValue) && item.sector.every(i => i === sectorValue)
        })
        return list;
    }

    useEffect(() => {
        setListProject(FilterProjects(categoryValue, sectorValue));
    }, [categoryValue, sectorValue]);

    return (
        <div className='mx-6 flex flex-col gap-20'>
            <div className='md:grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20 hidden '>
                {listProject && listProject.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        description={project.description}
                        title={project.title}
                    />
                ))}
            </div>
            <div className='md:hidden grid-cols-1 md:grid-cols-2 gap-y-10 grid'>
                {listProject && listProject.map((project, index) => (
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

export default ListProjectFilter;
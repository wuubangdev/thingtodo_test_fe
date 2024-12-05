'use client'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../our-work/ProjectCard'
import ProjectCardMobile from '../our-work/ProjectCardMobile'


interface IProps {
    categoryValue: string,
    sectorValue: string,
    projects: IProject[];
}

const ListProjectFilter = (props: IProps) => {
    const { categoryValue, sectorValue, projects } = props;
    const [listProject, setListProject] = useState<IProject[] | null>(null);

    console.log(projects);

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
                        project={project}
                    />
                ))}
            </div>
            <div className='md:hidden grid-cols-1 md:grid-cols-2 gap-y-10 grid'>
                {listProject && listProject.map((project, index) => (
                    <ProjectCardMobile
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListProjectFilter;
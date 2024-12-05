'use client'
import React, { useState } from 'react'
import ModalFilterProject from './ModalFilterProject';
import ListProjectFilter from './ListProjectFilter';

interface IProps {
    projects: IProject[];
}

const ContentProject: React.FC<IProps> = ({ projects }) => {
    const [categoryValue, setCategoryValue] = useState<string>('ALL');
    const [sectorValue, setSectorValue] = useState<string>('ALL');

    return (
        <div className='flex flex-col md:gap-28 gap-10 '>
            <ModalFilterProject
                categoryValue={categoryValue}
                sectorValue={sectorValue}
                setCategoryValue={setCategoryValue}
                setSectorValue={setSectorValue}
            />
            <ListProjectFilter
                projects={projects}
                categoryValue={categoryValue}
                sectorValue={sectorValue}

            />
        </div>
    )
}

export default ContentProject;
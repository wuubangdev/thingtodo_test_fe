'use client'
import React, { useState } from 'react'
import ModalFilterProject from './ModalFilterProject';
import ListProjectFilter from './ListProjectFilter';

const ContentProject = () => {
    const [categoryValue, setCategoryValue] = useState<string>('ALL');
    const [sectorValue, setSectorValue] = useState<string>('ALL');

    console.log(categoryValue, sectorValue)

    return (
        <div className='flex flex-col md:gap-28 gap-10'>
            <ModalFilterProject
                categoryValue={categoryValue}
                sectorValue={sectorValue}
                setCategoryValue={setCategoryValue}
                setSectorValue={setSectorValue}
            />
            <ListProjectFilter
                categoryValue={categoryValue}
                sectorValue={sectorValue}
            />
        </div>
    )
}

export default ContentProject;
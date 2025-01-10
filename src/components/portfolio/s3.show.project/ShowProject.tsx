{/* S3: Show project */ }
import React from 'react';
import ProjectTet from './ProjectTet';
import ProjectNoel from './ProjectNoel';

const ShowProject = () => {
    return (
        <div className='p-[200px] flex flex-col gap-14'>
            <h1 className='portfolio-text-subheading text-center'>
                Project
                <br />
                “Oách xà lách”
            </h1>
            <ProjectTet />
            <ProjectNoel />
        </div>
    )
}

export default ShowProject;
{/* S3: Show project */ }
import React from 'react';
import ProjectTet from './ProjectTet';
import ProjectNoel from './ProjectNoel';
import ProjectOther from './ProjectOther';

const ShowProject = () => {
    return (
        <div>
            <div className='pt-[200px] px-[200px] pb-14 flex flex-col gap-14'>
                <h1 className='portfolio-text-subheading text-center'>
                    Project
                    <br />
                    “Oách xà lách”
                </h1>
                <ProjectTet />
                <ProjectNoel />
            </div>
            <ProjectOther />
        </div>
    )
}

export default ShowProject;
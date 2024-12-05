import React from 'react'
import RenderMedia from '../reuse/RenderMedia';

interface IProps {
    projectData: Product[];
}

const renderProductList: React.FC<Product> = ({ id, title, fileList }) => {
    if (fileList.length === 1) {
        return (
            <div key={id} className='flex flex-col gap-6'>
                <div className='grid grid-cols-1'>
                    <RenderMedia media={fileList[0]} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div><p className='body-2-regular'>{title}</p></div>
                    <div></div>
                </div>
            </div>
        )
    }
    if (fileList.length === 2) {
        return (
            <div key={id} className='flex flex-col gap-16'>
                <div className='grid grid-cols-2 justify-end'>
                    {fileList && fileList.map((item, index) => (
                        <RenderMedia key={index} media={item} />
                    ))}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div><p className='body-2-regular'>{title}</p></div>
                    <div></div>
                </div>
            </div>
        )
    }
    if (fileList.length === 3) {
        return (
            <div key={id} className='flex flex-col gap-16'>
                <div className='grid grid-cols-1 gap-16'>
                    <div className='grid grid-cols-2 gap-6'>
                        <RenderMedia media={fileList[0]} />
                        <RenderMedia media={fileList[1]} />
                    </div>
                    <div className='grid grid-cols-1'>
                        <RenderMedia media={fileList[2]} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div><p className='body-2-regular'>{title}</p></div>
                    <div></div>
                </div>
            </div>
        )
    }
    if (fileList.length === 4) {
        return (
            <div key={id} className='flex flex-col gap-16'>
                <div className='grid grid-cols-1 gap-16'>
                    <div className='grid grid-cols-2 gap-6'>
                        <RenderMedia media={fileList[0]} />
                        <RenderMedia media={fileList[1]} />
                        <RenderMedia media={fileList[2]} />
                        <RenderMedia media={fileList[3]} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div><p className='body-2-regular'>{title}</p></div>
                    <div></div>
                </div>
            </div>
        )
    }
    if (fileList.length === 5) {
        return (
            <div key={id} className='flex flex-col gap-16'>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='grid grid-cols-2 gap-16'>
                        <RenderMedia media={fileList[0]} />
                        <RenderMedia media={fileList[1]} />
                        <RenderMedia media={fileList[2]} />
                        <RenderMedia media={fileList[3]} />
                    </div>
                    <div className='grid grid-cols-1'>
                        <RenderMedia media={fileList[4]} />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div><p className='body-2-regular'>{title}</p></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

const ProjectList: React.FC<IProps> = ({ projectData }) => {
    return (
        <div className='grid grid-cols-1 gap-16'>
            {projectData && projectData.map(item => (
                renderProductList({ title: item.title, fileList: item.fileList, id: item.id })
            ))}
        </div>
    )
}

export default ProjectList
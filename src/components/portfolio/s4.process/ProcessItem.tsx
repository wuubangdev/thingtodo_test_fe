import React from 'react'

interface IProcessItem {
    id: number;
    title: string;
    paddingX: string;
}

const ProcessItem: React.FC<IProcessItem> = ({ title, id, paddingX }) => {
    return (
        <div className='flex justify-center items-center py-6'
            style={{
                borderRadius: '2.813rem',
                background: 'rgba(149, 154, 159, 0.80)',
                paddingLeft: paddingX,
                paddingRight: paddingX,
            }}
        >
            <div className='portfolio-process-item'>
                <span className='font-bold mr-6'>Bước {id}</span>
                <span>{title}</span>
            </div>
        </div>
    )
}

export default ProcessItem
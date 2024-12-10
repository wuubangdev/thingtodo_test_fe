import React from 'react';

export interface ICategoryButton {
    title: string;
    variant: 'FMCG' | 'Packaging';
}

const CategoryButton = (props: ICategoryButton) => {
    const { title, variant } = props
    return (
        <div
            className='rounded-md p-2 flex gap-2 items-center text-sm'
            style={{
                color: variant === 'FMCG' ? '#FA4616' : '#601FEB',
                background: variant === 'FMCG' ? '#FFEDE8' : '#EFE9FD',
                border: variant === 'FMCG' ? '1px solid #FDC6B7' : '1px solid #CEBAF9'
            }}
        >
            <span className='body-3-medium'>
                {title}
            </span>
        </div>
    )
}

export default CategoryButton;
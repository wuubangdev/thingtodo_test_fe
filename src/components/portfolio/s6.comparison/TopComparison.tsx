import React from 'react'
import TopComparisonHeading from './top/TopComparisonHeading';
import TopComparisonDescription from './top/TopComparisonDescription';
import ListComparison from './top/ListComparison';

const TopComparison = () => {
    return (
        <div
            className='px-20 py-16 flex flex-col gap-14 items-center w-full'
            style={{
                borderRadius: 32,
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.00) 52.22%)'
            }}
        >
            <TopComparisonHeading />
            <TopComparisonDescription />
            <ListComparison />
        </div>
    )
}

export default TopComparison;
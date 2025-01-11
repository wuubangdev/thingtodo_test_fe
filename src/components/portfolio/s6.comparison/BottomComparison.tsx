import React from 'react'
import BottomComparisonHeading from './bottom/BottomComparisonHeading'
import ListCGI from './bottom/ListCGI'

const BottomComparison = () => {
    return (
        <div className='flex flex-col gap-14 items-center'>
            <BottomComparisonHeading />
            <ListCGI />
        </div>
    )
}

export default BottomComparison
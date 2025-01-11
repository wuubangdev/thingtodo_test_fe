{/* S6: Comparison */ }
import React from 'react';
import TopComparison from './TopComparison';
import BottomComparison from './BottomComparison';

const Comparison = () => {
    return (
        <div className='px-[120px] pt-[120px] pb-[160px] flex flex-col items-center gap-20'
            style={{
                background: '#131E29'
            }}
        >
            <TopComparison />
            <BottomComparison />
        </div>
    )
}

export default Comparison;
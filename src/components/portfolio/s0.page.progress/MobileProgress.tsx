import React from 'react'

const MobileProgress = () => {
    return (
        <div className='h-1 bg-green-700'
            style={{
                width: `${((1) / 7) * 100}%`
            }}
        >

        </div>
    )
}

export default MobileProgress;
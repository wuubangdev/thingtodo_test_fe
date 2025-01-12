import React from 'react'

const BottomComparisonHeading = () => {
    return (
        <div className='flex justify-center items-center portfolio-compo-heading portfolio-text-gradient'>
            <span>Chưa đủ thuyết phục?</span>
            <span style={{
                color: "#fcfcfc", // Màu văn bản mặc định
                WebkitBackgroundClip: "none", // Loại bỏ gradient
                WebkitTextFillColor: "#fcfcfc", // Màu chữ bình thường
            }}>&nbsp;Xem thêm.</span>
        </div>
    )
}

export default BottomComparisonHeading;
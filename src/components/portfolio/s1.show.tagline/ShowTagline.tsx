{/* S1: Show clip with tagline */ }
import React from 'react'
import CustomButton from '../custom.components/CustomButton';

const ShowTagline = () => {
    return (
        <div id='#section1'
            className='h-[150vh]'
            style={{
                background: "linear-gradient(180deg, #FCFCFC 0%, #D6D6D6 100%)",
            }}
        >
            <div
                className='h-[100vh] flex items-end justify-center pb-14'
            >
                <div className='flex flex-col gap-14 justify-center items-center'>
                    <h1 className='portfolio-text-heading'>
                        Kem ngonnn <br /> Game on!
                    </h1>
                    <div className='portfolio-text-description'>
                        Chạm vị mát lành – Vẽ nên câu chuyện mê đắm cùng sắc màu <br />
                        ngọt ngào. Khơi dậy vị giác và cảm xúc, biến từng cây kem thành <br />
                        biểu tượng của sự mát lịm đầy mê hoặc.
                    </div>
                    <div className='flex'>
                        <CustomButton background='white' contentLeft={['Khám phá', 'phát']} contentRight={['mát', 'liền']} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowTagline;
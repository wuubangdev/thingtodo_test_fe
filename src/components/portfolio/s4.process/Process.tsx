{/* S4: Process */ }
import React from 'react';
import ProcessItem from './ProcessItem';
import ProcessButton from './ProcessButton';

const Process = () => {
    return (
        <div
            className='pt-[88px] px-[200px] pb-[160px] flex flex-col items-center gap-20 self-stretch'
        >
            <h1 className=' portfolio-text-subheading'>Nhanh. Nhưng chắc</h1>
            <div className='flex justify-center flex-col items-center'>
                <p className='body-1-bold'>
                    <span>Process nhanh gọn. </span> &nbsp;
                    <span className='text-[rgba(88,88,88,0.70)]'>Nhưng từng bước đều được trau chuốt tỉ mỉ để mỗi sản <br />
                        phẩm ra đời không chỉ đúng hạn mà còn đạt chất lượng vượt mong đợi!</span>
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-14'>
                <div className='flex flex-col justify-center items-center gap-12'>
                    <ProcessItem
                        id={1}
                        paddingX={'10.25rem'}
                        title='Ủ ý tưởng và lên concept'
                    />
                    <ProcessItem
                        id={2}
                        paddingX={'4.875rem'}
                        title='Chỉnh chu từ cái nhìn đầu tiên'
                    />
                    <ProcessItem
                        id={3}
                        paddingX={'2.875rem'}
                        title='Lấp lánh từng pixel'
                    />
                </div>
                <ProcessButton />
            </div>
        </div>
    )
}

export default Process;
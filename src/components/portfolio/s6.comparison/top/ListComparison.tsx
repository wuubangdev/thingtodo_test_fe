import React from 'react'


interface IIteam {
    title: React.ReactElement;
    value: string;
}

const list: IIteam[] = [
    {
        title: <div className='portfolio-cgi-footer'>Chi phí <br /> tiết kiệm</div>,
        value: "Đến 50%",
    },
    {
        title: <div className='portfolio-cgi-footer'>Thời gian <br /> nhanh hơn</div>,
        value: "2-3 lần",
    },
    {
        title: <div className='portfolio-cgi-footer'>Tính linh hoạt <br /> tuỳ chỉnh</div>,
        value: "Gần như 100%",
    },
    {
        title: <div className='portfolio-cgi-footer'>Hiệu ứng <br /> không giới hạn</div>,
        value: "Chân thực",
    },
    {
        title: <div className='portfolio-cgi-footer'>Tính tái sử dung <br /> linh hoạt</div>,
        value: "Tiết kiệm dài hạn",
    }
]

const ItemComponent: React.FC<IIteam> = ({ title, value }) =>
(<div className='flex flex-col gap-3'>
    <span>{title}</span>
    <span className='portfolio-compo-value'>{value}</span>
</div>)

const ListComparison = () => {
    return (
        <div className='w-full grid grid-cols-3 gap-14'>
            {list && list.map((item, i) => <ItemComponent key={i} title={item.title} value={item.value} />)}
        </div>
    )
}

export default ListComparison
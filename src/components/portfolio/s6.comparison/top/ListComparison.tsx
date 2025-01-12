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
    <span className='portfolio-compo-value flex gap-[10px]'>
        <span className='text-[#fcfcfc]'>{value}</span>
        <svg className='mt-2 opacity-25' xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M8.55839 0.299786C7.41543 0.219813 6.26863 0.386283 5.19558 0.78793C4.12253 1.18958 3.14827 1.81703 2.33873 2.62784C1.5292 3.43864 0.903263 4.41387 0.50329 5.48755C0.103317 6.56122 -0.0613628 7.70828 0.0203933 8.85112C0.314393 13.0865 4.05573 16.2811 8.72306 16.2811H12.6677C13.5515 16.2801 14.3987 15.9285 15.0236 15.3036C15.6485 14.6787 16 13.8315 16.0011 12.9478V8.50779C16.0259 6.45275 15.2725 4.46438 13.8919 2.9419C12.5114 1.41942 10.6061 0.475544 8.55839 0.299786ZM8.00106 3.61445C8.26628 3.61445 8.52063 3.71981 8.70817 3.90735C8.8957 4.09488 9.00106 4.34924 9.00106 4.61445C9.00106 4.87967 8.8957 5.13402 8.70817 5.32156C8.52063 5.5091 8.26628 5.61445 8.00106 5.61445C7.73584 5.61445 7.48149 5.5091 7.29395 5.32156C7.10642 5.13402 7.00106 4.87967 7.00106 4.61445C7.00106 4.34924 7.10642 4.09488 7.29395 3.90735C7.48149 3.71981 7.73584 3.61445 8.00106 3.61445ZM9.33439 12.2811C9.33439 12.4579 9.26416 12.6275 9.13913 12.7525C9.01411 12.8776 8.84454 12.9478 8.66773 12.9478C8.49092 12.9478 8.32135 12.8776 8.19632 12.7525C8.0713 12.6275 8.00106 12.4579 8.00106 12.2811V8.28112H7.33439C7.15758 8.28112 6.98801 8.21088 6.86299 8.08586C6.73796 7.96083 6.66773 7.79126 6.66773 7.61445C6.66773 7.43764 6.73796 7.26807 6.86299 7.14305C6.98801 7.01802 7.15758 6.94779 7.33439 6.94779H8.00106C8.35468 6.94779 8.69382 7.08826 8.94387 7.33831C9.19392 7.58836 9.33439 7.9275 9.33439 8.28112V12.2811Z" fill="#FCFCFC" />
        </svg>
    </span>
</div>)

const ListComparison = () => {
    return (
        <div className='w-full grid grid-cols-3 gap-14'>
            {list && list.map((item, i) => <ItemComponent key={i} title={item.title} value={item.value} />)}
        </div>
    )
}

export default ListComparison
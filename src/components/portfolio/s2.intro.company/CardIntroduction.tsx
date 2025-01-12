import Image from 'next/image';
import React from 'react'


interface ICardIntroduction {
    link: string;
}

const CardIntroduction: React.FC<ICardIntroduction> = ({ link }) => {
    return (
        <div className="w-full bg-blue-500 rounded-[3rem]">
            <Image
                alt=''
                src={link}
                width={470}
                height={564}
                className='w-full'
            />
        </div>
    )
}

export default CardIntroduction;
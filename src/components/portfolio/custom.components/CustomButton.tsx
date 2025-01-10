'use client'
import React, { useState } from 'react'

interface ICustomButton {
    contentLeft: string[];
    contentRight: string[];
    background: 'white' | 'black';
}

const CustomButton: React.FC<ICustomButton> = ({ contentLeft, contentRight, background }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <div
            className='portfolio-text-button flex px-[20px] py-[10px] justify-center 
            items-center rounded-[32px] border-[1px] border-solid border-[#131E29]
            cursor-pointer'
            style={{
                background: background === "black" ? "#131E29" : "#fcfcfc",
                color: background === "black" ? "#fcfcfc" : "#131E29",
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ?
                `${contentLeft[0]} ${contentLeft[1]}, ${contentRight[0]} ${contentRight[1]}!`
                :
                `${contentLeft[0]} ${contentRight[1]}!`
            }
        </div>
    )
}

export default CustomButton;
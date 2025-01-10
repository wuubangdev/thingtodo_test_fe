import React from 'react'


interface ICardIntroduction {

}

const CardIntroduction: React.FC<ICardIntroduction> = () => {
    return (
        <div className="w-full bg-blue-500 rounded-[3rem]">
            <div className="pt-[120%]"></div>
        </div>
    )
}

export default CardIntroduction;
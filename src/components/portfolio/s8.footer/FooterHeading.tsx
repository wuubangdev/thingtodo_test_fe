import React from 'react'

const FooterHeading = () => {
    return (
        <div className='flex flex-col gap-4 px-[200px]'>
            <span
                className='portfolio-footer-heading'
                style={{
                    textShadow: '0px 0px 2.1px #FFF, 0px 0px 21.9px rgba(255, 255, 255, 0.25), 0px 10px 37.7px rgba(255, 255, 255, 0.25)'
                }}
            >
                Behind The “Game”
            </span>
            <span className='portfolio-footer-description'>Hậu trường náo nhiệt, cả ekip đều bật chế độ “game on" siêu xịn!</span>
        </div>
    )
}

export default FooterHeading
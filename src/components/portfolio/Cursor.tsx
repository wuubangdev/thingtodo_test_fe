'use client'
import React, { useEffect, useState } from 'react'
import { useCursorVariantContext } from '../context/CursorVariantContext';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { cursorVariant } = useCursorVariantContext();
    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }

    }, []);

    useEffect(() => { }, [cursorVariant]);
    // console.log(cursorVariant);
    const variantsDefault = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            opacity: 1
        },
        picture: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            opacity: 0,
        },
        contact: {
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            opacity: 0,
        }
    }
    const variantsPic = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
            opacity: 0,
        },
        picture: {
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            backgroundColor: '#131E29',
            opacity: 1
        },
        contact: {
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            opacity: 0
        }
    }
    const variantsContact = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
            opacity: 0,
        },
        picture: {
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            opacity: 0
        },
        contact: {
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            backgroundColor: '#131E29',
            opacity: 1
        }
    }
    return (
        <div>
            {/* default */}
            {cursorVariant === 'default' &&
                <motion.div
                    className='portfolio-cursor'
                    variants={variantsDefault}
                    animate={cursorVariant}
                    initial={cursorVariant}
                ></motion.div>
            }
            {/* picture */}
            {(cursorVariant === 'picture' || cursorVariant === 'default') &&
                <motion.div
                    className='portfolio-cursor-picture'
                    variants={variantsPic}
                    animate={cursorVariant}
                    initial={cursorVariant}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <g clipPath="url(#clip0_3161_231)">
                            <path d="M0.634348 8.38575C1.29285 6.94575 3.8751 2.25 9.5001 2.25C15.1251 2.25 17.7073 6.94575 18.3658 8.38575C18.4542 8.57873 18.5 8.78849 18.5 9.00075C18.5 9.21301 18.4542 9.42277 18.3658 9.61575C17.7073 11.0542 15.1251 15.75 9.5001 15.75C3.8751 15.75 1.29285 11.0542 0.634348 9.61425C0.546127 9.42149 0.500462 9.21199 0.500462 9C0.500462 8.78801 0.546127 8.57851 0.634348 8.38575ZM9.5001 14.25C14.2303 14.25 16.4376 10.2255 17.0001 9.00825C16.4376 7.7745 14.2303 3.75 9.5001 3.75C4.7811 3.75 2.5731 7.75725 2.0001 9C2.5731 10.2428 4.7811 14.25 9.5001 14.25Z" fill="#9EFEFD" />
                            <path d="M9.5 5.25C10.2417 5.25 10.9667 5.46993 11.5834 5.88199C12.2001 6.29404 12.6807 6.87971 12.9645 7.56494C13.2484 8.25016 13.3226 9.00416 13.1779 9.73159C13.0332 10.459 12.6761 11.1272 12.1516 11.6517C11.6272 12.1761 10.959 12.5333 10.2316 12.6779C9.50416 12.8226 8.75016 12.7484 8.06494 12.4645C7.37971 12.1807 6.79404 11.7001 6.38199 11.0834C5.96993 10.4667 5.75 9.74168 5.75 9C5.75119 8.0058 6.14666 7.05267 6.84966 6.34966C7.55267 5.64666 8.5058 5.25119 9.5 5.25ZM9.5 11.25C9.94501 11.25 10.38 11.118 10.75 10.8708C11.12 10.6236 11.4084 10.2722 11.5787 9.86104C11.749 9.4499 11.7936 8.9975 11.7068 8.56105C11.6199 8.12459 11.4057 7.72368 11.091 7.40901C10.7763 7.09434 10.3754 6.88005 9.93895 6.79323C9.50249 6.70642 9.05009 6.75097 8.63896 6.92127C8.22783 7.09157 7.87642 7.37996 7.62919 7.74997C7.38196 8.11998 7.25 8.55499 7.25 9C7.25 9.59674 7.48705 10.169 7.90901 10.591C8.33096 11.0129 8.90326 11.25 9.5 11.25Z" fill="#9EFEFD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3161_231">
                                <rect width="18" height="18" fill="white" transform="matrix(-1 0 0 1 18.5 0)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='text-[#fcfcfc] portfolio-cursor-text'>Xem</span>
                </motion.div>
            }
            {/*  */}
            {(cursorVariant === 'contact' || cursorVariant === 'default') &&
                <motion.a
                    className='portfolio-cursor-contact'
                    variants={variantsContact}
                    animate={cursorVariant}
                    initial={cursorVariant}
                    href={"mailto:contact@thingtodo.vn"}
                >
                    <span className='text-[#fcfcfc] portfolio-cursor-text'>Kết nối <br /> qua email</span>
                </motion.a>
            }
        </div>
    )
}

export default Cursor
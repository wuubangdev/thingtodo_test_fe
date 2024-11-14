'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const MovingHoverButton = () => {
    const hoverAreaRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (hoverAreaRef.current && imageRef.current) {
            const rect = hoverAreaRef.current.getBoundingClientRect();
            const imageRect = imageRef.current.getBoundingClientRect();

            // Tính toán vị trí chuột trong vùng chứa
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Giới hạn vị trí X và Y của ảnh sao cho không vượt quá biên của vùng chứa
            const limitedX = Math.min(
                Math.max(x - imageRect.width / 2, rect.width * 0.25), // Không vượt qua trái
                rect.width - imageRect.width - rect.height * 0.25// Không vượt qua phải
            );

            const limitedY = Math.min(
                Math.max(y - imageRect.height / 2, rect.height * 0.25), // Không vượt qua trên
                rect.height - imageRect.height - rect.height * 0.25// Không vượt qua dưới
            );

            // Cập nhật vị trí của hình ảnh
            setPosition({
                x: limitedX,
                y: limitedY,
            });
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            ref={hoverAreaRef}
            className="hover-area"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                overflow: 'hidden', // Đảm bảo nội dung không vượt qua vùng chứa
            }}
        >
            {isHovered && (
                <motion.div
                    ref={imageRef}
                    className="duration-300 ease-out absolute bg-primary p-1 rounded-full w-1/6"
                    style={{
                        height: 'auto',
                        pointerEvents: 'none',
                        zIndex: 10,
                    }}
                    initial={{
                        opacity: 0,
                        scale: 1,
                        x: position.x,
                        y: position.y,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: position.x,
                        y: position.y,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0.2 },
                        x: {
                            type: 'spring',
                            stiffness: 200,
                            damping: 15,
                            restDelta: 0.01,
                        },
                        y: {
                            type: 'spring',
                            stiffness: 200,
                            damping: 15,
                            restDelta: 0.01,
                        },
                    }}
                >
                    <div
                        className='relative w-full'
                    >
                        <Image
                            alt='project-image'
                            src={'/ourwork/comming.svg'}
                            width={114}
                            height={114}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            className='rotate-infinite'
                            loading="lazy"
                        />
                        <div className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <Image
                                alt='project-image'
                                src={'/ourwork/icon_comming.svg'}
                                width={62}
                                height={62}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MovingHoverButton;

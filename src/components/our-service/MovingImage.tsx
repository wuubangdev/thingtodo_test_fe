'use client'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
const MovingImage = ({ image }: { image: string }) => {
    const hoverAreaRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (hoverAreaRef.current) {
            const rect = hoverAreaRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (imageRef.current) {
                setPosition({
                    x: x - imageRef.current?.offsetWidth / 2,
                    y: y - imageRef.current.offsetHeight / 2,
                });
            }
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
            }}
        >
            {isHovered && (
                <motion.img
                    ref={imageRef}
                    src={image}
                    alt="Moving Image"
                    className="duration-300 ease-out"
                    style={{
                        position: 'absolute',
                        width: '25vw',
                        height: 'auto',
                        pointerEvents: 'none',
                        zIndex: 10,
                    }}
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: position.y,
                        y: position.y
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
                            stiffness: 300,
                            damping: 15,
                            restDelta: 0.01,
                        },
                        y: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 15,
                            restDelta: 0.01,
                        },
                    }}
                />
            )}
        </div>
    );
};

export default MovingImage;

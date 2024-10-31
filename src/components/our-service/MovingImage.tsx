'use client'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const MovingImage = ({ image }: { image: string }) => {
    // const hoverAreaRef = useRef<HTMLDivElement | null>(null);
    // const [position, setPosition] = useState({ x: 0, y: 0 }); // Lưu trữ vị trí hình ảnh
    // const [isHovered, setIsHovered] = useState(false); // Kiểm tra trạng thái hover

    // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (hoverAreaRef.current) {
    //         const rect = hoverAreaRef.current.getBoundingClientRect();
    //         const x = e.clientX - rect.left; // Tọa độ X trong div
    //         const y = e.clientY - rect.top; // Tọa độ Y trong div

    //         // Cập nhật vị trí của hình ảnh
    //         setPosition({ x: x - 30, y: y - 50 });
    //     }
    // };

    // const handleMouseEnter = () => {
    //     setIsHovered(true); // Đặt trạng thái hover là true
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(false); // Đặt trạng thái hover là false
    // };
    const hoverAreaRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Lưu trữ vị trí hình ảnh
    const [isHovered, setIsHovered] = useState(false); // Kiểm tra trạng thái hover

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (hoverAreaRef.current) {
            const rect = hoverAreaRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left; // Tọa độ X trong div
            const y = e.clientY - rect.top; // Tọa độ Y trong div
            // Cập nhật vị trí của hình ảnh
            setPosition({ x: x - 210, y: y - 140 });
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true); // Đặt trạng thái hover là true
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Đặt trạng thái hover là false
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
                // border: '2px solid #000', 
                width: '100%',
                height: '100%',
                cursor: 'pointer',
            }}
        >
            {isHovered && (
                <motion.img
                    src={image} // Thay đường dẫn hình ảnh
                    alt="Moving Image"
                    // className='duration-200 ease-linear'
                    style={{
                        position: 'absolute',
                        width: '25vw',
                        height: 'auto',
                        pointerEvents: 'none',
                        translate: `${position.x}px ${position.y}px`, // Di chuyển theo tọa độ
                        zIndex: 999,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0 },
                        translate: { duration: 0.005 },
                    }}
                />
            )}
        </div>
    );
};

export default MovingImage;

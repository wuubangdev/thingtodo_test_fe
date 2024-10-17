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
            setPosition({ x: x - 210, y: y - 220 });
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
                    style={{
                        position: 'absolute',
                        width: '240px',
                        height: '240px',
                        pointerEvents: 'none',
                        translate: `${position.x}px ${position.y}px`, // Di chuyển theo tọa độ
                        zIndex: 999,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 1.5, // Thời gian cho toàn bộ chuyển động (1.5 giây)
                        ease: "easeInOut" // Thêm kiểu easing nếu muốn
                    }}
                />
            )}
        </div>
    );
};

export default MovingImage;

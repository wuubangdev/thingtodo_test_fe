// app/components/ScrollAnimationWrapper.tsx
import { ReactNode, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ScrollAnimationWrapperProps {
    children: ReactNode;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ children }) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    // Hàm kiểm tra khi nào phần tử vào viewport
    const handleScroll = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isInViewport && !isInView) {
                setIsInView(true); // Cập nhật trạng thái khi phần tử vào viewport
                window.removeEventListener("scroll", handleScroll); // Ngừng lắng nghe sau khi hiệu ứng chạy
            }
        }
    };
    // Lắng nghe sự kiện cuộn
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);  // Dọn dẹp sự kiện khi component unmount
    }, [isInView]);

    return (
        <motion.div
            ref={elementRef}  // Gán ref vào phần tử
            initial={{ opacity: 1, x: -420 }}  // Bắt đầu ẩn và dịch chuyển
            animate={{
                opacity: isInView ? 1 : 0,  // Khi cuộn vào, opacity = 1
                x: isInView ? 1 : -420,       // Di chuyển về vị trí ban đầu
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}  {/* Phần tử con */}
        </motion.div>
    );
};

export default ScrollAnimationWrapper;

'use client'
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import LoadingState from "@/components/loading/LoadingState";
import { MobileMenuContextProvider } from "@/components/context/MobileMenuContext";
import MobileMenu from "@/components/navbar/MobileMenu";
import { ContactContextProvider } from "@/components/context/ContactContext";
import ContactModal from "@/components/modal-contact/ContactModal";
import MobileMenuButton from "@/components/float-button/MobileMenuButton";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [percentNumber, setPercentNumber] = useState(0);
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Chuyển đổi yTransform từ 0 đến 100% chiều cao container
  const containerHeight = containerRef.current?.offsetHeight || 0;
  const yTransform = useTransform(scrollY, [0, containerHeight], [0, containerHeight / 2]);


  useEffect(() => {
    if (pathname === '/') {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500);
      let prev = 0; // Initialize prev
      const interval = setInterval(() => {
        if (prev < 100) {
          prev++; // Increment prev by 1
          // setPercent(prev)
        }

        // If prev reaches 100, clear the interval
        if (prev === 100) {
          clearInterval(interval);
        }

        // Optional: handle special cases
        if (prev === 19 || prev === 29 || prev === 59 || prev === 99 || prev === 100) {
          setPercentNumber(prev);
          setPercent(prev)
        }
      }, 30);
      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
    setIsLoading(false);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/TTD-favicon.svg" type="image/svg+xml" />
      </head>
      <body className="relative">
        <MobileMenuContextProvider>
          <ContactContextProvider>
            <MobileMenuButton />
            <AnimatePresence
              // mode="wait"
              initial={false}
            >
              {isLoading ?
                (<motion.div
                  key={isLoading ? 'loading' : pathname}
                  initial={{ opacity: 1, y: 1000 }}
                  animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 1, y: -1000 }}
                  transition={{ duration: 1 }}
                >
                  <LoadingState percent={percent} percentNumber={percentNumber} />
                </motion.div>)
                :
                (<motion.div
                  key={isLoading ? 'loading' : pathname}
                  initial={{ opacity: 0.7, y: 1000 }}
                  animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 1, y: -1000 }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 20, // Điều chỉnh damping để thay đổi độ "ease-in"
                    // Có thể sử dụng cubicBezier để tạo các hiệu ứng khác
                    ease: [0.25, 0.1, 0.25, 1] // Ease-in effect
                  }}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, y: yTransform }}
                >
                  {children}
                </motion.div>)}
            </AnimatePresence>
            <MobileMenu />
            <ContactModal />
          </ContactContextProvider>
        </MobileMenuContextProvider>
      </body>
    </html>
  );
}

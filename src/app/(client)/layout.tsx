// import ButtonScrollToTop from "@/components/float-button/ButtonScrollToTop";

'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from "react";
import LoadingState from "@/components/loading/LoadingState";
import MobileMenuButton from "@/components/float-button/MobileMenuButton";
import NavbarSecondary from "@/components/navbar/NavbarSecondary";
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [loadingState, setLoadingState] = useState({ percent: 0, percentNumber: 0 });
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Tính toán yTransform
  const containerHeight = useMemo(() => containerRef.current?.offsetHeight || 0, [scrollY]);
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
          // Điều chỉnh percent
          if ([19, 29, 59, 89, 100].includes(prev)) {
            setLoadingState(prev === 89 ? { percent: 99, percentNumber: 99 } : { percent: prev, percentNumber: prev });
          }
        }

        if (prev === 100) {
          clearInterval(interval);
        }
      }, 20);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
    setIsLoading(false);
  }, [pathname]);
  return (
    <div>
      {!isLoading && <>
        <MobileMenuButton />
        <NavbarSecondary />
      </>}
      <AnimatePresence initial={false}>
        {isLoading ?
          (<motion.div
            key="loading"
            initial={{ opacity: 1, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <LoadingState percent={loadingState.percent} percentNumber={loadingState.percentNumber} />
          </motion.div>)
          :
          (<motion.div
            key={pathname}
            initial={{ opacity: 0.7, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 80,
              damping: 30,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, y: yTransform }}
          >
            {children}
          </motion.div>)}
      </AnimatePresence>
    </div>
  );
}

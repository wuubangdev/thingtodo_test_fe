'use client'
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import LoadingState from "@/components/loading/LoadingState";
import { MobileMenuContextProvider } from "@/components/context/MobileMenuContext";
import MobileMenu from "@/components/navbar/MobileMenu";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [percentNumber, setPercentNumber] = useState(0);


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
  }, []);

  return (
    <html lang="en">
      <body className="relative">
        <MobileMenuContextProvider>
          <AnimatePresence
            // mode="wait"
            initial={false}
          >
            {isLoading ?
              (<motion.div
                key={isLoading ? 'loading' : pathname}
                initial={{ opacity: 1, y: 1000 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -1000 }}
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
                transition={{ duration: 1.5 }}
                style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
              >
                {children}
              </motion.div>)}
          </AnimatePresence>
          <MobileMenu />
        </MobileMenuContextProvider>
      </body>
    </html>
  );
}

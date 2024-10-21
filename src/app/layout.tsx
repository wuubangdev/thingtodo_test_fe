'use client'
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import LoadingState from "@/components/loading/LoadingState";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 20);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <html lang="en">
      <body className="relative">
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
              <LoadingState percent={percent} />
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
      </body>
    </html>
  );
}

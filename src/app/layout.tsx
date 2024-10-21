'use client'
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import Spinner from "@/components/loading/Spinner";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from 'framer-motion';


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <html lang="en">
      <body>

        <AnimatePresence
          // mode="wait" 
          initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 1, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 2 }}
          >
            {
              loading ? <Spinner />
                :
                children
            }
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

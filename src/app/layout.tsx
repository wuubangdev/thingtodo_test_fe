'use client'
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";
import Spinner from "@/components/loading/Spinner";


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Khi trang đã tải xong
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <html lang="en">
      <body>
        {
          loading ? <Spinner />
            :
            children
        }
      </body>
    </html>
  );
}

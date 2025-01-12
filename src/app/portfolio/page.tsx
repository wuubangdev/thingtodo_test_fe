import LandingPage from '@/components/portfolio/LandingPage';
import { Metadata } from 'next';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolio.css";

export const metadata: Metadata = {
    title: "Present",
    description: "Thingtodo present",
};

const PortfolioPage = () => {

    return (
        <div className='bg-[#fcfcfc]'>
            <LandingPage />
        </div>
    )
}

export default PortfolioPage;
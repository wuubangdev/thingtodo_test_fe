import LandingPage from '@/components/portfolio/LandingPage';
import { Metadata } from 'next';
import React from 'react';
import "./portfolio.css"

export const metadata: Metadata = {
    title: "Present",
    description: "Thingtodo present",
};

const PortfolioPage = () => {

    return (
        <div className='bg-[#fcfcfc]'>
            <LandingPage />
            <div className='h-screen'></div>
        </div>
    )
}

export default PortfolioPage;
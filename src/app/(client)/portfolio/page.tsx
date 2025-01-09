import ShowTagline from '@/components/portfolio/s1.show.tagline/ShowTagline';
import IntroCompany from '@/components/portfolio/s2.intro.company/IntroCompany';
import ShowProject from '@/components/portfolio/s3.show.project/ShowProject';
import Process from '@/components/portfolio/s4.process/Process';
import AiGenerateAndCGI from '@/components/portfolio/s5.cgi.ai.generate/AiGenerateAndCGI';
import Comparison from '@/components/portfolio/s6.comparison/Comparison';
import CTA from '@/components/portfolio/s7.cta/CTA';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Present",
    description: "Thingtodo present",
};

const PortfolioPage = () => {

    return (
        <div>
            {/* S1: Show clip with tagline */}
            <ShowTagline />
            {/* S2: Company Introduction */}
            <IntroCompany />
            {/* S3: Show project */}
            <ShowProject />
            {/* S4: Process */}
            <Process />
            {/* S5: Ai Generate */}
            <AiGenerateAndCGI />
            {/* S6: Comparison */}
            <Comparison />
            {/* S7: CTA */}
            <CTA />
        </div>
    )
}

export default PortfolioPage;
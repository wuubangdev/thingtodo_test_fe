'use client';
import React, { useRef } from 'react';
import Progress from './s0.page.progress/Progress';
import ShowTagline from './s1.show.tagline/ShowTagline';
import IntroCompany from './s2.intro.company/IntroCompany';
import ShowProject from './s3.show.project/ShowProject';
import Process from './s4.process/Process';
import AiGenerateAndCGI from './s5.cgi.ai.generate/AiGenerateAndCGI';
import Comparison from './s6.comparison/Comparison';
import CTA from './s7.cta/CTA';

export default function LandingPage() {
    // Define types for refs
    const sectionsRefs = [
        useRef<HTMLDivElement | null>(null), // ShowTagline
        useRef<HTMLDivElement | null>(null), // IntroCompany
        useRef<HTMLDivElement | null>(null), // ShowProject
        useRef<HTMLDivElement | null>(null), // Process
        useRef<HTMLDivElement | null>(null), // AiGenerateAndCGI
        useRef<HTMLDivElement | null>(null), // Comparison
        useRef<HTMLDivElement | null>(null), // CTA
    ];

    const scrollToSection = (index: number) => {
        const targetRef = sectionsRefs[index]?.current;
        if (targetRef) {
            targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div>
            {/* Pass scroll logic to Progress */}
            <Progress scrollToSection={scrollToSection} />
            <div>
                <div ref={sectionsRefs[0]}>
                    <ShowTagline />
                </div>
                <div ref={sectionsRefs[1]}>
                    <IntroCompany />
                </div>
                <div ref={sectionsRefs[2]}>
                    <ShowProject />
                </div>
                <div ref={sectionsRefs[3]}>
                    <Process />
                </div>
                <div ref={sectionsRefs[4]}>
                    <AiGenerateAndCGI />
                </div>
                <div ref={sectionsRefs[5]}>
                    <Comparison />
                </div>
                <div ref={sectionsRefs[6]}>
                    <CTA />
                </div>
            </div>
        </div>
    );
}

'use client';
import React, { useRef } from 'react';
import ShowTagline from './s1.show.tagline/ShowTagline';
import IntroCompany from './s2.intro.company/IntroCompany';
import ShowProject from './s3.show.project/ShowProject';
import Process from './s4.process/Process';
import AiGenerateAndCGI from './s5.cgi.ai.generate/AiGenerateAndCGI';
import Comparison from './s6.comparison/Comparison';
import CTA from './s7.cta/CTA';
import DesktopNavbar from './_.port.navbar/DesktopNavbar';
import PortFooter from './s8.footer/PortFooter';
import Cursor from './Cursor';

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
        <div className='overflow-x-hidden'>
            <Cursor />
            {/* Pass scroll logic to Progress */}
            {/* <Progress scrollToSection={scrollToSection} /> */}
            <div>
                <div><DesktopNavbar /></div>
                <div ref={sectionsRefs[0]}>
                    <ShowTagline />
                </div>
                <div ref={sectionsRefs[1]} className='bg-[#fcfcfc]'>
                    <IntroCompany />
                </div>
                <div ref={sectionsRefs[2]} className='bg-[#fcfcfc]'>
                    <ShowProject />
                </div>
                <div ref={sectionsRefs[3]} className='bg-[#fcfcfc]'>
                    <Process />
                </div>
                <div ref={sectionsRefs[4]} className='bg-[#fcfcfc]'>
                    <AiGenerateAndCGI />
                </div>
                <div ref={sectionsRefs[5]} className='bg-[#fcfcfc]'>
                    <Comparison />
                </div>
                <div ref={sectionsRefs[6]}>
                    <CTA />
                </div>
                <div ref={sectionsRefs[7]}>
                    <PortFooter />
                </div>
            </div>
        </div>
    );
}

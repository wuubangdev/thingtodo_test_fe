'use client'
import React, { useState } from 'react'

interface ISectionInfo {
    title: string;
    id: string;
}

const sections: ISectionInfo[] = [
    { title: "Section 1", id: "#section1" },
    { title: "Section 2", id: "#section2" },
    { title: "Section 3", id: "#section3" },
    { title: "Section 4", id: "#section4" },
    { title: "Section 5", id: "#section5" },
    { title: "Section 6", id: "#section6" },
    { title: "Section 7", id: "#section7" },
]

interface IProps {
    scrollToSection: (index: number) => void
}

const DesktopProgress: React.FC<IProps> = ({ scrollToSection }) => {
    const [percent, setPresent] = useState(0);

    return (
        <div
            className='w-full h-12 relative'
            style={{
                backdropFilter: "blur(5px)",
                background: "rgba(255,255,255,0.7)"
            }}
        >
            <div
                className='absolute top-0 bottom-0 left-0 bg-green-600 duration-500'
                style={{
                    width: `${((percent + 1) / 7) * 100}%`
                }}
            ></div>
            <div className='absolute w-full h-full top-0 flex justify-between items-center'>
                {sections && sections.map((section, i) => (
                    <div
                        key={section.id}
                        className='w-full py-2 flex justify-center border-l-[0.5px] border-white cursor-pointer'
                        onClick={() => {
                            setPresent(i);
                            scrollToSection(i);
                        }}
                    >
                        {section.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesktopProgress;
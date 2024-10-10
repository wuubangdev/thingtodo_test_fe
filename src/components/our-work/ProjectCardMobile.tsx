'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export interface IProjectCard {
    image: string;
    title: string;
    description: string;
}

const ProjectCardMobile: React.FC<IProjectCard> = (props) => {
    const { image, description, title } = props;
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Kiểm tra nếu 50% component đã nằm trong viewport
                if (rect.top <= windowHeight - rect.height / 2 && rect.bottom >= rect.height / 2) {
                    setIsHovered(true); // Kích hoạt hiệu ứng hover
                } else {
                    setIsHovered(false); // Hủy bỏ hiệu ứng hover
                }
            }
        };

        // Gọi hàm để kiểm tra khi trang tải
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='w-full'>
            <div
                ref={cardRef}
                className={`group w-full overflow-hidden relative cursor-pointer ${isHovered ? 'bg-black/30' : ''}`}
            >
                <Image
                    alt='project-image'
                    src={image}
                    width={684}
                    height={590}
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    className={`transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
                />
                <div className={`absolute top-0 bottom-0 left-0 right-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex flex-col'>
                        <div
                            className={`absolute bg-primary p-1 rounded-full w-1/3 scale-0 transition-transform duration-700 ${isHovered ? 'scale-100' : ''} top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3`}
                        >
                            <Image
                                alt='project-image'
                                src={'/ourwork/project_detail.svg'}
                                width={132}
                                height={132}
                                style={{
                                    width: '100%',
                                    height: 'auto'
                                }}
                                className='rotate-infinite'
                            />
                            <div className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </div>
                        {/* Info */}
                        <div className='text-white p-4 absolute bottom-0'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-[12px] font-medium'>Overview</h3>
                                <p className='text-sm line-clamp-5'>Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 w-full'>
                <h2 className='body-1-medium text-black border-b-[1px] border-black gap-4 pb-2'>{title}</h2>
                <p className='body-1-regular text-black-blur border-b-[1px] border-black-blur flex-1 pb-2'>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCardMobile;
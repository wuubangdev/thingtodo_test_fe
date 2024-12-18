'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useCallback } from 'react';

interface IProps {
    project: IProject
}

const ProjectCardMobile: React.FC<IProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const { project } = props;

    // Sử dụng useCallback để tránh re-render không cần thiết
    const handleOnClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setIsHovered((prevState) => !prevState);
    }, []);

    const renderContent = () => {
        // Kiểm tra loại tệp tin
        if (project.mainMedia.endsWith('.webp')) {
            return (
                <Image
                    alt="project-image"
                    src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${project.mainMedia}`}
                    width={684}
                    height={590}
                    className="group-hover:scale-105 duration-500 rounded"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    loading="lazy"
                />
            );
        }
        return (
            <video
                autoPlay
                playsInline
                webkit-playsinline="true"
                muted
                loop
                className="group-hover:scale-105 duration-500 rounded"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            >
                <source src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${project.mainMedia}`} type="video/mp4" />
            </video>
        );
    };

    return (
        <Link href={`/projects/${project.id}`} onClick={handleOnClick}>
            <div className="w-full scroll-in">
                <div
                    className={`mb-2 group w-full overflow-hidden relative cursor-pointer ${isHovered ? 'bg-black/30' : ''}`}
                >
                    {renderContent()}

                    <div
                        className={`absolute top-0 bottom-0 left-0 right-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="flex flex-col">
                            <div
                                className={`absolute bg-primary p-1 rounded-full w-1/3 scale-0 transition-transform duration-700 ${isHovered ? 'scale-100' : ''} top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3`}
                            >
                                <Image
                                    alt="project-image"
                                    src="/ourwork/comming.svg"
                                    width={114}
                                    height={114}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    className="rotate-infinite"
                                    loading="lazy"
                                />
                                <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Image
                                        alt="project-image"
                                        src="/ourwork/icon_comming.svg"
                                        width={32}
                                        height={32}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 w-full">
                    <h2 className="body-2-medium text-black border-b-[1px] border-black gap-4 pb-2">{project.title}</h2>
                    <p className="body-2-regular text-black-blur border-b-[1px] border-black-blur flex-1 pb-2">
                        {project.subTitle}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default React.memo(ProjectCardMobile);

'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useState } from 'react';

const ReactPlayer = React.lazy(() => import('react-player/lazy'));

export interface IProjectCard {
    link: string;
    title: React.ReactElement;
    description: string;
}

const ProjectCardMobile: React.FC<IProjectCard> = (props) => {
    const { link, description, title } = props;
    const [isHovered, setIsHovered] = useState(false);


    return (
        <Link href=""
            onClick={(e) => {
                e.preventDefault();
                setIsHovered(!isHovered);
            }}
        >
            <div className='w-full scroll-in'>
                <div
                    className={`mb-2 group w-full overflow-hidden relative cursor-pointer ${isHovered ? 'bg-black/30' : ''}`}
                >
                    {(!link.endsWith('.svg') && !link.endsWith('.gif') && !link.endsWith('raw=true'))
                        ?
                        // <div
                        //     style={{
                        //         position: 'relative',
                        //         paddingTop: '100%',
                        //         overflow: 'hidden',
                        //     }}
                        // >
                        //     <Suspense fallback={<div>Loading...</div>}>
                        //         <ReactPlayer
                        //             url={link}
                        //             playing={true}
                        //             muted={true}
                        //             controls={false}
                        //             loop={true}
                        //             width="100%"
                        //             height="100%"
                        //             style={{ position: 'absolute', top: 0, left: 0 }}
                        //         />
                        //     </Suspense>
                        // </div>
                        <video
                            autoPlay
                            muted
                            loop
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            className='group-hover:scale-105 duration-500 rounded'
                        >
                            <source src={link} type="video/mp4" />
                        </video>
                        :
                        <Image
                            alt="project-image"
                            src={link}
                            width={684}
                            height={590}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            className='group-hover:scale-105 duration-500 rounded'
                            loading="lazy"
                        />
                    }
                    <div className={`absolute top-0 bottom-0 left-0 right-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className='flex flex-col'>
                            <div
                                className={`absolute bg-primary p-1 rounded-full w-1/3 scale-0 transition-transform duration-700 ${isHovered ? 'scale-100' : ''} top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3`}
                            >
                                <Image
                                    alt='project-image'
                                    // src={'/ourwork/project_detail.svg'}
                                    src={'/ourwork/comming.svg'}
                                    // width={132}
                                    // height={132}
                                    width={114}
                                    height={114}
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                    className='rotate-infinite'
                                    loading="lazy"
                                />
                                <div className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                                    <Image
                                        alt='project-image'
                                        // src={'/ourwork/arrow_icon.svg'}
                                        src={'/ourwork/icon_comming.svg'}
                                        width={32}
                                        height={32}
                                        style={{
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* <div className='text-white p-4 absolute bottom-0'>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='text-[12px] font-medium'>Overview</h3>
                                    <p className='text-sm line-clamp-5'>Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.</p>
                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 w-full'>
                    <h2 className='body-2-medium text-black border-b-[1px] border-black gap-4 pb-2'>{title}</h2>
                    <p className='body-2-regular text-black-blur border-b-[1px] border-black-blur flex-1 pb-2'>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCardMobile;
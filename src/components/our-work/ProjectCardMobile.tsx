'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

export interface IProjectCard {
    link: string;
    title: React.ReactElement;
    description: string;
}

const ProjectCardMobile: React.FC<IProjectCard> = (props) => {
    const { link, description, title } = props;
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (cardRef.current) {
    //             const rect = cardRef.current.getBoundingClientRect();
    //             const windowHeight = window.innerHeight;

    //             // Kiểm tra nếu 50% component đã nằm trong viewport
    //             if (rect.top <= windowHeight - rect.height / 2 && rect.bottom >= rect.height / 2) {
    //                 setIsHovered(true); // Kích hoạt hiệu ứng hover
    //             } else {
    //                 setIsHovered(false); // Hủy bỏ hiệu ứng hover
    //             }
    //         }
    //     };

    //     // Gọi hàm để kiểm tra khi trang tải
    //     handleScroll();

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <Link href=""
            onClick={(e) => {
                e.preventDefault();
                setIsHovered(!isHovered);
            }}
        >
            <div className='w-full'>
                <div
                    className={`mb-2 group w-full overflow-hidden relative cursor-pointer ${isHovered ? 'bg-black/30' : ''}`}
                >
                    {!link.endsWith('.svg')
                        ?
                        <div className='relative'
                            style={{
                                position: 'relative',
                                paddingTop: '100%', // Tỷ lệ khung hình 1:1
                                // borderRadius: '40px',
                                overflow: 'hidden',
                            }}
                        >
                            <ReactPlayer
                                url={link} // Sử dụng URL trực tiếp mà không cần tham số không cần thiết
                                playing={true}       // Tự động phát
                                muted={true}         // Tắt âm thanh
                                controls={false}     // Ẩn điều khiển
                                loop={true}
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />

                        </div>
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
import Image from 'next/image';
import Link from 'next/link';
import MovingHoverButton from './MovingHoverButton';
import { IProjectCard } from './OurWork';

//Category: All, Brand strategy, Logo, Brand identity, Packaging, Website, Print Design, Motion, Campaign,
//Sectors: All, Other, Beauty, Industrial, Construction, Communication, Education

interface IProps {
    isRelease?: boolean;
    project: IProjectCard;
}


const ProjectCard = (props: IProps) => {
    const { link, description, title } = props.project;
    return (
        <Link href="#" className='w-full h-full relative block scroll-in'>
            <div className='w-full h-full overflow-hidden flex flex-col relative'>
                <div className='group w-full flex-1 overflow-hidden relative cursor-pointer lg:mb-2 rounded'>
                    {link.endsWith('.webm')
                        ?
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
                            <source src={link} type="video/webm" />
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
                    <div className='absolute bg-[#131E29]/60 top-0 bottom-0 left-0 right-0 group-hover:opacity-100 opacity-0 duration-500 rounded overflow-hidden'>
                        <div className='flex flex-col w-full h-full'>
                            <MovingHoverButton />
                            {/* Info */}
                            {!props.isRelease &&
                                <div className='grid grid-cols-2 gap-6 text-white p-4 absolute bottom-0'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-[12px] font-medium'>Overview</h3>
                                        <p className='text-sm line-clamp-5'>Our 2D and 3D graphic design services create visually stunning digital assets that bring your brand to life, from captivating logos to immersive animations.</p>
                                    </div>
                                    <div>
                                        <h3 className='text-[12px] font-medium'>Result</h3>
                                        <div className='grid grid-cols-3 gap-2'>
                                            <div className='border-b-[1px] pb-1 border-dotted border-white'>
                                                <h1 className='text-2xl font-Archia font-semibold'>23+</h1>
                                                <p className='text-[12px]'>Customer Segments</p>
                                            </div>
                                            <div className='border-b-[1px] pb-1 border-dotted border-white'>
                                                <h1 className='text-2xl font-Archia font-semibold'>55+</h1>
                                                <p className='text-[12px]'>Automation flow</p>
                                            </div>
                                            <div className='border-b-[1px] pb-1 border-dotted border-white'>
                                                <h1 className='text-2xl font-Archia font-semibold'>400%</h1>
                                                <p className='text-[12px]'>Increase quantity of sampling broadcast</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute flex gap-4 left-0 right-0 -bottom-10'>
                <h2 className='block text-nowrap body-1-medium text-black border-b-[1px] border-black gap-4 pb-2'>{title}</h2>
                <p className='block text-nowrap body-1-regular text-black-blur border-b-[1px] border-black-blur flex-1 pb-2'>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard


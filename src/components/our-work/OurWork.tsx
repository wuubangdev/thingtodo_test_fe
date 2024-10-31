import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardMobile, { IProjectCard } from './ProjectCardMobile'
// import Link from 'next/link'

const projects: IProjectCard[] = [
    {
        link: '/ourwork/w1.mp4',
        description: 'Promotion CGI ',
        title: <span>Yomilk</span>
    },
    {
        link: '/ourwork/w2.svg',
        description: 'Rebranding Campaign',
        title: <span>Probi</span>
    },
    {
        link: '/ourwork/w3.gif',
        description: 'iTVC: Blueberry Yoghurt',
        title: <span>Sữa chua Vinamilk</span>
    },
    {
        link: '/ourwork/w4.mp4',
        description: "New '9 Nuts' TV commercial",
        title: <span>Sữa hạt Vinamilk</span>
    },
    {
        link: '/ourwork/w5.svg',
        description: 'Design Activation Booth',
        title: <span>Green Farm</span>
    },
    {
        link: '/ourwork/w6.mp4',
        description: 'Production for Fresh Milk',
        title: <span>Vinamilk</span>
    },
]
const projectMobile: IProjectCard[] = [
    {
        link: 'https://ik.imagekit.io/rbzjuhmml/TTD/w1.mp4?updatedAt=1730414531146',
        description: 'Promotion CGI ',
        title: <span>Yomilk</span>
    },
    {
        link: '/ourwork/w2.svg',
        description: 'Rebranding Campaign',
        title: <span>Probi</span>
    },
    {
        link: '/ourwork/w3.gif',
        description: 'iTVC: Blueberry Yoghurt',
        title: <span>Sữa chua Vinamilk</span>
    },
    {
        link: 'https://ik.imagekit.io/rbzjuhmml/TTD/w4.mp4?updatedAt=1730414530821',
        description: "New '9 Nuts' TV commercial",
        title: <span>Sữa hạt Vinamilk</span>
    },
    {
        link: '/ourwork/w5.svg',
        description: 'Design Activation Booth',
        title: <span>Green Farm</span>
    },
    {
        link: 'https://ik.imagekit.io/rbzjuhmml/TTD/w6.mp4?updatedAt=1730414531016',
        description: 'Production for Fresh Milk',
        title: <span>Vinamilk</span>
    },
]
const OurWork = () => {
    return (
        <div
            id='work'
            className='px-6 flex flex-col gap-20 pt-4 md:pb-40 pb-10'
            style={{
                // background: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(/ourwork/noise.png),url(/ourwork/noise.png)",
                // backgroundPosition: 'center',
                backgroundColor: '#f8f8f8',
                backdropFilter: 'blur(30px)',
                boxShadow: "0px 1px 2px 0px #FFFFFF80 inset",
            }}
        >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-end flex-wrap pt-6 md:pt-[53px]'>
                <h1 className='md:block hidden headline-4'>OUR WORKS</h1>
                <h1 className='md:hidden block title-2-medium'>OUR WORKS</h1>
                <h3 className='subtitle-2-regular text-[#666D74]'>Selected projects <br /> 2022-2024</h3>
            </div>
            <div className='md:grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20 hidden '>
                {projects && projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        isRelease={true}
                    />
                ))}
            </div>
            <div className='md:hidden grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20 grid'>
                {projectMobile && projectMobile.map((project, index) => (
                    <ProjectCardMobile
                        key={index}
                        link={project.link}
                        description={project.description}
                        title={project.title}
                    />
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div></div>
                <div className='flex'>
                    {/* <Link
                        href={'#'}
                        className='text-underline pb-1'
                    >
                        <div className='flex gap-4 items-center cursor-pointer'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="md:size-10 size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                            <span className='md:block hidden title-2-medium pb-3'>See all projects</span>
                            <span className='md:hidden block subtitle-1-medium flex-1 pb-2'>See all projects</span>
                        </div>
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default OurWork
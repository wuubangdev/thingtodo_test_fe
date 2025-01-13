import React from 'react'
import FooterHeading from './FooterHeading';
import GameCarousel from './carousel/GameCarousel';
import FooterSocial from './FooterSocial';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const PortFooter = () => {
    function enterPic() {
        throw new Error('Function not implemented.');
    }

    return (
        <div
            className='-mt-20'
            style={{
                borderRadius: '5rem 5rem 0px 0px',
                padding: '5rem 0rem 1.5rem 0rem',
                background: '#131E29'
            }}
        >
            <FooterHeading />
            <Marquee
                speed={100}
                direction='left'
                // pauseOnHover={true}
                loop={0}
                style={{ cursor: 'pointer' }}
                className='pt-14'
            >
                <div
                    className='flex gap-3'
                    style={{
                        height: 400,
                        marginRight: 12,

                    }}
                >
                    <div
                        style={{
                            borderRadius: 12,
                            overflow: 'hidden'
                        }}>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/footer/behind/1.webp'}
                            width={264}
                            height={379}
                            className='h-full w-auto rounded-xl'
                        />
                    </div>

                    <div
                        style={{
                            borderRadius: 12,
                            overflow: 'hidden'
                        }}>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/footer/behind/2.webp'}
                            width={264}
                            height={379}
                            className='h-full w-auto rounded-xl'
                        />
                    </div>
                    <div
                        style={{
                            borderRadius: 12,
                            overflow: 'hidden'
                        }}>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/footer/behind/3.webp'}
                            width={264}
                            height={379}
                            className='h-full w-auto rounded-xl'
                        />
                    </div>
                    <div
                        style={{
                            borderRadius: 12,
                            overflow: 'hidden'
                        }}>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/footer/behind/4.webp'}
                            width={264}
                            height={379}
                            className='h-full w-auto rounded-xl'
                        />
                    </div>
                    <div
                        style={{
                            borderRadius: 12,
                            overflow: 'hidden'
                        }}>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/footer/behind/5.webp'}
                            width={264}
                            height={379}
                            className='h-full w-auto rounded-xl'
                        />
                    </div>
                    <div
                        style={{
                            borderRadius: 12,
                            overflow: 'hidden'
                        }}>
                        <Image
                            alt='project-tet-1'
                            src={'/portfo_access/footer/behind/6.webp'}
                            width={264}
                            height={379}
                            className='h-full w-auto rounded-xl'
                        />
                        <div
                            style={{
                                borderRadius: 12,
                                overflow: 'hidden'
                            }}>
                            <Image
                                alt='project-tet-1'
                                src={'/portfo_access/footer/behind/7.webp'}
                                width={264}
                                height={379}
                                className='h-full w-auto rounded-xl'
                            />
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                overflow: 'hidden'
                            }}>
                            <Image
                                alt='project-tet-1'
                                src={'/portfo_access/footer/behind/8.webp'}
                                width={264}
                                height={379}
                                className='h-full w-auto rounded-xl'
                            />
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                overflow: 'hidden'
                            }}>
                            <Image
                                alt='project-tet-1'
                                src={'/portfo_access/footer/behind/9.webp'}
                                width={264}
                                height={379}
                                className='h-full w-auto rounded-xl'
                            />
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                overflow: 'hidden'
                            }}>
                            <Image
                                alt='project-tet-1'
                                src={'/portfo_access/footer/behind/10.webp'}
                                width={264}
                                height={379}
                                className='h-full w-auto rounded-xl'
                            />
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                overflow: 'hidden'
                            }}>
                            <Image
                                alt='project-tet-1'
                                src={'/portfo_access/footer/behind/11.webp'}
                                width={264}
                                height={379}
                                className='h-full w-auto rounded-xl'
                            />
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                overflow: 'hidden'
                            }}>
                            <Image
                                alt='project-tet-1'
                                src={'/portfo_access/footer/behind/12.webp'}
                                width={264}
                                height={379}
                                className='h-full w-auto rounded-xl'
                            />
                        </div>
                        <div
                            style={{
                                borderRadius: 12,
                                overflow: 'hidden'
                            }}>
                            <Image
                                alt='project-tet-1'
                                src={'/portfo_access/footer/behind/13.webp'}
                                width={264}
                                height={379}
                                className='h-full w-auto rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </Marquee>
            <FooterSocial />
        </div>
    )
}

export default PortFooter;
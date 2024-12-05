import Image from 'next/image'
import React from 'react'

const RenderMedia = ({ media }: { media: string }) => {
    return (
        <div>
            {media.endsWith('.webm') || media.endsWith('.mp4')
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
                    <source src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${media}`} type="video/webm" />
                    <source src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${media}`} type="video/mp4" />
                </video>
                :
                <Image
                    alt="project-image"
                    src={`${process.env.NEXT_PUBLIC_RESOURCE_URL}/${media}`}
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
        </div>
    )
}

export default RenderMedia;
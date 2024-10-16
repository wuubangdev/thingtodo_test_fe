import Image from 'next/image';
import React from 'react';

export interface IClient {
    id: string;
    title: string;
    logoDark: string;
    logoLight: string;
}

const ClientCard = (props: IClient) => {
    const { logoDark, logoLight } = props;
    return (
        <div className='w-full flex justify-center items-center relative group cursor-pointer'>
            <Image
                alt='client-logo-frame'
                src={logoDark}
                width={198}
                height={117}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
                className='group-hover:opacity-0 duration-500'
            />
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center group-hover:opacity-100 opacity-0 duration-500'>
                <Image
                    alt='client-logo-frame'
                    src={logoLight}
                    width={198}
                    height={117}
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </div>
        </div>
    )
}

export default ClientCard;
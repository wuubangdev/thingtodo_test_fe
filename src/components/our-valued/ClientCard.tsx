import Image from 'next/image';
import React from 'react';

export interface IClient {
    id: string;
    title: string;
    logoDark: string;
    logoLight: string;
}

const ClientCard = (props: IClient) => {
    const { logoDark } = props;
    return (
        <div className='w-full flex justify-center items-center'>
            <Image
                alt='client-logo-frame'
                src={logoDark}
                width={198}
                height={117}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            />
        </div>
    )
}

export default ClientCard;
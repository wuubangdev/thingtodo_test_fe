import React from 'react';
import ClientCard from './ClientCard';

interface IProps {
    clients: IClient[];
}

const OurValued = (props: IProps) => {
    const { clients } = props;
    return (
        <div className='md:px-6 px-4 flex flex-col gap-8'>
            <h1 className='body-2-medium text-white border-b-[0.5px] pb-4 border-[#666D74]'>
                OUR VALUED CLIENTS
            </h1>
            <div className='grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 gap-y-8 md:gap-x-0 gap-x[-20px]'>
                {clients && clients.map((client) => (
                    <ClientCard
                        key={client.id}
                        id={client.id}
                        name={client.name}
                        logo={client.logo}
                        logoHover={client.logoHover}
                    />
                ))}
            </div>
        </div>
    )
}

export default OurValued
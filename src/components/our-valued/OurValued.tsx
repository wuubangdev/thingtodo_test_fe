import React from 'react';
import ClientCard, { IClient } from './ClientCard';



const clients: IClient[] = [
    { id: '1', title: 'Vinamilk', logoDark: '/valued/Vinamilk.svg', logoLight: '/valued/C_Vinamilk.svg' },
    { id: '2', title: 'Maggi', logoDark: '/valued/Maggi.svg', logoLight: '/valued/C_Maggi.svg' },
    { id: '3', title: 'Marico', logoDark: '/valued/Marico.svg', logoLight: '/valued/C_Marico.svg' },
    { id: '4', title: 'Lavie', logoDark: '/valued/Lavie.svg', logoLight: '/valued/C_Lavie.svg' },
    { id: '5', title: 'Conbocuoi', logoDark: '/valued/CBC.svg', logoLight: '/valued/C_CBC.svg' },
    { id: '6', title: 'Huggies', logoDark: '/valued/Huggies.svg', logoLight: '/valued/C_Huggies.svg' },
    { id: '7', title: 'Senka', logoDark: '/valued/SENKA.svg', logoLight: '/valued/C_SENKA.svg' },
    { id: '8', title: 'Nestle', logoDark: '/valued/Nestle.svg', logoLight: '/valued/C_Nestle.svg' },
    { id: '9', title: 'Tiktok', logoDark: '/valued/Tiktok.svg', logoLight: '/valued/C_Tiktok.svg' },
    { id: '10', title: 'Tam thai tu', logoDark: '/valued/TTT.svg', logoLight: '/valued/C_TTT.svg' },
    { id: '11', title: 'Xmen', logoDark: '/valued/Xmen.svg', logoLight: '/valued/C_Xmen.svg' },
    { id: '12', title: 'Kotex', logoDark: '/valued/Kotex.svg', logoLight: '/valued/C_Kotex.svg' },
]

const OurValued = () => {
    return (
        <div className='px-6 flex flex-col gap-8'>
            <h1 className='body-2-medium text-white border-b-[0.5px] pb-4 border-[#666D74]'>
                OUR VALUED CLIENTS
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-y-8 gap-x-0'>
                {clients && clients.map((client) => (
                    <ClientCard
                        key={client.id}
                        id={client.id}
                        title={client.title}
                        logoLight={client.logoDark}
                        logoDark={client.logoLight}
                    />
                ))}
            </div>

        </div>
    )
}

export default OurValued
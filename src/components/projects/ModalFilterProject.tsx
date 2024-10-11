'use client'
import React, { useState } from 'react';
export interface ICategory {
    value: string;
    title: string;
}
export interface ISector {
    value: string;
    title: string;
}
//Category: All, Brand strategy, Logo, Brand identity, Packaging, Website, Print Design, Motion, Campaign,
//Sectors: All, Other, Beauty, Industrial, Construction, Communication, Education
const categories: ICategory[] = [
    { value: 'ALL', title: 'All' },
    { value: 'BRAND-STRATEGY', title: 'Brand strategy' },
    { value: 'LOGO', title: 'Logo' },
    { value: 'BRAND-IDENTITY', title: 'Brand identity' },
    { value: 'PACKAGING', title: 'Packaging' },
    { value: 'WEBSITE', title: 'Website' },
    { value: 'MOTION', title: 'Motion' },
    { value: 'CAMPAIGN', title: 'Campaign' },
]
const sectors: ISector[] = [
    { value: 'ALL', title: 'All' },
    { value: 'OTHER', title: 'Other' },
    { value: 'BEAUTY', title: 'Beauty' },
    { value: 'INDUSTRIAL', title: 'Industrial' },
    { value: 'CONSTRUCTION', title: 'Construction' },
    { value: 'EDUCATION', title: 'Education' },
]

interface IProps {
    categoryValue: string,
    setCategoryValue: (v: any) => void,
    sectorValue: string,
    setSectorValue: (v: any) => void,
}

const ModalFilterProject = (props: IProps) => {
    const { categoryValue, sectorValue, setCategoryValue, setSectorValue } = props;
    const [isShowCategorySelect, setIsShowCategorySelect] = useState<boolean>(false);
    const [isShowSectorSelect, setIsShowSectorSelect] = useState<boolean>(false);

    const getCategogyTitle = (v: string) => {
        if (v) {
            const ctg = categories.find(item => item.value === v);
            if (ctg) return ctg.title;
            return 'All';
        }
        return 'All';
    }

    const getSectorTitle = (v: string) => {
        if (v) {
            const st = sectors.find(item => item.value === v);
            if (st) return st.title;
            return 'All';
        }
        return 'All';
    }

    return (
        <div className='px-6 '>
            <div className='relative grid grid-cols-1 md:grid-cols-2 gap-6  border-b-[1px] border-solid border-[#b8b8b8] pt-2 pb-4'>
                {/* Desktop */}
                <div
                    className='hidden gap-2 md:flex cursor-pointer select-none'
                    onClick={() => setIsShowCategorySelect(!isShowCategorySelect)}
                >
                    <div className='subtitle-2-regular'>
                        Category
                    </div>
                    <div className='subtitle-2-medium'>
                        ({getCategogyTitle(categoryValue)})
                    </div>
                    <div
                        className={`subtitle-2-medium flex items-center mt-1 ${isShowCategorySelect ? 'rotate-180' : ''} duration-500`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    {isShowCategorySelect &&
                        <div className='absolute top-14 flex flex-col items-start z-10 subtitle-2-regular bg-primary-trans p-4'>
                            {categories && categories.map((item, index) => (
                                <button
                                    key={index}
                                    className='px-4 pb-2 pt-2 border-b-[1px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer hover:opacity-70'
                                    onClick={() => setCategoryValue(item.value)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    }
                </div>
                {/* Mobile */}
                <div
                    className='flex md:hidden gap-2'
                    onClick={() => setIsShowCategorySelect(!isShowCategorySelect)}
                >
                    <div className='body-1-regular'>
                        Category
                    </div>
                    <div className='body-1-medium'>
                        ({getCategogyTitle(categoryValue)})
                    </div>
                    <div className='subtitle-2-medium flex items-center mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    {isShowCategorySelect &&
                        <div className='absolute top-14 flex flex-col items-start z-10 body-1-regular bg-primary-trans p-4'>
                            {categories && categories.map((item, index) => (
                                <button
                                    key={index}
                                    className='px-4 pb-2 pt-2 border-b-[1px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer hover:opacity-70'
                                    onClick={() => setCategoryValue(item.value)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    }
                </div>
                {/* Desktop */}
                <div
                    className='hidden md:flex gap-2 select-none cursor-pointer'
                    onClick={() => setIsShowSectorSelect(!isShowSectorSelect)}
                >
                    <div className='subtitle-2-regular'>
                        Sectors
                    </div>
                    <div className='subtitle-2-medium'>
                        ({getSectorTitle(sectorValue)})
                    </div>
                    <div className='subtitle-2-medium flex items-center mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    {isShowSectorSelect &&
                        <div className='absolute top-14 flex flex-col items-start z-10 subtitle-2-regular bg-primary-trans p-4'>
                            {sectors && sectors.map((item, index) => (
                                <button
                                    key={index}
                                    className='px-4 pb-2 pt-2 border-b-[1px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer hover:opacity-70'
                                    onClick={() => setSectorValue(item.value)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    }
                </div>
                {/* Mobile */}
                <div
                    className='flex md:hidden gap-2'
                    onClick={() => setIsShowSectorSelect(!isShowSectorSelect)}
                >
                    <div className='body-1-regular'>
                        Sectors
                    </div>
                    <div className='body-1-medium'>
                        ({getSectorTitle(sectorValue)})
                    </div>
                    <div className='subtitle-2-medium flex items-center mt-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    {isShowSectorSelect &&
                        <div className='absolute top-14 flex flex-col items-start z-10 body-1-regular bg-primary-trans p-4'>
                            {sectors && sectors.map((item, index) => (
                                <button
                                    key={index}
                                    className='px-4 pb-2 pt-2 border-b-[1px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer hover:opacity-70'
                                    onClick={() => setSectorValue(item.value)}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalFilterProject;
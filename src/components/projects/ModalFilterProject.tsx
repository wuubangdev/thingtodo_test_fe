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
const categories: ICategory[] = [
    { value: 'ALL', title: 'All' },
    { value: 'DIGITAL-ASSET', title: 'Digital Asset' },
    { value: 'PRODUCTION', title: 'Production' },
    { value: 'PACKAGING', title: 'Packaging' },
    { value: 'CGI-VFX', title: 'CGI, VFX' },
    { value: 'PRIVACY-AND-DELICATED', title: 'Privacy and Delicated' },
]
const sectors: ISector[] = [
    { value: 'ALL', title: 'All' },
    { value: 'FOOT-BEVERAGE', title: 'Food & Beverage' },
    { value: 'FMCG', title: 'FMCG' },
    { value: 'HOSPITALITY', title: 'Hospitality' },
    { value: 'ENTERTAINMENT', title: 'Entertainment' },
    { value: 'E-COMMERCE', title: 'E-commerce' },
    { value: 'TECHNOLOGY', title: 'Technology' },
]

interface IProps {
    categoryValue: string,
    setCategoryValue: React.Dispatch<React.SetStateAction<string>>,
    sectorValue: string,
    setSectorValue: React.Dispatch<React.SetStateAction<string>>,
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

    const handleMouseEnterCate = () => {
        setIsShowCategorySelect(true);
    };

    const handleMouseLeaveCate = () => {
        setIsShowCategorySelect(false);
    };

    const handleMouseEnterSector = () => {
        setIsShowSectorSelect(true);
    };

    const handleMouseLeaveSector = () => {
        setIsShowSectorSelect(false);
    };

    return (
        <div className='px-6 sticky top-0 w-full bg-bg-fc z-20'>
            <div className='relative grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 border-b-[1px] border-solid border-[#b8b8b8] pb-12'>
                {/* Desktop */}
                <div className='relative'>
                    <div
                        className='hidden gap-2 md:flex cursor-pointer select-none pt-2 pb-4 absolute'
                        onClick={() => setIsShowCategorySelect(!isShowCategorySelect)}
                        onMouseEnter={handleMouseEnterCate}
                        onMouseLeave={handleMouseLeaveCate}
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
                            <div className='absolute top-12 flex flex-col items-start z-10 subtitle-3-regular'
                                style={{
                                    borderBottomRightRadius: 4,
                                    borderBottomLeftRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: "0px 5px 5.3px 0px #0000000D",
                                    left: 0,
                                    right: 0,
                                    minWidth: 280,
                                }}
                            >
                                {categories && categories.map((item, index) => (
                                    <button
                                        key={index}
                                        className='px-2 pb-4 pt-2 border-b-[0.5px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer'
                                        onClick={() => setCategoryValue(item.value)}
                                        style={{
                                            background: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url(/ourwork/noise.png)",
                                            backgroundPosition: 'center',
                                            backgroundColor: 'rgba(252, 252, 252, 0.6)',
                                            backdropFilter: 'blur(20px)',
                                            boxShadow: "0px 5px 5.3px 0px #0000000D",
                                            fontWeight: categoryValue === item.value ? "500" : "400",
                                        }}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                {/* Mobile */}
                <div
                    className='flex flex-col md:hidden gap-2'
                    onClick={() => setIsShowCategorySelect(!isShowCategorySelect)}
                >
                    <div className='flex gap-3 pt-2 pb-3 border-b-[1px] border-primary'>
                        <div className='body-1-regular text-primary'>
                            Category
                        </div>
                        <div className='body-1-medium text-primary'>
                            ({getCategogyTitle(categoryValue)})
                        </div>
                        <div className='subtitle-2-medium flex items-center mt-1 text-primary'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    {isShowCategorySelect &&
                        <div className='top-14 flex flex-col items-start z-10 body-1-regular'
                        >
                            {categories && categories.map((item, index) => (
                                <button
                                    key={index}
                                    className='px-4 pb-2 pt-3 border-b-[1px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer hover:opacity-70'
                                    onClick={() => setCategoryValue(item.value)}
                                    style={{
                                        color: categoryValue === item.value ? "#80868B" : ""
                                    }}
                                >
                                    {categoryValue === item.value ? <><span>(</span>{item.title}<span>)</span></> : item.title}
                                </button>
                            ))}
                        </div>
                    }
                </div>
                {/* Desktop */}
                <div className='relative'>
                    <div
                        className='hidden md:flex gap-2 select-none pt-2 pb-4 cursor-pointer absolute'
                        onClick={() => setIsShowSectorSelect(!isShowSectorSelect)}
                        onMouseEnter={handleMouseEnterSector}
                        onMouseLeave={handleMouseLeaveSector}
                    >
                        <div className='subtitle-2-regular'>
                            Sectors
                        </div>
                        <div className='subtitle-2-medium'>
                            ({getSectorTitle(sectorValue)})
                        </div>
                        <div
                            className={`subtitle-2-medium flex items-center mt-1 ${isShowSectorSelect ? 'rotate-180' : ''} duration-500`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        {isShowSectorSelect &&
                            <div className='absolute top-12 flex flex-col items-start z-10 subtitle-3-regular'
                                style={{
                                    borderBottomRightRadius: 4,
                                    borderBottomLeftRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: "0px 5px 5.3px 0px #0000000D",
                                    left: 0,
                                    right: 0,
                                    minWidth: 280,
                                }}
                            >
                                {sectors && sectors.map((item, index) => (
                                    <button
                                        key={index}
                                        className='px-2 pb-2 pt-4 border-b-[1px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer'
                                        onClick={() => setSectorValue(item.value)}
                                        style={{
                                            background: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url(/ourwork/noise.png)",
                                            backgroundPosition: 'center',
                                            backgroundColor: 'rgba(252, 252, 252, 0.6)',
                                            backdropFilter: 'blur(20px)',
                                            boxShadow: "0px 5px 5.3px 0px #0000000D",
                                            fontWeight: sectorValue === item.value ? "500" : "400",
                                        }}
                                    >
                                        {item.title}
                                    </button>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                {/* Mobile */}
                <div
                    className='flex flex-col md:hidden gap-2'
                    onClick={() => setIsShowSectorSelect(!isShowSectorSelect)}
                >
                    <div className='flex gap-3 border-b-[1px] border-[#b8b8b8] pt-2 pb-3'>
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
                    </div>
                    {isShowSectorSelect &&
                        <div className='flex flex-col items-start z-10 body-2-regular'
                        >
                            {sectors && sectors.map((item, index) => (
                                <button
                                    key={index}
                                    className='px-4 pb-3 pt-2 border-b-[1px] border-solid w-full text-left border-[#b8b8b8] cursor-pointer hover:opacity-70'
                                    onClick={() => setSectorValue(item.value)}
                                    style={{
                                        color: sectorValue === item.value ? "#80868B" : ""
                                    }}
                                >
                                    {sectorValue === item.value ? <><span>(</span>{item.title}<span>)</span></> : item.title}
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
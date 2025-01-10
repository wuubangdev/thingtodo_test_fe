'use client'
import useMediaQuery from '@/app/hooks/useMediaQuery'
import React, { useMemo } from 'react'
import MobileProgress from './MobileProgress'
import DesktopProgress from './DesktopProgress'

interface IProps {
    scrollToSection: (index: number) => void
}

const Progress: React.FC<IProps> = ({ scrollToSection }) => {
    const isMobile = useMediaQuery('(max-width: 767px)')
    // Tối ưu hóa việc render chỉ khi dữ liệu thay đổi
    const renderProjects = useMemo(() => {
        return isMobile ? <MobileProgress /> : <DesktopProgress scrollToSection={scrollToSection} />;
    }, [isMobile])
    return (
        <div className='w-full fixed top-0'>{renderProjects}</div>
    )
}

export default Progress;
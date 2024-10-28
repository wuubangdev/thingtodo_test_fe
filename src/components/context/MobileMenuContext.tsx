// context/YourContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu cho dữ liệu của Context
interface IMobileMenu {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Khởi tạo Context với kiểu dữ liệu, mặc định là `undefined`
const MobileMenuContext = createContext<IMobileMenu | undefined>(undefined);

// Tạo Provider với kiểu dữ liệu cho props `children`
export function MobileMenuContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const value = { isOpen, setIsOpen };

    return (
        <MobileMenuContext.Provider value={value}>
            {children}
        </MobileMenuContext.Provider>
    );
}

// Hook tùy chỉnh để sử dụng MobileMenuContext
export function useMobileMenuContext() {
    const context = useContext(MobileMenuContext);

    if (context === undefined) {
        throw new Error('useMobileMenuContext must be used within a MobileMenuContextProvider');
    }

    return context;
}

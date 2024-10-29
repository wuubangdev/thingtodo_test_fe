// context/YourContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu cho dữ liệu của Context
interface IContactMenu {
    isContactOpen: boolean;
    setIsContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Khởi tạo Context với kiểu dữ liệu, mặc định là `undefined`
const ContactContext = createContext<IContactMenu | undefined>(undefined);

// Tạo Provider với kiểu dữ liệu cho props `children`
export function ContactContextProvider({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

    const value = { isContactOpen, setIsContactOpen };

    return (
        <ContactContext.Provider value={value}>
            {children}
        </ContactContext.Provider>
    );
}

// Hook tùy chỉnh để sử dụng ContactContext
export function useContactContext() {
    const context = useContext(ContactContext);

    if (context === undefined) {
        throw new Error('useMobileMenuContext must be used within a ContactContextProvider');
    }

    return context;
}

// context/YourContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu cho dữ liệu của Context
interface IVariant {
    cursorVariant: 'default' | 'picture' | 'contact';
    setCursorVariant: React.Dispatch<React.SetStateAction<'default' | 'picture' | 'contact'>>;
}

// Khởi tạo Context với kiểu dữ liệu, mặc định là `undefined`
const CursorVariantContext = createContext<IVariant | undefined>(undefined);

// Tạo Provider với kiểu dữ liệu cho props `children`
export function CursorVariantContextProvider({ children }: { children: ReactNode }) {
    const [cursorVariant, setCursorVariant] = useState<'default' | 'picture' | 'contact'>('default');

    const value = { cursorVariant, setCursorVariant };

    return (
        <CursorVariantContext.Provider value={value}>
            {children}
        </CursorVariantContext.Provider>
    );
}

// Hook tùy chỉnh để sử dụng CursorVariantContext
export function useCursorVariantContext() {
    const context = useContext(CursorVariantContext);

    if (context === undefined) {
        throw new Error('useMobileMenuContext must be used within a CursorVariantContextProvider');
    }

    return context;
}

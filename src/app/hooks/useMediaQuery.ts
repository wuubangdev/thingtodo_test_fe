// src/app/hooks/useMediaQuery.ts

import { useState, useEffect } from 'react';

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const updateMatches = () => setMatches(mediaQueryList.matches);

        // Kiểm tra giá trị ban đầu
        updateMatches();

        // Lắng nghe thay đổi của media query
        mediaQueryList.addEventListener('change', updateMatches);

        // Dọn dẹp khi component unmount
        return () => mediaQueryList.removeEventListener('change', updateMatches);
    }, [query]);

    return matches;
}

export default useMediaQuery;

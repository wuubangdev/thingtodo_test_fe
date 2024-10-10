'use client'
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const variants = {
    initial: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5 } }, // "Slide out top"
};

const PageTransition = ({ children }: { children: React.ReactNode; }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const { asPath } = useRouter();

    useEffect(() => {
        setDisplayChildren(children);
    }, [children]);

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={asPath}
                initial="initial"
                animate="initial"
                exit="exit"
                variants={variants}
                style={{ position: 'absolute', width: '100%' }}
            >
                {displayChildren}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;

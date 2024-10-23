// app/404.tsx

import Link from 'next/link';
import './notfound.scss'

const Custom404 = () => {
    return (
        <div className='flex flex-col w-screen h-screen overflow-hidden'>
            <div className="face">
                <div className="band">
                    <div className="red"></div>
                    <div className="white"></div>
                    <div className="blue"></div>
                </div>
                <div className="eyes"></div>
                <div className="dimples"></div>
                <div className="mouth"></div>
            </div>
            <h1>Oops! Something went wrong!</h1>
            <Link className="btn bg-primary hover:bg-primary-trans" href={'/'}>Return to Home</Link>
        </div>
    );
};

export default Custom404;

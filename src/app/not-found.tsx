// app/404.tsx

import NavbarError from '@/components/navbar/NavbarError';
import Image from 'next/image';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className='w-full h-screen overflow-hidden bg-[#131E29]'>
      <NavbarError />
      <div className='flex items-center h-full justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full 2xl:gap-20 xl:gap-16 xl:px-28 py-4 2xl:px-32 gap-6 px-10 relative'>
          <div className='relative'>
            <Image
              alt=''
              src={'/error/vector_1.svg'}
              width={325}
              height={325}
              className='w-full h-auto'
            />
            <div className='absolute w-full h-full top-0 left-0'>
              <Image
                alt=''
                src={'/error/vector_hover_0.svg'}
                width={325}
                height={325}
                className='w-full h-auto object-content opacity-0 hover:opacity-100 duration-300' // Thêm lớp animation
              />
            </div>
          </div>
          <div className='relative'>
            <Image
              alt=''
              src={'/error/vector_2.svg'}
              width={266}
              height={302}
              className='w-full h-auto object-content'
            />
            <div className='absolute w-full h-full top-0 left-0'>
              <Image
                alt=''
                src={'/error/vector_hover_1.svg'}
                width={325}
                height={325}
                className='w-full h-auto object-content opacity-100 hover:opacity-100 duration-300' // Thêm lớp animation
              />
            </div>
          </div>
          <div className='relative'>
            <Image
              alt=''
              src={'/error/vector_3.svg'}
              width={261}
              height={296}
              className='w-full h-auto object-content'
            />
            <div className='absolute w-full h-full top-0 left-0'>
              <Image
                alt=''
                src={'/error/vector_hover_2.svg'}
                width={325}
                height={325}
                className='w-full h-auto object-content opacity-0 hover:opacity-100 duration-300 ' // Thêm lớp animation
              />
            </div>
          </div>
          <div className='relative'>
            <Image
              alt=''
              src={'/error/vector_4.svg'}
              width={268}
              height={270}
              className='w-full h-auto object-content'
            />
            <div className='absolute w-full h-full top-0 left-0'>
              <Image
                alt=''
                src={'/error/vector_hover_3.svg'}
                width={325}
                height={325}
                className='w-full h-auto object-content opacity-0 hover:opacity-100 duration-300' // Thêm lớp animation
              />
            </div>
          </div>
          <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center text-bg-fc'>
            <div className='flex flex-col md:gap-10 gap-20 pt-10'>
              <div className='flex flex-col md:gap-4 gap-8 justify-center items-center'>
                <h1 className='title-1-medium text-center hidden md:block'>OOPS! SOMETHING <br />WENT WRONG</h1>
                <h1 className='title-1-medium text-center block md:hidden'>OOPS! <br /> SOMETHING <br />WENT WRONG</h1>
                <span className='body-3-regular text-center hidden md:block'>404 Error. The page you&apos;re looking for does not exist :(</span>
                <span className='body-3-regular text-center block md:hidden'>404 Error. The page you&apos;re <br /> looking for does not exist :(</span>

              </div>
              <div className='flex justify-center items-center '>
                <Link href={'/'} className='pt-2 pb-[10px] px-6 body-2-medium rounded-[24px] border-[1px] border-bg-fc cursor-pointer group flex hover:gap-2 duration-300 items-center'>
                  <span className='translate-x-1 group-hover:-translate-x-0 duration-300'>Back to Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fcfcfc"
                    className="size-5 group-hover:block hidden duration-500 rotate-180"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;

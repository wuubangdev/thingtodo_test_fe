// app/404.tsx
'use client'
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #131E29;
`;

const ImageWrapper = styled.div`
  position: relative;

  .image-hover {
    animation: fadeIn 2s infinite alternate;
  }
  &:nth-child(1) .image-hover {
    animation-delay: 0s;
  }
  &:nth-child(2) .image-hover {
    animation-delay: 2.5s;
  }
  &:nth-child(3) .image-hover {
    animation-delay: 5s;
  }
  &:nth-child(4) .image-hover {
    animation-delay: 7.5s;
  }
`;

const Custom404 = () => {
    return (
        <Container>
            <Navbar isPrimary={false} />
            <div className='flex items-center h-full justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-4 w-full 2xl:gap-20 xl:gap-16 xl:px-28 py-4 2xl:px-32 gap-6 px-10'>
                    {[1, 2, 3, 4].map((num) => (
                        <ImageWrapper key={num}>
                            <Image
                                alt=''
                                src={`/error/vector_${num}.svg`}
                                width={325}
                                height={325}
                                className='w-full h-auto object-content'
                            />
                            <div className='absolute w-full h-full top-0 left-0'>
                                <Image
                                    alt=''
                                    src={`/error/vector_hover_${num - 1}.svg`}
                                    width={325}
                                    height={325}
                                    className='w-full h-auto object-content opacity-0 image-hover'
                                />
                            </div>
                        </ImageWrapper>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Custom404;

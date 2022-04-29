import Image from 'next/image';
import React from 'react';

const Avatar = ({ url }: any) => {
  return (
    <div className='relative w-[36px] h-[36px] rounded-full overflow-hidden cursor-pointer hover:scale-[115%] transition-all duration-200 ease-out'>
      <Image src={url} layout='fill' objectFit='cover' alt='picture profile' />
    </div>
  );
};

export default Avatar;

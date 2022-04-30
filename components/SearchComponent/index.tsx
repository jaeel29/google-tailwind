import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useRef, useState } from 'react';

const SearchComponent = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (event: FormEvent) => {
    event.preventDefault();
    const query = searchInputRef.current?.value;

    if (!query) return;

    router.push(`/search?term=${query}`);
  };

  return (
    <form className='flex-grow flex flex-col items-center justify-center'>
      <div className='relative w-[300px] h-[100px] mb-10'>
        <Image
          src={'http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'}
          layout='fill'
          objectFit='contain'
          alt='Google logo'
          priority
        />
      </div>

      <div className='max-w-md flex items-center gap-2 w-full border border-gray-200 rounded-full px-3 focus-within:shadow-lg transition-all duration-150 ease-out md:max-w-xl'>
        <SearchIcon className='w-5 h-5' />
        <input ref={searchInputRef} type='text' className='outline-none flex-1 h-full py-3' />
        <MicrophoneIcon className='w-5 h-5' />
      </div>

      <div className='flex flex-col gap-4 mt-6 sm:flex-row'>
        <button className='btn' onClick={search}>
          Google Search
        </button>
        <button className='btn'>I{"'"}m Feeling Lucky</button>
      </div>
    </form>
  );
};

export default SearchComponent;

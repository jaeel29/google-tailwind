import Image from 'next/image';
import React, { FormEvent, useEffect, useState } from 'react';
import {
  BookmarkAltIcon,
  DotsVerticalIcon,
  MicrophoneIcon,
  NewspaperIcon,
  PhotographIcon,
  SearchIcon,
  VideoCameraIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { CogIcon } from '@heroicons/react/solid';
import HeaderOption from '../HeaderOption';
import Avatar from '../Avatar';

const SearchHeader = ({ router, searchHandler }: any) => {
  const routerQuery = router.query.term;
  const [searchInput, setSearchInput] = useState<string>('');
  const handleChage = (e: any) => setSearchInput(e.target.value);

  useEffect(() => {
    setSearchInput(routerQuery);
  }, [routerQuery]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    const query = searchInput;

    if (!query) return;

    router.push(`/search?term=${query}`);
  };

  return (
    <header className='flex flex-col gap-6 w-full px-6 pt-7 border-b border-gray-200 sticky top-0 bg-white'>
      <div className='flex gap-10 items-center '>
        <div
          className='relative w-[120px] h-[40px] cursor-pointer'
          onClick={() => router.push('/')}
        >
          <Image
            src={'http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png'}
            layout='fill'
            objectFit='contain'
            alt='google logo'
            priority
          />
        </div>

        <form
          onSubmit={handleSearch}
          className='flex-grow flex items-center w-full ring-1 ring-gray-200 max-w-md pr-3 rounded-full focus-within:shadow-lg'
        >
          <input
            value={searchInput}
            onChange={handleChage}
            type='text'
            className='outline-none w-full py-2 pl-4 bg-transparent'
          />

          <div className='flex gap-3'>
            {searchInput.length !== 0 && (
              <XIcon
                className='w-5 h-5 cursor-pointer transition-all duration-100 ease-out hover:scale-125'
                onClick={() => setSearchInput('')}
              />
            )}

            <div className='hidden sm:inline-flex gap-3'>
              <div className='border-r border-gray-200' />
              <MicrophoneIcon className='w-5 h-5 cursor-pointer transition-all duration-100 ease-out hover:scale-125' />
              <SearchIcon className='w-5 h-5 cursor-pointer transition-all duration-100 ease-out hover:scale-125' />
            </div>
          </div>
        </form>

        <div className='ml-auto flex items-center'>
          <div className='w-11 h-11 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200'>
            <CogIcon className='w-6 h-6' />
          </div>

          <div className='w-11 h-11 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200'>
            <ViewGridIcon className='h-6 w-6' />
          </div>

          {/* Avatar */}
          <div>
            <Avatar url='/jaber 2.jpg' />
          </div>
        </div>
      </div>

      <div className='max-w-5xl flex pl-[10%] md:pl-[15%]'>
        <div className='flex gap-6'>
          <HeaderOption Icon={SearchIcon} title='All' selected />
          <HeaderOption Icon={PhotographIcon} title='Images' />
          <HeaderOption Icon={VideoCameraIcon} title='Videos' />
          <HeaderOption Icon={BookmarkAltIcon} title='Books' />
          <HeaderOption Icon={NewspaperIcon} title='News' />
          <HeaderOption Icon={DotsVerticalIcon} title='More' />
        </div>

        <div>
          <HeaderOption title='Tools' />
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;

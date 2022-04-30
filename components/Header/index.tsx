import { ViewGridIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import Avatar from '../Avatar';

const Header = () => {
  return (
    <header className='h-16 w-full flex items-center text-sm px-5'>
      <div className='flex items-center gap-4 ml-auto'>
        <div className='flex gap-4'>
          <Link href={'/'}>
            <a className='link'>Gmail</a>
          </Link>
          <Link href={'/'}>
            <a className='link'>Images</a>
          </Link>
        </div>

        {/* Icon */}
        <div className='w-11 h-11 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-200'>
          <ViewGridIcon className='h-6 w-6' />
        </div>

        {/* Avatar */}
        <div>
          <Avatar url='/jaber 2.jpg' />
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full divide-y divide-gray-200'>
      <div className='w-full bg-gray-50 h-12  flex items-center px-5 text-sm'>Morocco</div>
      <div className='w-full bg-gray-50 py-4 flex flex-col gap-7 sm:flex-row justify-between items-center px-5 text-sm'>
        <div className='flex gap-4'>
          <Link href={'/'}>
            <a className='link'>About</a>
          </Link>
          <Link href={'/'}>
            <a className='link'>Advertising</a>
          </Link>
          <Link href={'/'}>
            <a className='link'>Business</a>
          </Link>
          <Link href={'/'}>
            <a className='link'>How Search works</a>
          </Link>
        </div>

        <div className='flex gap-4'>
          <Link href={'/'}>
            <a className='link'>Privacy</a>
          </Link>
          <Link href={'/'}>
            <a className='link'>Terms</a>
          </Link>
          <Link href={'/'}>
            <a className='link'>Settings</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Pagination = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className='max-w-5xl mt-7 py-4 pl-[10%] md:pl-[15%] flex gap-6 justify-start text-sm'>
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`} passHref>
          <div className='flex gap-2 items-center bg-gray-100 py-3 rounded-md w-[120px] justify-center cursor-pointer'>
            <ChevronLeftIcon className='w-5 h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`} passHref>
        <div className='flex gap-2 items-center bg-gray-100 py-3 rounded-md w-[120px] justify-center cursor-pointer'>
          <p>Next</p>
          <ChevronRightIcon className='w-5 h-5' />
        </div>
      </Link>
    </div>
  );
};

export default Pagination;

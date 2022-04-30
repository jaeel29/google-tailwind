import Link from 'next/link';
import React from 'react';

const HeaderOption = ({ Icon, title, selected }: any) => {
  return (
    <Link href={'/'} passHref>
      <div
        className={`flex gap-2 items-center py-2 cursor-pointer text-sm ${
          selected && 'border-b-4 border-blue-500 text-blue-500'
        }`}
      >
        {Icon && <Icon className='h-5' />}
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default HeaderOption;

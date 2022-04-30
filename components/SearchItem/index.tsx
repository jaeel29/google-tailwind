import React from 'react';

const SearchItem = ({ result }: any) => {
  return (
    <div className='w-full group'>
      <div>
        <a className='text-sm' href={result.link}>
          {result.formattedUrl}
        </a>
        <a href={result.link}>
          <h2 className='truncate text-blue-600 text-xl font-medium my-1 group-hover:underline'>
            {result.title}
          </h2>
        </a>
      </div>

      <p className='line-clamp-2'>{result.snippet}</p>
    </div>
  );
};

export default SearchItem;

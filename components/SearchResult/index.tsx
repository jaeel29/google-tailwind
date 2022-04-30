import React from 'react';
import SearchItem from '../SearchItem';

const SearchResult = ({ results }: any) => {
  console.log(results);

  return (
    <div className='w-full px-6'>
      <div className='max-w-5xl bg-gray-100 pt-4 pl-[10%] md:pl-[15%]'>
        <p className='text-sm mb-6'>
          About {results.searchInformation.formattedTotalResults} results (
          {results.searchInformation.formattedSearchTime} seconds)
        </p>

        <div className='pr-[10%] md:pr-[25%] flex flex-col gap-8'>
          {results.items.map((result: any) => (
            <SearchItem key={result.cacheId} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

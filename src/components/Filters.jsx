import React from 'react';
import useJobContext from '../hooks/useJobContext';
import RemoveIcon from '../assets/icons/RemoveIcon';

const Filters = () => {
  const { filters, removeFilter, clearFilters } = useJobContext();

  return (
    <div className="mx-auto -translate-y-1/3 px-5 font-League-Spartan md:max-w-2xl md:-translate-y-1/2 lg:max-w-4xl xl:max-w-6xl">
      <div className="flex justify-between rounded-md bg-white px-5 py-5 shadow-lg shadow-Primary-Dark-Cyan/30 xl:px-10">
        <ul className="flex flex-wrap gap-4" role="list">
          {filters.map((filter) => (
            <li
              key={filter}
              className="flex gap-3 overflow-hidden rounded bg-Neutral-Light-Cyan-Filter-Tablets font-bold text-Primary-Dark-Cyan"
            >
              <span className="py-0.5 pl-2">{filter}</span>
              <button
                onClick={() => removeFilter(filter)}
                className="bg-Primary-Dark-Cyan px-2 transition hover:bg-Neutral-Very-Dark-Cyan"
                aria-label="Remove filter"
              >
                <RemoveIcon />
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={clearFilters}
          className="font-bold text-Neutral-Dark-Cyan underline-offset-2 transition hover:text-Primary-Dark-Cyan hover:underline"
          aria-label="Clear all filters"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;

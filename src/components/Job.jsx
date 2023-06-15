import React from 'react';
import useJobContext from '../hooks/useJobContext';

const Job = ({ data }) => {
  const { selectFilter } = useJobContext();
  const {
    company,
    logo,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  let categories = [role, level, ...languages, ...tools];

  return (
    <div className="relative flex min-w-min flex-col rounded-md bg-white px-6 font-League-Spartan text-[15px] shadow-lg shadow-Primary-Dark-Cyan/30 sm:flex-row sm:items-center sm:gap-4 sm:py-5 xl:px-10 xl:py-7">
      {data.featured && (
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 top-0 w-1 rounded-bl-md rounded-tl-md bg-Primary-Dark-Cyan"
        />
      )}
      <img
        src={logo}
        alt={company}
        className="absolute top-0 aspect-square w-14 -translate-y-1/2 object-cover sm:relative sm:translate-y-0 lg:w-auto"
      />

      <div className="mt-9 flex flex-1 flex-col sm:mt-0 xl:space-y-1">
        <div className="flex items-center gap-5">
          <span className="font-bold text-Primary-Dark-Cyan">{company}</span>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
            {data.new && (
              <span className="rounded-full bg-Primary-Dark-Cyan px-2 py-0.5">
                new!
              </span>
            )}
            {data.featured && (
              <span className="rounded-full bg-Neutral-Very-Dark-Cyan px-2 py-0.5">
                featured
              </span>
            )}
          </div>
        </div>

        <div className="my-2 space-y-2 sm:my-0 sm:space-y-0">
          <span className="cursor-pointer font-bold text-Neutral-Very-Dark-Cyan transition hover:text-Primary-Dark-Cyan lg:text-xl">
            {position}
          </span>
          <div className="flex gap-2 text-Neutral-Dark-Cyan">
            <span>{postedAt}</span> &middot;
            <span>{contract}</span> &middot;
            <span>{location}</span>
          </div>
        </div>
      </div>

      <hr className="sm:hidden" />

      <ul className="my-4 flex flex-1 flex-wrap gap-4 pr-5 sm:my-0 sm:justify-end sm:pr-0 lg:flex-nowrap">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => selectFilter(category)}
              className="rounded bg-Neutral-Light-Cyan-Filter-Tablets px-2 py-0.5 font-bold text-Primary-Dark-Cyan transition hover:bg-Primary-Dark-Cyan hover:text-white"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;

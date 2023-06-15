import React from 'react';
import Job from '../components/Job';
import useJobContext from '../hooks/useJobContext';

const Jobs = () => {
  const { data, filters } = useJobContext();

  const catergoryMatchesFilter = (cat) => {
    // destructure role, level, languages, tools from cat
    const { role, level, languages, tools } = cat;

    // array containing all values from properties
    // spread (...) includes all elements from languages and tools
    const allCategories = [role, level, ...languages, ...tools];

    // every method checks if every element in the filters array is included in the allCategories array
    return filters.every((selectedFilter) =>
      allCategories.includes(selectedFilter)
    );
  };

  const filteredCategories = data.filter((filter) =>
    filter.length === 0 ? true : catergoryMatchesFilter(filter)
  );

  return (
    <div
      className={`mx-auto grid grid-cols-1 gap-12 px-5 pb-10 pt-16 sm:gap-5 md:max-w-2xl md:pb-24 lg:max-w-4xl xl:max-w-6xl ${
        filters.length > 0 && '-mt-10 pb-28 sm:-mt-16'
      }`}
    >
      {filteredCategories.map((cat) => (
        <Job key={cat.id} data={cat} />
      ))}
    </div>
  );
};

export default Jobs;

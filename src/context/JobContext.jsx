import { createContext, useState } from 'react';
import data from '../data/data.json';

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);

  const selectFilter = (filterItem) => {
    setFilters((prev) =>
      prev.includes(filterItem) ? prev : [...prev, filterItem]
    );
  };

  const removeFilter = (filterItem) => {
    const updatedFilters = filters.filter((filter) => filter !== filterItem);
    setFilters(updatedFilters);
  };

  const clearFilters = () => setFilters([]);

  return (
    <JobContext.Provider
      value={{ data, filters, selectFilter, removeFilter, clearFilters }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;

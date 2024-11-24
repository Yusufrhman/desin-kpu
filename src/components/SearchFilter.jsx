import { useState } from "react";
import PropTypes from "prop-types";

const SearchFilter = ({ onSearch, onFilter, options }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to the parent
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilter(e.target.value); // Pass the selected filter to the parent
  };

  return (
    <div className='flex justify-between items-center space-x-4 mb-6'>
      {/* Search Input */}
      <div className='flex items-center border rounded-full px-3 py-2 w-full max-w-md'>
        <input
          type='text'
          placeholder='Cari nama'
          value={searchTerm}
          onChange={handleSearchChange}
          className='flex-grow outline-none bg-transparent text-gray-700'
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-gray-400'
          viewBox='0 0 24 24'
          stroke='currentColor'
          id='search'
        >
          <g>
            <path d='m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z'></path>
          </g>
        </svg>
      </div>

      {/* Dropdown Filter */}
      {options && (
        <select
          value={selectedFilter}
          onChange={handleFilterChange}
          className='border rounded-lg px-3 py-2 text-gray-700'
        >
          <option value=''>Semua</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchFilter;

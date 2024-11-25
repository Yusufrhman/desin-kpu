import { useState } from "react";
import PartyCard from "../../components/party/PartyCard";
import SearchFilter from "../../components/SearchFilter";
import { parties } from "../../utils/candidate-party";

const PartyInfo = () => {
  const partiesPerPage = 9;

  // Dummy data for parties

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter parties based on search and filter
  const filteredParties = parties.filter((party) => {
    const matchesSearch = party.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter
      ? party.name.includes(selectedFilter)
      : true;
    return matchesSearch && matchesFilter;
  });

  // Calculate total pages dynamically
  const totalPages = Math.ceil(filteredParties.length / partiesPerPage);

  // Paginate parties
  const paginatedParties = filteredParties.slice(
    (currentPage - 1) * partiesPerPage,
    currentPage * partiesPerPage
  );

  // Pagination Handlers
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Search and Filter Handlers
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // Reset to first page on filter
  };

  return (
    <div className='flex justify-center items-center my-10'>
      <div className='p-4 w-[60vw] min-h-lvh '>
        {/* Search and Filter */}
        <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />

        {/* Party Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {paginatedParties.map((party) => (
            <PartyCard key={party.id} party={party} />
          ))}
          {
            paginatedParties.length === 0 && (
              <div className='text-center text-gray-500'>
                No parties found
              </div>
            )
          }
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-between items-center mt-6'>
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-200 text-black rounded ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-300"
            }`}
          >
            Previous
          </button>

          {/* Current Page Indicator */}
          <div className='flex space-x-2'>
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full ${
                  currentPage === index + 1 ? "bg-yellow-400" : "bg-gray-400"
                }`}
              ></span>
            ))}
           
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`px-4 py-2 bg-yellow-400 text-white rounded ${
              currentPage === totalPages || totalPages === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartyInfo;

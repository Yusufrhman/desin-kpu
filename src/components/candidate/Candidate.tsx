import React from "react";
import CandidateCard from "./CandidateCard";

const Candidate = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between mb-6'>
        <div>Search</div>
        <div>Filter</div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {[...Array(9)].map((_, index) => (
          <CandidateCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Candidate;

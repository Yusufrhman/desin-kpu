import PropTypes from "prop-types";
import { useState } from "react";

const CandidateInput = ({ candidate, onVoteSubmit }) => {
  const [votes, setVotes] = useState(""); // State for input votes

  //   const handleVoteSubmit = () => {
  //     if (votes.trim() === "" || isNaN(votes)) {
  //       alert("Please enter a valid number of votes!");
  //       return;
  //     }

  //     onVoteSubmit(candidate.number, votes); // Call the submit handler
  //     setVotes(""); // Reset input field
  //   };

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center border border-[#D9D9D9] rounded-xl p-4 max-w-xs sm:max-w-sm md:max-w-md gap-3'>
        {/* Candidate Image */}
        <div className='w-36 h-48 sm:w-40 sm:h-52 md:w-48 md:h-64'>
          <img
            className='rounded-xl object-cover w-full h-full'
            src={candidate.image}
            alt='Candidate'
          />
        </div>
        <div className='flex justify-around items-center gap-6'>
          {/* Candidate Info */}
          <div className='flex items-center w-full'>
            <div className='flex items-center gap-2 w-full justify-center'>
              {/* Candidate Number */}
              <div className='text-black font-bold text-base sm:text-2xl'>
                {candidate.number}
              </div>

              {/* Candidate Name and City */}
              <div className='text-left text-xs'>
                <div className='font-semibold'>{candidate.name}</div>
                <div className='text-gray-600'>{candidate.city}</div>
              </div>
            </div>
          </div>

          {/* Voting Form */}
          <div className='max-w-16'>
            <input
              type='number'
              value={votes}
              onChange={(e) => setVotes(e.target.value)}
              placeholder='0'
              className='w-full border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CandidateInput.propTypes = {
  candidate: PropTypes.shape({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    party: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onVoteSubmit: PropTypes.func,
};

export default CandidateInput;

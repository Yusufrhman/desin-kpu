import CandidateInput from "../../../components/vote-input/CandidateInput";
import PropTypes from "prop-types";
import { candidates, parties } from "../../../utils/candidate-party.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

const VoteInput = () => {
  const { name } = useParams();
  const party = parties.find((party) => party.name === name);
  const data = candidates.filter((candidate) => candidate.party.name === name);

  const handleVoteSubmit = (candidateNumber, votes) => {
    alert(`Votes submitted for Candidate ${candidateNumber}: ${votes}`);
    // You can save the data to state or send it to an API here
  };
  const [files, setFiles] = useState([null, null, null]);

  const handleFileChange = (e, index) => {
    const newFiles = [...files];
    newFiles[index] = e.target.files[0];
    setFiles(newFiles);
  };

  const handleSave = () => {
    console.log("Files uploaded:", files);
  };

  return (
    <div className='flex justify-center items-center my-10'>
      <div className=''>
        <div className='flex justify-between px-2 items-center'>
          <div className='text-left'>
            <h1 className='font-bold text-3xl'>Input Hasil</h1>
            <h2 className='text-2xl'>Pemilihan Umum 2024</h2>
          </div>
          <div className='w-18 h-24 sm:w-20 sm:h-26 md:w-24 md:h-32 flex justify-center items-center'>
            <img
              className='object-contain w-full h-full'
              src={party.logo}
              alt={party.name}
            />
          </div>
        </div>
        <div className=''>
          {/* Party Candidates Carousel */}
          <div className='w-full p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {data.map((d, index) => (
                <CandidateInput
                  key={index}
                  candidate={d}
                  onVoteSubmit={handleVoteSubmit}
                />
              ))}
            </div>
          </div>

          <div className='p-5 space-y-5 text-left'>
            {[1, 2, 3].map((page, index) => (
              <div key={page}>
                <h2 className='mb-2 text-lg font-medium'>Halaman {page}</h2>
                <label
                  htmlFor={`file-input-${page}`}
                  className='flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-gray-50'
                >
                  <div className='text-center'>
                    <p className='text-sm text-gray-500'>Drag Here</p>
                    <p className='text-sm text-gray-500'>OR</p>
                    <p className='text-sm text-blue-500 underline'>
                      Choose a file
                    </p>
                  </div>
                </label>
                <input
                  id={`file-input-${page}`}
                  type='file'
                  onChange={(e) => handleFileChange(e, index)}
                  className='hidden'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='w-full text-right px-2'>
          <button
            onClick={handleSave}
            className='px-6 py-2 font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600'
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

VoteInput.propTypes = {
  party: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default VoteInput;

import PropTypes from "prop-types";
const CandidateCard = ({ candidate }) => {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center border border-[#D9D9D9] rounded-xl p-4 max-w-xs sm:max-w-sm md:max-w-md gap-3'>
        <div className='w-36 h-48 sm:w-40 sm:h-52 md:w-48 md:h-64'>
          <img
            className='rounded-xl object-cover w-full h-full'
            src={candidate.image}
            alt='candidate image'
          />
        </div>
        <div className='flex gap-4 items-center w-full'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 md:w-12 md:h-12'>
              <img
                src={candidate.party.logo}
                alt='partai'
                className='w-full h-full object-contain'
              />
            </div>
            <div className='text-black font-bold text-base sm:text-2xl'>
              {candidate.number}
            </div>
            <div className='text-left text-xs'>
              <div className='font-semibold'>{candidate.name}</div>
              <div className='text-gray-600'>{candidate.city}</div>
            </div>
          </div>
          <button className='ml-auto flex justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 30 30'
              fill='none'
            >
              <path
                d='M0 15C0 17.9667 0.879735 20.8668 2.52796 23.3335C4.17618 25.8003 6.51886 27.7229 9.25975 28.8582C12.0006 29.9935 15.0166 30.2905 17.9263 29.7118C20.8361 29.133 23.5088 27.7044 25.6066 25.6066C27.7044 23.5088 29.133 20.8361 29.7118 17.9263C30.2905 15.0166 29.9935 12.0006 28.8582 9.25975C27.7229 6.51886 25.8003 4.17618 23.3335 2.52796C20.8668 0.879735 17.9667 0 15 0C11.0217 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0217 0 15ZM6.42857 13.9286H19.4464L13.4679 7.92107L15 6.42857L23.5714 15L15 23.5714L13.4679 22.0425L19.4464 16.0714H6.42857V13.9286Z'
                fill='#FED700'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

CandidateCard.propTypes = {
  candidate: PropTypes.shape({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    party: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CandidateCard;

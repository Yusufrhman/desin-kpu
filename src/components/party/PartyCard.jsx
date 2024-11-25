import PropTypes from "prop-types";
import partaiLogo from "../../assets/images/partai-1.png"; // Replace with the party's logo path
import { Link } from "react-router-dom";

const PartyCard = ({ party }) => {
  return (
    <Link to={party.name}>
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center border border-[#D9D9D9] rounded-xl p-4 max-w-xs sm:max-w-sm md:max-w-md gap-3'>
          {/* Party Logo */}
          <div className='w-36 h-48 sm:w-40 sm:h-52 md:w-48 md:h-64 flex justify-center items-center'>
            <img
              className='object-contain w-full h-full'
              src={party.logo || partaiLogo} // Dynamically load the party logo
              alt={`${party.name} logo`}
            />
          </div>

          {/* Party Details */}
          <div className='text-center flex w-full justify-around'>
            <h3 className='text-lg sm:text-xl font-bold text-black'>
              {party.name}
            </h3>
            <button className='ml-auto flex justify-center items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
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

          {/* Button */}
        </div>
      </div>
    </Link>
  );
};
PartyCard.propTypes = {
  party: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PartyCard;

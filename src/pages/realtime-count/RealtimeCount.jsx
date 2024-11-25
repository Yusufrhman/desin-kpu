import { useState } from "react";
import VoteResult from "../../components/realtime-count/VoteResults";
import VoteBarChart from "../../components/realtime-count/VoteBarChart";
import mapJatim from "../../assets/images/map-jatim.png";
const RealtimeCount = () => {
  // Dropdown options
  const regions = ["TULUNGAGUNG", "SURABAYA", "MALANG"];
  const parties = ["PARTAI", "GERINDRA", "PDIP", "PKS", "PAN"];

  // State for filters
  const [selectedRegion, setSelectedRegion] = useState("Tulungagung");
  const [selectedParty, setSelectedParty] = useState("All");

  // Handlers for dropdown change
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handlePartyChange = (event) => {
    setSelectedParty(event.target.value);
  };

  return (
    <div className='p-6'>
      {/* Dropdown Filters */}
      <div className='flex justify-center items-center mb-6 gap-5'>
        {/* Region Dropdown */}
        <div className='flex items-center'>
          <select
            id='region'
            value={selectedRegion}
            onChange={handleRegionChange}
            className='border-transparent rounded-full px-6 py-2'
          >
            {regions.map((region) => (
              <option
                key={region}
                value={region}
                className='border-transparent'
              >
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Party Dropdown */}
        <div className='flex items-center'>
          <select
            id='party'
            value={selectedParty}
            onChange={handlePartyChange}
            className='rounded-full px-6 py-2'
          >
            {parties.map((party) => (
              <option key={party} value={party}>
                {party}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pilkada Header */}
      <div className='text-center bg-[#B30101] text-white py-2 rounded-lg mb-6'>
        <h1 className='text-2xl font-bold'>PILKADA 2024</h1>
      </div>

      {/* Voting Summary Section */}
      <div className='flex justify-between'>
        <div className=''>
          <VoteBarChart></VoteBarChart>
        </div>
        {/* Voting Summary Box */}
        <VoteResult></VoteResult>
      </div>
      {/* Map Section */}
      <div className='bg-white mt-10'>
        <div className='text-center bg-[#B30101] text-white py-2 rounded-lg mb-6'>
          <h2 className='text-lg font-bold text-center'>
            Suara Masuk Berdasarkan Wilayah
          </h2>
        </div>
        <div className='bg-gray-200  flex items-center justify-center rounded-lg'>
          {/* Map Image */}
          <img
            src={mapJatim}
            alt='Map Placeholder'
            className='w-full h-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default RealtimeCount;

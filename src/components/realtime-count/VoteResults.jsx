import gerindra from "../../assets/images/party/gerindra.png";
import pdip from "../../assets/images/party/pdip.png";
import pks from "../../assets/images/party/pks.png";
import pan from "../../assets/images/party/pan.png";
const VoteResults = () => {
  const parties = [
    { name: "GERINDRA", logo: gerindra, percentage: "15%" },
    { name: "PDIP", logo: pks, percentage: "35%" },
    { name: "PKS", logo: pdip, percentage: "10%" },
    { name: "PAN", logo: pan, percentage: "40%" },
  ];

  return (
    <div className='flex flex-col items-center bg-yellow-400 text-center text-black p-4 rounded-lg w-64'>
      <h1 className='text-xl font-bold mb-4'>SUARA MASUK</h1>
      <div className='flex flex-col gap-4 w-full'>
        {parties.map((party, index) => (
          <div
            key={index}
            className='flex gap-2 bg-white p-3 rounded-lg shadow-md'
          >
            <img
              src={party.logo}
              alt={`${party.name} Logo`}
              className='w-14 h-14 object-contain'
            />
            <div className='flex flex-col text-left ml-2'>
              <span className='text-xl font-bold'>{party.name}</span>
              <span className='text-2xl text-red-600 font-bold'>
                {party.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className='mt-4 bg-black text-white py-2 px-4 rounded-md'>
        Selanjutnya
      </button>
    </div>
  );
};

export default VoteResults;

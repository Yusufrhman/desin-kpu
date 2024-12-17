import { BarChart } from "@mui/x-charts/BarChart";
const VoteBarChart = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["Gerindra", "PDIP", "PKS", "PAN"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [160, 155, 140, 135],
          },
        ]}
        colors={["#FED700", "#B30000"]}
        width={750}
        height={500}
        barLabel={"value"}
        className='w-full md:w-1/2 sm:w-3/4 h-full text-3xl'
      />
    </div>
  );
};

export default VoteBarChart;

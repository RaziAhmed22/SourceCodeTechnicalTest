import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";

const DonutChart = () => {
  // Sample data
  const data = [
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 20 },
    { argument: "Friday", value: 20 },
  ];
  return (
    <Chart data={data}>
      <PieSeries
        valueField="value"
        argumentField="argument"
        innerRadius={0.7}
      />
    </Chart>
  );
};

export default DonutChart;

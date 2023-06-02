import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { value: 1, Sales: 400, names: 400 },
  { value: 2, Sales: 600, names: 600 },
  { value: 3, Sales: 800, names: 800 },
  { value: 4, Sales: 600, names: 1000 },
  { value: 5, Sales: 700 },
  { value: 6, Sales: 700 },
  { value: 7, Sales: 700 },
  { value: 8, Sales: 700 },
];

const BarChartComponent = () => {
  return (
    <BarChart width={300} height={200} data={data} barSize={10}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="value" tickCount={8} />
      <YAxis dataKey="names" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Sales" fill="#42B00F" />
    </BarChart>
  );
};

export default BarChartComponent;

import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Glucose Level", value: 25 },
  { name: "BMI", value: 15 },
  { name: "Age", value: 14 },
  { name: "Diabetes Pedigree Function", value: 12 },
  { name: "Blood Pressure", value: 8 },
  { name: "Insulin", value: 8 },
  { name: "Total Pregnancies", value: 7 },
  { name: "Skin Thickness", value: 7 },
];

export default function MyPieChart() {
  return (
    <PieChart width={680} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#1e88e5"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

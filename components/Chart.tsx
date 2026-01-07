"use client";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default function Chart({ products }: any) {
  return (
    <BarChart width={400} height={300} data={products}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="stock" />
    </BarChart>
  );
}

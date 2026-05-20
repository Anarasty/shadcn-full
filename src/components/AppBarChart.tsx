"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  profit: {
    label: "Profit",
    color: "var(--chart-8)",
  },
  loss: {
    label: "Loss",
    color: "var(--chart-9)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", profit: 186, loss: 80 },
  { month: "February", profit: 305, loss: 200 },
  { month: "March", profit: 237, loss: 120 },
  { month: "April", profit: 73, loss: 190 },
  { month: "May", profit: 209, loss: 130 },
  { month: "June", profit: 214, loss: 140 },
];

const AppBarChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
          <Bar dataKey="loss" fill="var(--color-loss)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;

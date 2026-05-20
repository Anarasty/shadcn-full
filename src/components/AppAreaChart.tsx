"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { month: "January", profit: 186, loss: 80 },
  { month: "February", profit: 305, loss: 200 },
  { month: "March", profit: 237, loss: 120 },
  { month: "April", profit: 73, loss: 190 },
  { month: "May", profit: 209, loss: 130 },
  { month: "June", profit: 214, loss: 140 },
];

const chartConfig = {
  profit: {
    label: "Profit",
    color: "var(--chart-6)",
  },
  loss: {
    label: "Loss",
    color: "var(--chart-7)",
  },
} satisfies ChartConfig;

const AppAreaChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Total Visitors</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <defs>
            <linearGradient id="fillProfit" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-profit)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-profit)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillLoss" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-loss)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-loss)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="loss"
            type="natural"
            fill="url(#fillLoss)"
            fillOpacity={0.4}
            stroke="var(--color-loss)"
            stackId="a"
          />
          <Area
            dataKey="profit"
            type="natural"
            fill="url(#fillProfit)"
            fillOpacity={0.4}
            stroke="var(--color-profit)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default AppAreaChart;

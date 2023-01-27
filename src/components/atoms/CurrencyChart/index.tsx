import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  elements: {
    point: {
      pointStyle: false as const,
    },
    line: {
      tension: 1,
    },
  },
  scales: {
    x: {
      type: 'time' as const,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      mode: 'index' as const,
      axis: 'x' as const,
      intersect: false,
      displayColors: false,
    },
  },
};

export interface CurrencyChartProps {
  label: string;
  data: number[][];
}

export const CurrencyChart = ({ label, data }: CurrencyChartProps) => {
  const { labels, values } = data.reduce(
    (acc, curr) => {
      const [label, price] = curr;
      acc.labels.push(label);
      acc.values.push(price);
      return acc;
    },
    {
      labels: [] as number[],
      values: [] as number[],
    }
  );

  const chartData = {
    labels,
    datasets: [
      {
        label,
        data: values,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

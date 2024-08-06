import React, { useEffect, useState, useCallback } from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors
);

const Activity = () => {
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);
  const [selectedValue, setSelectedValue] = useState('daily');

  // Generates a random value between min and max
  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Sets chart values based on the selected period
  const setChartValues = useCallback(() => {
    const newLabels = {
      daily: Array.from({ length: 31 }, (_, i) => i + 1),
      weekly: ['1-7', '8-14', '15-21', '22-28', '29 onwards'],
      monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      yearly: Array.from({ length: 24 }, (_, i) => 2001 + i)
    }[selectedValue] || [];

    setLabels(newLabels);
    setValues(newLabels.map(() => getRandomValue(1000, 15000)));
  }, [selectedValue]);

  useEffect(() => {
    setChartValues();
  }, [setChartValues]);

  const data = {
    labels,
    datasets: [
      {
        label: "Value",
        data: values,
        backgroundColor: "#7295fe",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 15000,
        ticks: {
          color: '#929496',
          stepSize: 5000,
          callback: (value) => value === 0 ? value : value / 1000 + 'k',
        },
        grid: {
          drawOnChartArea: true,
          drawTicks: false,
          color: '#5f6061',
        },
      },
      x: {
        ticks: {
          color: '#929496',
          callback: (value, index) => labels[index],
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className='h-full w-full md:w-[65%] bg-[--primary-bg-color] px-3 py-4 rounded'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg lg:text-2xl font-medium'>Activity</h2>
        <select 
          className='bg-[--tertiary-bg-color] rounded-full pl-4 pr-7 py-[6px] text-gray-200 text-xs border-[1px] border-gray-500 cursor-pointer'
          onChange={(e) => setSelectedValue(e.target.value)}
          value={selectedValue}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      
      <div className='h-36 w-[98%] sm:w-full'>
        <Bar options={options} data={data} />
      </div>
    </section>
  );
}

export default Activity;
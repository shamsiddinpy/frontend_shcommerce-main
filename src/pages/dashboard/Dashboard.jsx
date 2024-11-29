import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SallingProducts from './SallingProducts';

const Dashboard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [timeframe, setTimeframe] = useState('Monthly');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 mb-[50px]">
      <h1 className="text-gray-800 dark:text-white text-2xl mb-6">Dashboard</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <div className="flex space-x-4">
          <div>
            <h4 className="text-gray-800 dark:text-white text-md">From</h4>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="mt-1 w-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded border border-gray-300 dark:border-[#ffffff8d]"
              placeholderText="mm/dd/yyyy"
            />
          </div>
          <div>
            <h4 className="text-gray-800 dark:text-white text-md">To</h4>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="mt-1 w-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded border border-gray-300 dark:border-[#ffffff8d]"
              placeholderText="mm/dd/yyyy"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '📦', label: 'Total orders', value: 0 },
          { icon: '💳', label: 'Total paid orders', value: 0 },
          { icon: '🏠', label: 'Total revenue', value: 'UZS 0' },
          { icon: '🚚', label: 'Total revenue on delivery', value: 'UZS 0' },
          { icon: '👥', label: 'Total customers', value: 0 },
          { icon: '📦', label: 'Average Order', value: 'UZS 0' },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <span className="text-3xl">{card.icon}</span>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm mt-4">
              {card.label}
            </h3>
            <p className="text-gray-800 dark:text-white text-2xl mt-2">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-lg mb-6 mt-[100px] w-[350px]">
        <label className="text-lg dark:text-gray-400 mb-2">General</label>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="mt-5 w-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg border border-gray-400 dark:border-gray-600 h-[50px]"
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { label: 'Overall Sales', message: 'There is no data to display' },
          {
            label: 'Overall Customers',
            message: 'There is no data to display',
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <span className="text-4xl mb-4">📄</span>
            <h3 className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              {card.label}
            </h3>
            <p className="text-gray-600 dark:text-gray-500">{card.message}</p>
          </div>
        ))}
      </div>
      <SallingProducts />
    </div>
  );
};

export default Dashboard;

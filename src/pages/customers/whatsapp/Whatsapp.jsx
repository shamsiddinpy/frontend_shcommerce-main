import React from 'react';
import noData from '../../../assets/icons/nodata.svg';
import { FiUpload } from 'react-icons/fi';
const Whatsapp = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-100 dark:bg-gray-800 px-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
          Mijozlar
        </h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white">
            <FiUpload /> <span>Export</span>
          </button>
        </div>
      </div>
      <div className="w-full max-w-1xl p-8 bg-white shadow-lg rounded-lg mb-8 h-[400px] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 rounded-lg mt-10">
          <div className="mb-4">
            <img src={noData} alt="No data" className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ko'rsatish uchun hech qanday ma'lumot yo'q
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;

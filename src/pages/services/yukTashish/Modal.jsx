import React from 'react';
import { IoMdClose } from 'react-icons/io';
const Modal = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[500px] h-[250px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-400"
        >
          <IoMdClose className="w-5 h-5" />
        </button>
        <div className="flex items-center mb-4">
          <img
            src={service.icon}
            alt={service.name}
            className="w-10 h-10 mr-3"
          />
          <h2 className="text-xl font-semibold dark:text-gray-100">
            {service.name}
          </h2>
        </div>
        <label className="block text-gray-700 mb-2 dark:text-gray-300">
          Minimal buyurtma narxi <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          className="border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200"
          placeholder="Enter amount"
        />
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Saqlash
        </button>
      </div>
    </div>
  );
};

export default Modal;

import {
  FiSearch,
  FiPlus,
} from 'react-icons/fi';
import noData from '../../../assets/icons/noData.svg';

const Users = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-100 dark:bg-gray-800 px-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Foydalanuvchilar</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Izlash"
              className="border border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white pl-10 pr-3 py-2 rounded-md focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition">
            <FiPlus /> <span>Yaratish</span>
          </button>
        </div>
      </div>
      <div className="w-full max-w-1xl p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg mb-8 h-[400px]">
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-md mx-auto text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 rounded-lg mt-10">
          <div className="mb-4">
            <img src={noData} alt="No data" className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">Ko'rsatish uchun hech qanday ma'lumot yo'q</p>
        </div>
      </div>
    </div>
  );
};

export default Users;

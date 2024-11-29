import noData from '../../../assets/icons/noData.svg';
import { FiCopy } from 'react-icons/fi';

const Referal = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-100 dark:bg-gray-800 px-5">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Referal qilish</h2>
        <p className='pt-4 text-gray-700 dark:text-gray-300'>
          Havolani do'stlaringiz bilan ulashing va yangi foydalanuchi birinchi oylik to’lovni qilganidan so’ng, siz ham va yangi foydalanuvchi ham bir oy bepul xizmatlarga ega bo'ling
        </p>
        <div className='flex pt-2 items-center gap-4 text-blue-500 dark:text-blue-400'>
          <p className='underline'>https://botcommerce.io/register</p>
          <FiCopy className="cursor-pointer text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500" />
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

export default Referal;

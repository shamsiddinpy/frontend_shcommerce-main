import noData from '../../../assets/icons/noData.svg';

const PaymentHistory = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-100 dark:bg-gray-800 px-5">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">To'lov tarixi</h2>
      </div>
      <div className="w-full max-w-1xl p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg mb-8 h-[400px]">
        <div className="flex flex-col items-center justify-center h-64 w-full max-w-md mx-auto text-gray-500 dark:text-gray-400 border-gray-600 rounded-lg mt-10">
          <div className="mb-4">
            <img src={noData} alt="No data" className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-lg text-gray-400 dark:text-gray-300">Ko'rsatish uchun hech qanday ma'lumot yo'q</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

import noData from '../../assets/icons/nodata.svg';

const Sales = () => {
  return (
    <div className="p-6  min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Buyurtmalar</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="showArchived"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-500"
            />
            <label htmlFor="showArchived" className="text-gray-700 dark:text-gray-300">
              Arxivlanganlarni ko‘rsatish
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buyurtma ID"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              Qidirish
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-1xl p-8 bg-white shadow-lg rounded-lg mb-8 h-[500px] dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 rounded-lg mt-10">
          <div className="mb-4">
            <img src={noData} alt="No data" className="w-16 h-16 mx-auto" />
          </div>
          <p className="text-lg">Ko‘rsatish uchun ma’lumot yo‘q</p>
        </div>
      </div>
    </div>
  );
};

export default Sales;

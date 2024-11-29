const Profile = () => {
  return (
    <div className="items-center p-6 min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Profil</h2>
      <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center">
            <span className="text-gray-600 dark:text-gray-300">Foydalanuvchi IDsi:</span>
            <span className="ml-2 font-medium text-gray-800 dark:text-white">26303</span>
            <button className="ml-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none">
              <svg className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 7a1 1 0 012 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V7z" />
              </svg>
            </button>
          </div>

          <button className="bg-blue-500 dark:bg-blue-600 text-white font-bold py-2 px-5 rounded hover:bg-blue-600 flex items-center justify-center mb-6">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1.088 14.12l-.276.043-.902-1.013 2.373-2.284-4.063.541.03 4.568-1.34-.179.445-6.6 6.033-.803-.19 1.356-3.292.439 2.733 2.629z" />
            </svg>
            Telegram bilan kirish
          </button>

          <div className="border-t border-gray-600 pt-4 mb-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Parolni o'zgartirish</h3>
            <label className="block text-gray-700 dark:text-gray-400 mb-2">Parol</label>
            <input
              type="password"
              className="w-full px-3 py-2 mb-3 border border-gray-600 dark:border-gray-500  dark:bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="****************"
            />
            <div className="flex justify-end">
              <button className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600">
                O'zgartirish
              </button>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <h3 className="text-xl font-semibold mb-4 text-white">Elektron pochtani o'zgartirish</h3>
            <label className="block text-gray-700 dark:text-gray-400 mb-2">Elektron pochta</label>
            <input
              type="text"
              className="w-full px-3 py-2 mb-3 border border-gray-600 dark:border-gray-500 dark:bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="weblider_01"
            />
            <div className="flex justify-end">
              <button className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-600">
                O'zgartirish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

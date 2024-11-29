const Settings = () => {
  return (
    <div className="mb-10">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-md shadow-md border border-gray-300 dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Do`kon ma`lumotlari
        </h2>
        <div className="flex w-full justify-between gap-6 mb-6 ">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Do`kon nomi
            </label>
            <input
              type="text"
              placeholder="hello"
              className="mt-1 block w-full p-2 border border-gray-300 dark:bg-gray-600 dark:text-white rounded-md"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Biznes telefon raqami
            </label>
            <input
              type="text"
              placeholder="+998947323020"
              className="mt-1 block w-full p-2 border border-gray-300 dark:bg-gray-600 dark:text-white rounded-md"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Ro`yxatdan o`tgan davlat
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 dark:bg-gray-600 dark:text-white rounded-md">
              <option>Birlashgan Arab Amirliklari</option>
              <option>Afg`oniston</option>
              <option>Albaniya</option>
              <option>Amerika qo`shma shtatlari</option>
              <option>Andorra</option>
            </select>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Ish vaqti
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Dan
            </label>
            <input
              type="time"
              className="mt-1 block w-full p-2 border border-gray-300 dark:bg-gray-600 dark:text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Gacha
            </label>
            <input
              type="time"
              className="mt-1 block w-full p-2 border border-gray-300 dark:bg-gray-600 dark:text-white rounded-md"
            />
          </div>
        </div>
        <button className="ml-[92%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Yangilash
        </button>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6 mb-6 p-5 700 bg-white dark:bg-gray-900 rounded-md border border-b-0 border-gray-300 dark:border-gray-600 shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Pul birligi
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 dark:bg-gray-600 dark:text-white rounded-md">
            <option>UZS</option>
            <option>RUB</option>
            <option>KZT</option>
            <option>UAH</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Til
          </label>
          <select className="mt-1 block w-full p-2 border border-gray-300 dark:bg-gray-600 dark:text-white rounded-md">
            <option>O`zbekcha</option>
            <option>Русский</option>
            <option>English</option>
            <option>Тоҷикӣ</option>
          </select>
        </div>
        <button className=" w-[100px] ml-[187.4%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Saqlash
        </button>
      </div>

      <div className="mb-7 p-4 border border-red-500 rounded-md bg-red-50 dark:bg-red-900 dark:border-red-700 text-red-700 dark:text-red-300">
        <h2 className="text-lg font-bold">XAVFLI HUDUD!</h2>
        <p className="mt-2 text-sm text-gray-800 dark:text-gray-300">
          Ushbu operatsiya yordamida do`koningizni{' '}
          <span className="font-bold text-red-600">o`chirishingiz mumkin</span>.
          Ushbu do`kon bilan bog`liq barcha ma`lumotlar do`kon bilan birga
          o`chirib tashlanadi, shu jumladan toifalar(kategoriyalar),
          mahsulotlar, buyurtmalar, mijozlar, foydalanuvchilar va boshqalar.
        </p>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 border border-red-500 text-red-600 rounded-md hover:bg-red-100 dark:hover:bg-red-800 dark:border-red-700 dark:text-red-300">
            Do`konni o`chirmoq
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

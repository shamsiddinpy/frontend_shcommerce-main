function QRCodeGenerator() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">QR kod generatori onlayn</h1>
      <div className="w-full max-w-1xl p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg mb-8 h-[560px]">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg pb-7 w-full max-w-md relative">
          <div className="bg-blue-500 text-white p-6 rounded-t-lg flex flex-col items-center">
            <p className="text-xl">Schommerce.io</p>
            <h2 className="text-2xl text-black dark:text-gray-200 mt-5 font-bold">Onlayn buyurtma bering!</h2>
            <p className="text-sm text-black dark:text-gray-300 mt-5 mb-10 pb-6">Buyurtma berish uchun QRni skanerdan o‘tkazing</p>
          </div>
          <div className="absolute top-[155px] left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-2 rounded-md shadow-lg">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=hello"
              alt="QR Code"
              className="h-32 w-32"
            />
          </div>
          <div className="text-center mt-36">
            <p className="font-semibold text-gray-800 dark:text-gray-200">hello</p>
            <a href="https://hello.botcommerce.io" className="text-blue-500 dark:text-blue-400">hello.botcommerce.io</a>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
            Chop etish
          </button>
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;

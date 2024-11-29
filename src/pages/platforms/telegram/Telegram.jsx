const Telegram = () => {
  return (
    <div className="items-center mb-16 p-6 min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Telegram Bot</h2>
      <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          Iltimos, qaysi botdan foydalanmoqchi bo'lsangiz tanlang: oddiy bot yoki web app.
        </p>

        {/* Image Section */}
        <div className="flex space-x-4 mb-6">
          {/* Oddiy Bot */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
            <img 
              src="https://botcommerce.io/_next/image?url=%2Fstatic%2Fordinary-bot-uz.png&w=256&q=75" 
              alt="Oddiy bot" 
              className="rounded-lg" 
            />
            <label className="flex items-center mt-2 text-gray-800 dark:text-gray-200">
              <input 
                type="radio" 
                name="bot_type" 
                className="mr-2 text-blue-500 focus:ring-blue-500" 
                defaultChecked 
              />
              <span>Oddiy bot</span>
            </label>
          </div>

          {/* Web App */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
            <img 
              src="https://botcommerce.io/_next/image?url=%2Fstatic%2Fweb-app.png&w=256&q=75" 
              alt="Web App" 
              className="rounded-lg" 
            />
            <label className="flex items-center mt-2 text-gray-800 dark:text-gray-200">
              <input 
                type="radio" 
                name="bot_type" 
                className="mr-2 text-blue-500 focus:ring-blue-500" 
              />
              <span>Web App</span>
            </label>
          </div>
        </div>

        {/* BotFather Token Input */}
        <div className="mb-6">
          <label htmlFor="botfather-token" className="block font-medium mb-2 text-gray-800 dark:text-gray-200">
            BotFather Token
          </label>
          <input 
            type="text" 
            id="botfather-token" 
            placeholder="BotFather tokenini kiriting" 
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400" 
          />
        </div>

        {/* Link */}
        <div className="flex items-center justify-between">
          <div>
            <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">Botni qanday sozlash kerak</a>
          </div>

          {/* Submit Button */}
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
            Jo'natish
          </button>
        </div>
      </div>
    </div>
  )
}

export default Telegram;

import { useState } from 'react';

export default function DomainSettings() {
  const [hasDomain, setHasDomain] = useState(false);

  return (
    <div className="items-center p-6 min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Veb-sayt</h2>
      <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-[800px]">
          <strong>Eslatma:</strong> Siz hozirda bepul tarifda bo'lsangiz, siz o'z domeningizdan foydalana olmaysiz, faqat subdomendan foydalanishingiz mumkin. Tarifingizni o'zgartirish uchun havola: <a href="/payment" className="text-blue-500 dark:text-blue-400 hover:underline">To'lov</a>
        </p>

        <p className="font-medium dark:text-gray-200 mb-2">O'zingizning domeningiz bormi?</p>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setHasDomain(true)}
            className={`px-24 py-3 rounded-lg font-semibold ${hasDomain ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
          >
            Ha
          </button>
          <button
            onClick={() => setHasDomain(false)}
            className={`px-24 py-3 rounded-lg font-semibold ${!hasDomain ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
          >
            Yo'q
          </button>
        </div>

        <label htmlFor="domain" className="block font-medium mb-1 dark:text-gray-200">Domen</label>
        <input
          type="text"
          id="domain"
          placeholder="your domain"
          className="w-full max-w-[800px] p-2 border rounded mb-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Sizning vebsaytingiz: <a href='' className="text-blue-500 dark:text-blue-400">example.botcommerce.io</a>
        </p>

        {hasDomain && (
          <>
            <h3 className="font-medium dark:text-gray-200 mb-2">Shaxsiy domeningizni qo'shgandan keyin keyingi qadamlar:</h3>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-6">
              <li>Domen registratoriga kirish: Domen registratorining veb-saytiga tashrif buyurib tizimga kiring.</li>
              <li>DNS sozlamalariga kirish: DNS boshqaruvi yoki DNS sozlamalari maydonini toping.</li>
              <li>Yangi yozuv qo'shing:
                <ul className="list-disc list-inside ml-8">
                  <li>Turi: Yozuv turi sifatida 'A' ni tanlang.</li>
                  <li>Ism: Yozuvni asosiy domeningizga qo'llash uchun '@' kiriting.</li>
                  <li>Qiymat: IP manzil sifatida '76.76.21.21' kiriting.</li>
                </ul>
              </li>
              <li>O'zgarishlarni saqlash: Yangi yozuvni tasdiqlang va saqlang.</li>
              <li>DNS o'zgarishlari butun dunyo bo'ylab tarqalishi uchun 48 soatgacha vaqt ketishi mumkin.</li>
            </ol>
          </>
        )}

        <div className="flex justify-end max-w-[800px]">
          <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold">
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
}

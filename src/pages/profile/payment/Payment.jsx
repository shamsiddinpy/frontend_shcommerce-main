

const SubscriptionTable = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 mx-auto p-6">
      <h2 className="text-2xl  text-black dark:text-gray-200 font-bold  mb-8">Obuna tariflari</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white text-black dark:text-white dark:bg-gray-900 border mb-32 border-gray-300 " >
          <thead>
            <tr className="  font-semibold text-lg">
              <th className="p-4  border-gray-300"></th>
              <th className="p-4 text-left border-gray-300">
                <h4 className="mb-4 ">Free</h4>
                <span className="text-[25px] mt-4">$0/oy</span>
                <p className="text-[16px] text-gray-600 dark:text-gray-300 font-normal">$0/oy har yili to`lanadigan bo`lsa</p>
                <button className="flex items-center space-x-20 px-12 py-1 mt-5 border border-blue-500 text-blue-500  rounded-md transition">Joriy obuna</button>
              </th>
              <th className="p-4 text-left border-gray-300">
                <h4 className="mb-4 ">Basic</h4>
                <span className="text-[25px] mt-4">$25/oy</span>
                <p className="text-[16px] text-gray-600 dark:text-gray-300 font-normal">$20/oy har yili to`lanadigan bo`lsa</p>
                <button className="flex items-center space-x-20 px-12 py-1 mt-5  bg-blue-500  text-white  rounded-md  hover:bg-blue-600 transition">Basicga o`tish</button>
              </th>
              <th className="p-4 text-left border-gray-300">
                <h4 className="mb-4 ">Standard</h4>
                <span className="text-[25px] mt-4">$45/oy</span>
                <p className="text-[16px] text-gray-600 dark:text-gray-300 font-normal">$36/oy har yili to`lanadigan bo`lsa</p>
                <button className="flex items-center space-x-20 px-12 py-1 mt-5  bg-blue-500  text-white  rounded-md  hover:bg-blue-600 transition">Standardga o`tish</button>
              </th>
              <th className="p-4 text-left border-gray-300">
                <h4 className="mb-4 ">Premium</h4>
                <span className="text-[25px] mt-4">$65/oy</span>
                <p className="text-[16px] text-gray-600 dark:text-gray-300 font-normal">$52/oy har yili to`lanadigan bo`lsa</p>
                <button className="flex items-center space-x-20 px-12 py-1 mt-5  bg-blue-500  text-white  rounded-md  hover:bg-blue-600 transition">Premiumga o`tish</button>
              </th>
            </tr>
          </thead>
          <tbody className="text-center bg-white dark:bg-gray-900">
            {/* Har bir xususiyat uchun yangi qatorlar */}
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Telegram do&apos;koni</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">WhatsApp do&apos;koni</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Veb-do&apos;kon</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Kategoriyalar</td>
              <td className="p-4 border border-gray-300">2</td>
              <td className="p-4 border border-gray-300">100</td>
              <td className="p-4 border border-gray-300">2500</td>
              <td className="p-4 border border-gray-300">Cheklanmagan</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Mahsulotlar</td>
              <td className="p-4 border border-gray-300">4</td>
              <td className="p-4 border border-gray-300">1000</td>
              <td className="p-4 border border-gray-300">10000</td>
              <td className="p-4 border border-gray-300">Cheklanmagan</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Analitika</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Buyurtmalar</td>
              <td className="p-4 border border-gray-300">20</td>
              <td className="p-4 border border-gray-300">5000</td>
              <td className="p-4 border border-gray-300">Cheklanmagan</td>
              <td className="p-4 border border-gray-300">Cheklanmagan</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Administrator paneli</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">To&apos;lov xizmatlari</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Etkazib berish xizmatlari</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Mijozlarni qo&apos;llab-quvvatlash</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Yetkazib berish masofasini aniqlash uchun xarita</td>
              <td className="p-4 border border-gray-300 ">OpenStreetMap</td>
              <td className="p-4 border border-gray-300 ">Google Maps</td>
              <td className="p-4 border border-gray-300 ">Google Maps</td>
              <td className="p-4 border border-gray-300 ">Google Maps</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Qo&apos;shimcha xodimlar akkauntlari</td>
              <td className="p-4 border border-gray-300 ">0</td>
              <td className="p-4 border border-gray-300 ">1</td>
              <td className="p-4 border border-gray-300 ">5</td>
              <td className="p-4 border border-gray-300 ">10</td>
            </tr>
            <tr className="">
              <td className="p-4 border border-gray-300 font-medium">Veb-do&apos;kon shaxsiy domeni</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
              <td className="p-4 border border-gray-300 text-green-500">✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionTable;

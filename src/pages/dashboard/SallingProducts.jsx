import React from 'react';

const TopSellingProducts = () => {
  const products = [
    {
      id: 100943,
      name: 'MacBook Pro 14-inch',
      category: 'Computers',
      price: 'UZS 1.6K',
      image:
        'https://maxcom.uz/storage/product/zBhoGAgEbdsuzLunjM1QwxO3btYKa1TkawibDFRA.jpeg',
    },
    {
      id: 100944,
      name: 'MacBook Air 13-inch',
      category: 'Computers',
      price: 'UZS 1.4K',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVTozPDAlyCuxcpUNeMGsMOCeaWyU-YZ4tA&s',
    },
    {
      id: 100945,
      name: 'iPhone 14 Pro',
      category: 'Phones',
      price: 'UZS 1.2K',
      image:
        'https://cdn.mediapark.uz/imgs/725ff7f4-6c03-4b14-a5de-53d54563a050.webp',
    },
    {
      id: 100946,
      name: 'iPhone 13 Pro Max',
      category: 'Phones',
      price: 'UZS 1K',
      image:
        'https://i5.walmartimages.com/seo/Refurbished-Apple-iPhone-13-Pro-Max-A2483-Fully-Unlocked-128GB-Graphite-Grade-A_5baa075e-b02e-46de-b298-0b5308689e75.298b2bd7e7ec3ee04ab09e3e9328baa0.jpeg',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-gray-800 dark:text-gray-200 text-lg mb-4">Top Selling Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-gray-800 dark:text-gray-200">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-300 dark:border-gray-600">
                <td className="py-2 px-4">{product.id}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;

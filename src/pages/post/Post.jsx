import { useState } from 'react';

const items = [
  {
    id: 1,
    name: 'MacBook Pro 14-inch',
    price: 1600,
    image:
      'https://assets.asaxiy.uz/product/items/desktop/c5e31d9e0761a233dcce5d4269dd86a52024020810503491655VUpFtngAZ4.jpeg.webp',
    quantity: 3,
  },
  {
    id: 2,
    name: '16GB, 512GB SSD MacBook Pro 14-inch',
    price: 1600,
    image:
      'https://minapi.beemarket.uz/prod-media/productImages/1719318675JmuOphM609AB.webp',
    quantity: 1,
  },
  {
    id: 3,
    name: 'iPhone 14 Pro',
    price: 1200,
    image:
      'https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/thumbnail/202406/BSN8gCuTxeuiUJNtcRbSH0JUPRAAkBqchhj2cCfy.jpg',
    quantity: 1,
  },
  {
    id: 4,
    name: 'iPhone 13 Pro Max',
    price: 1000,
    image:
      'https://frankfurt.apollo.olxcdn.com/v1/files/nti2mpk9btyj-UZ/image;s=819x1024',
    quantity: 1,
  },
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addItemToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleIncreaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const handleDecreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex mb-12 h-screen p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* Left Side - Cart */}
      <div className="w-1/3 bg-gray-200 p-4 rounded-lg shadow-lg mb-10 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-300 p-3 rounded dark:bg-gray-700 shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {item.name}
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(index)}
                  className="bg-gray-400 text-white rounded px-2"
                >
                  -
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(index)}
                  className="bg-gray-400 text-white rounded px-2"
                >
                  +
                </button>
              </div>
              <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                UZS {item.price * item.quantity}K
              </span>
              <button
                onClick={() => handleRemoveItem(index)}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-500"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-gray-300 pt-4 dark:border-gray-700">
          <p className="text-lg">Total: UZS {calculateTotal()}K</p>
          <button className="bg-blue-600 w-full py-2 mt-4 rounded hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500">
            To'lov
          </button>
        </div>
      </div>

      {/* Right Side - Item Selection */}
      <div className="w-2/3 ml-4">
        <h2 className="text-xl font-semibold mb-4">Available Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 w-full border border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <div className="grid grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => addItemToCart(item)}
              className="p-4 bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <p>{item.name}</p>
              <p>UZS {item.price}K</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

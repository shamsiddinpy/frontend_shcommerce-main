import  { useState } from 'react';
import Modal from './Modal';
import { BiEdit } from 'react-icons/bi';

const initialShippingData = [
  {
    name: 'Minimal buyurtma narxi',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/delivery_services/logo/minimum_order_price_logo.svg',
    status: false,
  },
  {
    name: 'Yetkazib berish',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/delivery_services/logo/delivery_logo.svg',
    status: false,
  },
  {
    name: 'O`zgaruvchan yetkazib berish narxi',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/delivery_services/logo/dynamic_delivery_logo.svg',
    status: false,
  },
  {
    name: 'O`zgarmas yetkazib berish narxi',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/delivery_services/logo/fixed_delivery_logo.svg',
    status: false,
  },
  {
    name: 'Bepul yetkazib berish',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/delivery_services/logo/free_delivery_logo.svg',
    status: false,
  },
  {
    name: 'Onlayn yetkazib berish',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/delivery_services/logo/online_delivery_logo.svg',
    status: false,
  },
  {
    name: 'Olib ketish',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/delivery_services/logo/pickup_logo.svg',
    status: false,
  },
];

const YukTashish = () => {
  const [shippingServices, setShippingServices] = useState(initialShippingData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleStatus = (index) => {
    const updatedServices = shippingServices.map((service, i) =>
      i === index ? { ...service, status: !service.status } : service
    );
    setShippingServices(updatedServices);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Yuk Tashish
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shippingServices.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg dark:border dark:border-[#ffffff27] flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                className="w-10 h-10 mr-3 object-contain"
                src={service.icon}
                alt={service.name}
              />
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {service.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Status</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={service.status}
                  onChange={() => toggleStatus(index)}
                />
                <div
                  className={`w-10 h-5 rounded-full transition-colors duration-200 ${
                    service.status
                      ? 'bg-blue-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                >
                  <span
                    className={`absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 transform ${
                      service.status ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  ></span>
                </div>
              </label>
              <button
                onClick={() => openModal(service)}
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600 transition duration-200"
              >
                <BiEdit className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-40">
          <Modal service={selectedService} onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default YukTashish;

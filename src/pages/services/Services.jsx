import  { useState } from 'react';
import Select from 'react-select';
import { getData } from 'country-list'; // This provides a list of all countries
import YukTashish from './yukTashish/YukTashish';
import Modal from './Modal';
import { BiEdit } from 'react-icons/bi';

const initialServicesData = [
  {
    name: 'Naqd pul',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/payment_services/logo/cash_logo.svg',
    status: true,
  },
  {
    name: 'Click (Telegram)',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/payment_services/logo/click_logo.png',
    status: false,
  },
  {
    name: 'Yandex.Money',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/payment_services/logo/yandex_money_logo.svg',
    status: false,
  },
  {
    name: 'Payme (Telegram)',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/payment_services/logo/payme_logo.svg',
    status: false,
  },
  {
    name: 'Tranzzo',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/payment_services/logo/tranzzo_logo.svg',
    status: false,
  },
  {
    name: 'LiqPay',
    icon: 'https://fra1.digitaloceanspaces.com/botcommerce/shop/payment_services/logo/liqpay_logo.png',
    status: false,
  },
];

const countryOptions = getData().map((country) => ({
  value: country.code,
  label: country.name,
}));

const Services = () => {
  const [services, setServices] = useState(initialServicesData);
  const [activeTab, setActiveTab] = useState('payment');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({
    value: '',
    label: 'Barcha davlatlar',
  });

  const toggleStatus = (index) => {
    const updatedServices = services.map((service, i) =>
      i === index ? { ...service, status: !service.status } : service
    );
    setServices(updatedServices);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleSave = () => {
    closeModal();
  };

  const renderContent = () => {
    if (activeTab === 'shipping') {
      return <YukTashish />;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg dark:border dark:border-[#ffffff27] flex items-center justify-between"
          >
            <div className="flex items-center">
              <img
                className="w-10 h-10 mr-3"
                src={service.icon}
                alt={service.name}
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
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
                className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
              >
                <BiEdit className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Xizmatlar
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'payment'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('payment')}
          >
            To'lov
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'shipping'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setActiveTab('shipping')}
          >
            Yuk tashish
          </button>
        </div>
        {/* <div className="mb-6">
          <label className="text-gray-900 dark:text-gray-100 mr-2">
            Mamlakatlar:
          </label>
          <Select
            className="w-64"
            value={selectedCountry}
            onChange={(option) => setSelectedCountry(option)}
            options={[
              { value: '', label: 'Barcha davlatlar' },
              ...countryOptions,
            ]}
            placeholder="Barcha davlatlar"
            isClearable
          />
        </div> */}
        <div className="mb-6">
          <label className="text-gray-900 dark:text-gray-100 mr-2">
            Mamlakatlar:
          </label>
          <Select
            className="w-64 bg-white border border-black rounded-md dark:bg-transparent dark:text-white dark:border-[#ffffff27] mt-2"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'transparent',
                },
              }),
              singleValue: (provided, state) => ({
                ...provided,
                color: state.isDisabled
                  ? 'gray'
                  : state.isSelected
                  ? 'black'
                  : 'gray-900',
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: 'white',
                color: 'black',
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isFocused ? '#009882' : 'transparent',
                color: state.isDisabled ? 'gray' : 'black',
              }),
            }}
            value={selectedCountry}
            onChange={(option) => setSelectedCountry(option)}
            options={[
              { value: '', label: 'Barcha davlatlar' },
              ...countryOptions,
            ]}
            placeholder="Barcha davlatlar"
            isClearable
          />
        </div>
      </div>

      {renderContent()}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-40">
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={selectedService.name}
            icon={selectedService.icon}
            onSave={handleSave}
          />
        </div>
      )}
    </div>
  );
};

export default Services;

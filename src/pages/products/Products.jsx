import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FiSearch,
  FiPlus,
  FiUpload,
  FiDownload,
  FiEdit,
  FiTrash2,
  FiGlobe,
} from 'react-icons/fi';

function Products() {
  return (
    <div className="p-6 text-gray-900  bg-gray-100 min-h-screen dark:bg-gray-800 dark:text-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Mahsulotlar</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Izlash"
              className="border border-blue-500 bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-200 pl-10 pr-3 py-2 rounded-md focus:outline-none"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition dark:border-blue-400 dark:text-white dark:hover:bg-blue-400">
            <FiDownload /> <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition dark:border-blue-400 dark:text-white dark:hover:bg-blue-400">
            <FiUpload /> <span>Import</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            <FiPlus /> <span>Yaratish</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-lg dark:border-gray-600">
        <table className="min-w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
          <thead>
            <tr>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">Nom</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">Kategoriya</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">Narx</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">Surat</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">Jami zaxira miqdori</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">Mavjudligi</th>
              <th className="p-3 border-b border-gray-300 dark:border-gray-600 text-center">Harakatlar</th>
            </tr>
          </thead>
          <tbody>
            <CategoryRow emoji="🖥️" narx="522$" count={3} name="Kompyuterlar" />
            <CategoryRow emoji="📱" narx="402$" count={5} name="Telefonlar" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CategoryRow({ emoji, name, narx, count }) {
  const [displayOnWebsite, setDisplayOnWebsite] = useState(false);

  return (
    <tr className="text-center border-b border-gray-300 dark:border-gray-600">
      <td className="p-3">{name}</td>
      <td className="p-3">Mavjud emas</td>
      <td className="p-3">{narx}</td>
      <td className="p-3">{emoji}</td>
      <td className="p-3">{count}</td>
      <td className="p-3">
        <Switch
          isOn={displayOnWebsite}
          toggleSwitch={() => setDisplayOnWebsite(!displayOnWebsite)}
        />
      </td>
      <td className="p-3 flex justify-center space-x-2">
        <FiGlobe className="text-blue-400 dark:text-blue-300 cursor-pointer" />
        <FiEdit className="text-blue-400 dark:text-blue-300 cursor-pointer" />
        <FiTrash2 className="text-red-400 cursor-pointer" />
      </td>
    </tr>
  );
}

CategoryRow.propTypes = {
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  narx: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

function Switch({ isOn, toggleSwitch }) {
  return (
    <div
      onClick={toggleSwitch}
      className={`cursor-pointer relative inline-block w-11 h-6 transition duration-200 ease-linear rounded-full ${
        isOn ? 'bg-blue-500' : 'bg-gray-400'
      }`}
    >
      <span
        className={`absolute bottom-[2px] left-0 inline-block w-5 h-5 transform transition-transform duration-100 ease-linear rounded-full bg-white ${
          isOn ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></span>
    </div>
  );
}

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};

export default Products;

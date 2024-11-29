import {
  ShareAltOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { GrAppsRounded } from 'react-icons/gr';
import {
  IoStatsChartOutline,
  IoCubeOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import { GrServicePlay } from 'react-icons/gr';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import img from '../assets/icons/Shcommerce.jpg'

const Sidebar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMarketingDropdownOpen, setMarketingDropdownOpen] = useState(false);
  const [isCustomersDropdownOpen, setCustomersDropdownOpen] = useState(false);
  const [isPlatformsDropdownOpen, setPlatformsDropdownOpen] = useState(false);

  const toggleDropdown = (setDropdown) => {
    setDropdown((prev) => !prev);
  };

  const renderNavLink = (to, icon, label, extraClasses = '') => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 ${
          isActive
            ? 'text-teal-400 dark:text-teal-300'
            : 'text-gray-500 dark:text-gray-300'
        } ${extraClasses} hover:text-gray-700 dark:hover:text-gray-400`
      }
    >
      {icon}
      <h3 className="text-lg">{label}</h3>
    </NavLink>
  );

  return (
    <div className="bg-white dark:bg-gray-900 h-screen w-[260px] text-gray-500 dark:text-gray-300 border-r dark:border-gray-700 font-medium flex-col">
      <div className="flex items-center py-6 px-4">
        <div className="w-full flex items-center justify-center">
          {/* <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Shcommerce.io
          </span> */}
          <img src={img} alt="" width="180px" />
        </div>
      </div>
      <nav className="space-y-4 px-6">
        {renderNavLink(
          '/',
          <IoStatsChartOutline size={24} />,
          'Boshqaruv paneli'
        )}
        {renderNavLink(
          '/categories',
          <GrAppsRounded size={24} />,
          'Kategoriyalar'
        )}
        {renderNavLink('/products', <IoCubeOutline size={24} />, 'Mahsulotlar')}

        {/* Customers Dropdown */}
        <div className="block">
          <button
            onClick={() => toggleDropdown(setCustomersDropdownOpen)}
            className="flex items-center space-x-3 focus:outline-none text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
          >
            <TeamOutlined style={{ fontSize: '24px' }} />
            <h3 className="text-lg">Mijozlar</h3>
            {isCustomersDropdownOpen ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>

          {isCustomersDropdownOpen && (
            <div className="flex flex-col pl-5">
              {[
                { route: '/telegram', name: 'Telegram' },
                // { route: '/whatsapp', name: 'WhatsApp' },
                // { route: '/ecommerce', name: 'E-commerce' }
              ].map(({ route, name }, index) => (
                <NavLink
                  key={index}
                  to={route}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-teal-400 dark:text-teal-300'
                        : 'hover:text-gray-700 dark:hover:text-gray-400'
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Marketing Dropdown */}
        <div className="block">
          <button
            onClick={() => toggleDropdown(setMarketingDropdownOpen)}
            className="flex items-center space-x-3 focus:outline-none text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
          >
            <ShareAltOutlined style={{ fontSize: '24px' }} />
            <h3 className="text-lg">Marketing</h3>
            {isMarketingDropdownOpen ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>

          {isMarketingDropdownOpen && (
            <div className="flex flex-col pl-5">
              {[
                { route: '/newsletter', name: 'Newsletter' },
                { route: '/promocode', name: 'Promo Code' },
                { route: '/qr-code', name: 'QR Code' },
                { route: '/tg-channels', name: 'Telegram Channels' },
              ].map(({ route, name }, index) => (
                <NavLink
                  key={index}
                  to={route}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-teal-400 dark:text-teal-300'
                        : 'hover:text-gray-700 dark:hover:text-gray-400'
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <div className="block">
          <button
            onClick={() => toggleDropdown(setPlatformsDropdownOpen)}
            className="flex items-center space-x-3 focus:outline-none text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
          >
            <HiOutlinePuzzlePiece size={24} />
            <h3 className="text-lg">Platformalar</h3>
            {isPlatformsDropdownOpen ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>

          {isPlatformsDropdownOpen && (
            <div className="flex flex-col pl-5">
              {[
                // { route: '/veb-sayt', name: 'Veb Sayt' },
                { route: '/telegram-bot', name: 'Telegram Bot' },
                // { route: '/whats-app', name: 'WhatsApp' }
              ].map(({ route, name }, index) => (
                <NavLink
                  key={index}
                  to={route}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-teal-400 dark:text-teal-300'
                        : 'hover:text-gray-700 dark:hover:text-gray-400'
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {renderNavLink(
          '/sales',
          <ShoppingCartOutlined style={{ fontSize: '24px' }} />,
          'Sotuvlar'
        )}
        {renderNavLink('/services', <GrServicePlay size={24} />, 'Xizmatlar')}
        {renderNavLink(
          '/settings',
          <IoSettingsOutline size={24} />,
          'Sozlamalar'
        )}

        {/* Profile Dropdown */}
        <div className="block">
          <button
            onClick={() => toggleDropdown(setProfileDropdownOpen)}
            className="flex items-center space-x-3 focus:outline-none text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
          >
            <UserOutlined style={{ fontSize: '24px' }} />
            <h3 className="text-lg">Profilim</h3>
            {isProfileDropdownOpen ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>

          {isProfileDropdownOpen && (
            <div className="flex flex-col pl-5">
              {[
                { route: '/payment', name: 'Payment' },
                { route: '/payment-history', name: 'Payment History' },
                { route: '/profile-settings', name: 'Profile Settings' },
                { route: '/referal', name: 'Referral' },
                { route: '/users', name: 'Users' },
                { route: '/transfer-shop', name: 'Transfer Shop' },
              ].map(({ route, name }, index) => (
                <NavLink
                  key={index}
                  to={route}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-teal-400 dark:text-teal-300'
                        : 'hover:text-gray-700 dark:hover:text-gray-400'
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {renderNavLink(
          '/post',
          <ShopOutlined style={{ fontSize: '24px' }} />,
          'Savdo nuqtasi',
          'flex items-center'
        )}
      </nav>
    </div>
  );
};

export default Sidebar;

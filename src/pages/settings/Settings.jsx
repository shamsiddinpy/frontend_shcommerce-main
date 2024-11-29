import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Settings = () => {
  const location = useLocation();

  // Check if the current location is the default route
  const isGeneralActive =
    location.pathname === '/settings' ||
    location.pathname === '/settings/general';

  return (
    <div className="mb-10 p-8 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Sozlamalar
      </h1>

      <div className="flex space-x-4 mb-6">
        <NavLink
          to="general"
          className={() =>
            `px-4 py-2 rounded-t-md ${
              isGeneralActive
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700 dark:text-gray-300'
            }`
          }
        >
          Umumiy
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-t-md ${
              isActive
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700 dark:text-gray-300'
            }`
          }
        >
          Biz haqimizda
        </NavLink>
        <NavLink
          to="design"
          className={({ isActive }) =>
            `px-4 py-2 rounded-t-md ${
              isActive
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700 dark:text-gray-300'
            }`
          }
        >
          Dizayn
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Settings;

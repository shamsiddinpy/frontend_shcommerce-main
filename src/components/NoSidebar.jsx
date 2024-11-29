

import { Outlet } from 'react-router-dom';

const NoSidebarLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default NoSidebarLayout;

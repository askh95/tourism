import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Туристические маршруты
          </Link>
          <div className="flex gap-6">
            <Link to="/" className={isActive('/')}>
              Главная
            </Link>
            <Link to="/my-bookings" className={isActive('/my-bookings')}>
              Мои бронирования
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Users, Map, Star } from 'lucide-react';

const Statistics = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Статистика</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Map className="text-blue-600" size={20} />
            <h3 className="text-gray-500">Всего маршрутов</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">24</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Users className="text-blue-600" size={20} />
            <h3 className="text-gray-500">Активных туров</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">156</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Star className="text-blue-600" size={20} />
            <h3 className="text-gray-500">Средний рейтинг</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">4.7</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
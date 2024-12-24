import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RouteCard = ({ route }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/routes/${route.id}`}>  {/* Добавляем ссылку на изображение */}
        <img src={route.image} alt={route.name} className="w-full h-48 object-cover" />
      </Link>
      
      <div className="p-4">
        <Link to={`/routes/${route.id}`}>  {/* Добавляем ссылку на название */}
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
            {route.name}
          </h3>
        </Link>

        <div className="flex items-center mt-2 text-gray-600">
          <MapPin size={16} className="mr-1" />
          <span>{route.location}</span>
        </div>
        
        <div className="flex items-center mt-2 text-gray-600">
          <Clock size={16} className="mr-1" />
          <span>{route.duration} часов</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <Star className="text-yellow-400" size={16} />
            <span className="ml-1">{route.rating}</span>
          </div>
          
          <Link 
            to={`/routes/${route.id}`} 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RouteCard from '../components/RouteCard';
import Statistics from '../components/Statistics';
import { routes } from '../data/mockData';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRoutes, setFilteredRoutes] = useState(routes);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = routes.filter(route => 
      route.name.toLowerCase().includes(query.toLowerCase()) ||
      route.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRoutes(filtered);
  };

  return (
    <div className="py-6">
      <SearchBar onSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {searchQuery ? 'Результаты поиска' : 'Популярные маршруты'}
        </h1>
        
        {filteredRoutes.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Маршруты не найдены</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredRoutes.map(route => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        )}

        <Statistics routes={routes} />
      </div>
    </div>
  );
};

export default HomePage;
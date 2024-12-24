import React from 'react';
import { Calendar, Users } from 'lucide-react';

const BookingPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Бронирование маршрута</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Дата</label>
            <input 
              type="date" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Количество человек</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Подтвердить бронирование
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
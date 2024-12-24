import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { routes } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';

const RoutePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const route = routes.find(r => r.id === parseInt(id));

  const [showBooking, setShowBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    people: 1
  });

  if (!route) return <div>Маршрут не найден</div>;

  const handleBooking = (e) => {
    e.preventDefault();
    // Здесь была бы логика отправки данных на сервер
    alert(`Бронирование маршрута "${route.name}" на ${bookingData.date} для ${bookingData.people} человек`);
    navigate('/bookings');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <img 
          src={route.image}
          alt={route.name} 
          className="w-full h-64 object-cover rounded-t-lg"
        />
        
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">{route.name}</h1>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center text-gray-600">
              <Clock size={20} className="mr-2" />
              <span>{route.duration} часов</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2" />
              <span>{route.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Star size={20} className="mr-2" />
              <span>{route.rating}</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600">{route.description}</p>

          {!showBooking ? (
            <button 
              onClick={() => setShowBooking(true)}
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Забронировать
            </button>
          ) : (
            <form onSubmit={handleBooking} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Дата</label>
                <input 
                  type="date" 
                  value={bookingData.date}
                  onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Количество человек</label>
                <select 
                  value={bookingData.people}
                  onChange={(e) => setBookingData({...bookingData, people: parseInt(e.target.value)})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                >
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
          )}

          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Отзывы</h2>
            <div className="space-y-4">
              {route.reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
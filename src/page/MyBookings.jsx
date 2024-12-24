import React, { useState } from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { bookings } from '../data/mockData';

const MyBookings = () => {
  const [userBookings, setUserBookings] = useState(bookings);

  const cancelBooking = (bookingId) => {
    setUserBookings(prev =>
      prev.map(booking =>
        booking.id === bookingId
          ? { ...booking, status: 'cancelled' }
          : booking
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Мои бронирования</h1>

      <div className="space-y-4">
        {userBookings.map(booking => (
          <div key={booking.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{booking.route.name}</h3>
                <div className="mt-2 space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2" />
                    <span>{new Date(booking.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="mr-2" />
                    <span>{booking.numberOfPeople} человек</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2" />
                    <span>{booking.route.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {booking.status === 'confirmed' ? 'Подтверждено' :
                   booking.status === 'pending' ? 'Ожидает подтверждения' :
                   'Отменено'}
                </span>
                <p className="mt-2 text-lg font-semibold">{booking.totalCost} ₽</p>
                {booking.status !== 'cancelled' && (
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className="mt-4 text-red-600 hover:text-red-800"
                  >
                    Отменить
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
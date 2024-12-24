import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './page/HomePage';
import RoutePage from './page/RoutePage';
import BookingPage from './page/BookingPage'; // Новая страница
import MyBookings from './page/MyBookings'; // Новая страница

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/routes/:id" element={<RoutePage />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/my-bookings" element={<MyBookings />} /> {/* Новый маршрут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
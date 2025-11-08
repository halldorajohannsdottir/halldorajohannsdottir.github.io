import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Booking } from './booking/Booking';
import Header from './shared/Header';
import { Home } from './landing/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;

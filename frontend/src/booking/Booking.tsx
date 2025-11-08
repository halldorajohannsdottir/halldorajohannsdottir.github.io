import { useEffect, useState } from 'react';
import { getBookings } from '../api';

interface Booking {
  id: number;
  start_time: string;
  end_time: string;
  status: string;
  UserId: number;
  ResourceId: number;
}

export function Booking() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookings()
      .then((data) => setBookings(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Bookings
      </h1>
      <ul>
        {bookings.map((b) => (
          <li key={b.id}>
            {b.start_time} - {b.end_time} (Status: {b.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-300 dark:border-gray-600">
              <p className="text-gray-900 dark:text-white">ID</p>
            </th>
            <th className="border border-gray-300 dark:border-gray-600">
              <p className="text-gray-900 dark:text-white">Start Time</p>
            </th>
            <th className="border border-gray-300 dark:border-gray-600">
              <p className="text-gray-900 dark:text-white">End Time</p>
            </th>
            <th className="border border-gray-300 dark:border-gray-600">
              <p className="text-gray-900 dark:text-white">Status</p>
            </th>
            <th className="border border-gray-300 dark:border-gray-600">
              <p className="text-gray-900 dark:text-white">User ID</p>
            </th>
            <th className="border border-gray-300 dark:border-gray-600">
              <p className="text-gray-900 dark:text-white">Resource Id</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr>
              <td className="border border-gray-300 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white">{booking.id}</p>
              </td>
              <td className="border border-gray-300 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white">
                  {booking.start_time}
                </p>
              </td>
              <td className="border border-gray-300 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white">
                  {booking.end_time}
                </p>
              </td>
              <td className="border border-gray-300 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white">
                  {booking.status}
                </p>
              </td>
              <td className="border border-gray-300 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white">
                  {booking.UserId}
                </p>
              </td>
              <td className="border border-gray-300 dark:border-gray-700">
                <p className="text-gray-900 dark:text-white">
                  {booking.ResourceId}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

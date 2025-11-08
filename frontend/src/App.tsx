import { useEffect, useState } from "react";
import { getBookings } from "./api";

interface Booking {
  id: number;
  start_time: string;
  end_time: string;
  status: string;
  UserId: number;
  ResourceId: number;
}

function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookings()
      .then(data => setBookings(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Bookings</h1>
      <ul>
        {bookings.map(b => (
          <li key={b.id}>
            {b.start_time} - {b.end_time} (Status: {b.status})
          </li>
        ))}
      </ul>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
  <div className="shrink-0">
    <img className="size-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-slate-500">You have a new message!</p>
  </div>
</div>
    </div>
  );
}

export default App;

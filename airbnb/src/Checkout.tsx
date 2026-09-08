import { useLocation, useNavigate } from "react-router-dom";

interface BookingData {
  price: number;
  guests: number;
  checkIn: string;
  checkOut: string;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state as BookingData | null;

  // If there is no booking data
  if (!booking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow">
          <h1 className="text-2xl font-semibold text-gray-900">
            No booking found
          </h1>

          <p className="mt-3 text-gray-500">
            Please select your dates and try again.
          </p>

          <button
            onClick={() => navigate("/property/1")}
            className="mt-6 rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Back to Property
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Confirm and pay
        </h1>

        {/* Booking Details */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-semibold">
            Your booking
          </h2>

          <div className="mt-6 space-y-5">

            {/* Price */}
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Price per night
              </span>

              <span className="font-semibold">
                ${booking.price}
              </span>
            </div>

            {/* Guests */}
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Guests
              </span>

              <span className="font-semibold">
                {booking.guests}
              </span>
            </div>

            {/* Check In */}
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-gray-600">
                Check-in
              </span>

              <span className="font-semibold">
                {booking.checkIn}
              </span>
            </div>

            {/* Check Out */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                Check-out
              </span>

              <span className="font-semibold">
                {booking.checkOut}
              </span>
            </div>

          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => alert("Booking confirmed successfully!")}
          className="mt-6 w-full rounded-xl bg-black py-4 font-semibold text-white transition hover:bg-gray-800"
        >
          Confirm booking
        </button>

      </div>
    </main>
  );
};

export default Checkout;
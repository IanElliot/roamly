interface Destination {
  city: string;
  country: string;
  imageUrl: string;
  flightPrice: number;
  accommodationPrice: number;
  weather: {
    temp: number;
    condition: string;
  };
}

const popularDestinations: Destination[] = [
  {
    city: "Bangkok",
    country: "Thailand",
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    flightPrice: 499,
    accommodationPrice: 25,
    weather: {
      temp: 32,
      condition: "Sunny",
    },
  },
  {
    city: "Lisbon",
    country: "Portugal",
    imageUrl: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a",
    flightPrice: 399,
    accommodationPrice: 30,
    weather: {
      temp: 24,
      condition: "Clear",
    },
  },
  {
    city: "Mexico City",
    country: "Mexico",
    imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a",
    flightPrice: 299,
    accommodationPrice: 20,
    weather: {
      temp: 26,
      condition: "Partly cloudy",
    },
  },
  {
    city: "Bali",
    country: "Indonesia",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    flightPrice: 599,
    accommodationPrice: 15,
    weather: {
      temp: 29,
      condition: "Tropical",
    },
  },
  {
    city: "Prague",
    country: "Czech Republic",
    imageUrl: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
    flightPrice: 449,
    accommodationPrice: 25,
    weather: {
      temp: 18,
      condition: "Clear",
    },
  },
  {
    city: "Marrakech",
    country: "Morocco",
    imageUrl: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43", // Updated
    flightPrice: 479,
    accommodationPrice: 22,
    weather: {
      temp: 28,
      condition: "Sunny",
    },
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    imageUrl: "https://images.unsplash.com/photo-1583417319070-4a69db38a482", // Updated
    flightPrice: 549,
    accommodationPrice: 18,
    weather: {
      temp: 27,
      condition: "Humid",
    },
  },
  {
    city: "Budapest",
    country: "Hungary",
    imageUrl: "https://images.unsplash.com/photo-1549877452-9c387954fbc2", // Updated
    flightPrice: 429,
    accommodationPrice: 23,
    weather: {
      temp: 21,
      condition: "Clear",
    },
  },
  {
    city: "Medellín",
    country: "Colombia",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
    flightPrice: 389,
    accommodationPrice: 20,
    weather: {
      temp: 25,
      condition: "Spring-like",
    },
  },
];
export default function Discover() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-8">
          Find Your Next Adventure
        </h1>
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full p-3 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="flex-1 flex gap-4">
              <input
                type="date"
                className="flex-1 p-3 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-500"
              />
              <input
                type="date"
                className="flex-1 p-3 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-orange-600 mb-6">
        Popular Budget-Friendly Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularDestinations.map((destination) => (
          <div
            key={destination.city}
            className="bg-orange-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${destination.imageUrl})` }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">
                {destination.city}, {destination.country}
              </h2>
              <div className="space-y-2 text-orange-700">
                <div className="flex justify-between">
                  <span>Flights from:</span>
                  <span className="font-medium text-orange-500">
                    ${destination.flightPrice}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Hostels from:</span>
                  <span className="font-medium text-orange-500">
                    ${destination.accommodationPrice}/night
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Current weather:</span>
                  <span className="font-medium text-orange-500">
                    {destination.weather.temp}°C,{" "}
                    {destination.weather.condition}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

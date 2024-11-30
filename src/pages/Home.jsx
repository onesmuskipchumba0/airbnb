import React from 'react';
import { FaSearch, FaRegCalendarAlt, FaUserFriends, FaStar } from 'react-icons/fa';

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    distance: "12 hour flight",
    rating: 4.9,
    image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Santorini, Greece",
    distance: "11 hour flight",
    rating: 4.8,
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Maldives",
    distance: "14 hour flight",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Swiss Alps",
    distance: "9 hour flight",
    rating: 4.7,
    image: "https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const properties = [
  {
    id: 1,
    type: "Luxury Villas",
    description: "Experience ultimate comfort in our handpicked luxury villas",
    price: "$350/night",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    type: "Beachfront Properties",
    description: "Wake up to stunning ocean views and sandy beaches",
    price: "$280/night",
    rating: 4.8,
    image: "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    type: "Mountain Cabins",
    description: "Cozy retreats surrounded by nature and adventure",
    price: "$195/night",
    rating: 4.7,
    image: "https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 pt-[80px] lg:pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[75vh] flex items-center bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                Find Your Next <span className="text-airbnb-red">Adventure</span>
              </h1>
              <p className="text-xl text-white/90 animate-fade-in-delay">
                Discover amazing places to stay around the world
              </p>
            </div>
            
            {/* Search Container */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-4xl mx-auto transform hover:shadow-3xl transition-all duration-300">
              {/* Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-5">
                  <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-airbnb-red text-lg" />
                    <input 
                      type="text" 
                      placeholder="Where to?" 
                      className="w-full pl-11 pr-4 py-3 bg-base-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-airbnb-red/30 text-base transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-4">
                  <div className="relative">
                    <FaRegCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-airbnb-red text-lg" />
                    <input 
                      type="text" 
                      placeholder="Add dates" 
                      className="w-full pl-11 pr-4 py-3 bg-base-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-airbnb-red/30 text-base transition-all"
                    />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="relative">
                    <FaUserFriends className="absolute left-4 top-1/2 transform -translate-y-1/2 text-airbnb-red text-lg" />
                    <select 
                      className="w-full pl-11 pr-8 py-3 bg-base-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-airbnb-red/30 text-base appearance-none transition-all"
                    >
                      <option>Guests</option>
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4+ guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mt-4 px-1">
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-base-200 text-sm text-airbnb-dark hover:bg-base-300 cursor-pointer transition-colors">
                  <span className="mr-1">🏠</span> Entire place
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-base-200 text-sm text-airbnb-dark hover:bg-base-300 cursor-pointer transition-colors">
                  <span className="mr-1">🌟</span> Superhost
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-base-200 text-sm text-airbnb-dark hover:bg-base-300 cursor-pointer transition-colors">
                  <span className="mr-1">🏊‍♂️</span> Pool
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-base-200 text-sm text-airbnb-dark hover:bg-base-300 cursor-pointer transition-colors">
                  <span className="mr-1">🐕</span> Pets allowed
                </span>
              </div>

              {/* Search Button */}
              <div className="mt-4 text-right">
                <button className="px-8 py-3 bg-gradient-to-r from-[#FF385C] to-[#BD1E59] text-white rounded-xl text-base font-semibold hover:from-[#BD1E59] hover:to-[#FF385C] transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Search
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm text-airbnb-dark hover:bg-white transition-all duration-300 shadow-sm">
                Popular destinations
              </button>
              <button className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm text-airbnb-dark hover:bg-white transition-all duration-300 shadow-sm">
                Last minute deals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-airbnb-dark mb-2">Popular destinations</h2>
        <p className="text-airbnb-gray text-lg mb-12">Explore these curated destinations loved by our community</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium">{destination.rating}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-airbnb-dark">{destination.name}</h3>
                <p className="text-airbnb-gray mt-1">{destination.distance}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-airbnb-dark mb-2 mt-24">Live anywhere</h2>
        <p className="text-airbnb-gray text-lg mb-12">Find the perfect place to stay at an amazing price</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.type} 
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-airbnb-dark">{property.type}</h3>
                    <p className="text-airbnb-gray mt-2">{property.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold text-airbnb-dark">{property.price}</span>
                  <button className="px-6 py-2 bg-airbnb-red text-white rounded-lg hover:bg-[#BD1E59] transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Host Banner */}
      <div className="bg-base-200 mt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-airbnb-dark leading-tight">Become a Host</h2>
              <p className="text-xl text-airbnb-gray mt-6 mb-8">
                Earn extra income and unlock new opportunities by sharing your space. 
                Join millions of hosts on Airbnb.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF385C] to-[#BD1E59] text-white rounded-xl font-semibold hover:from-[#BD1E59] hover:to-[#FF385C] transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Become a host" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

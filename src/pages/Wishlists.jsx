import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Wishlists = () => {
  // Placeholder data for wishlists
  const wishlists = [
    {
      id: 1,
      name: 'Dream Homes',
      imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      itemCount: 5
    },
    {
      id: 2,
      name: 'Beach Getaways',
      imageUrl: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg',
      itemCount: 3
    },
    {
      id: 3,
      name: 'Mountain Retreats',
      imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg',
      itemCount: 7
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Wishlists</h1>
          <p className="mt-4 text-xl text-gray-500">
            Save your favorite places and experiences
          </p>
        </div>

        {wishlists.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlists.map((wishlist) => (
              <div
                key={wishlist.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={wishlist.imageUrl}
                    alt={wishlist.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{wishlist.name}</h3>
                  <p className="text-sm text-gray-500">{wishlist.itemCount} items saved</p>
                </div>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-200">
                  <FaRegHeart className="text-primary w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <FaRegHeart className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No wishlists</h3>
            <p className="mt-1 text-sm text-gray-500">
              Start creating your lists of favorite places.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlists;

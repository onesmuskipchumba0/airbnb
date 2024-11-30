import React from 'react';
import { FaSearch, FaRegQuestionCircle, FaRegComments, FaRegBookmark } from 'react-icons/fa';

const Help = () => {
  const helpCategories = [
    {
      title: 'Booking and payments',
      icon: <FaRegBookmark className="h-6 w-6" />,
      topics: ['Payment methods', 'Cancellation options', 'Booking for guests']
    },
    {
      title: 'Your reservations',
      icon: <FaRegComments className="h-6 w-6" />,
      topics: ['Change reservation', 'Cancel reservation', 'Contact host']
    },
    {
      title: 'Hosting',
      icon: <FaRegQuestionCircle className="h-6 w-6" />,
      topics: ['Create a listing', 'Host safety', 'Hosting regulations']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">How can we help?</h1>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Search help articles..."
              />
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {helpCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      {category.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="space-y-3">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-primary block transition-colors"
                        >
                          {topic}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center pb-16">
          <h2 className="text-2xl font-semibold text-gray-900">Still need help?</h2>
          <p className="mt-4 text-gray-500">
            Our support team is always ready to assist you
          </p>
          <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;

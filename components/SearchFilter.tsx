// components/SearchFilter.js
import React from 'react';

export default function SearchFilter({ searchQuery, setSearchQuery, filterOption, setFilterOption }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-6 space-y-2 md:space-y-0 md:space-x-4 gap-4">
      <input
        type="text"
        placeholder="Search by item name"
        className="w-full md:w-auto border border-gray-300 dark:border-gray-600 p-3 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="w-full md:w-auto border border-gray-300 dark:border-gray-600 p-3 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400"
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
      >
        <option value="">All</option>
        <option value="quantity">Available Quantity</option>
        <option value="lastUpdated">Recently Updated</option>
      </select>
    </div>
  );
}

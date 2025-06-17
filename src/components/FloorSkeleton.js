import React from "react";

const FloorSkeleton = () => (
  <div className="bg-gray-100 animate-pulse rounded-lg shadow-md overflow-hidden h-72 flex flex-col">
    <div className="w-full h-40 bg-gray-200" />
    <div className="p-5 flex-1 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-3">
        <div className="w-24 h-6 bg-gray-200 rounded" />
        <div className="w-16 h-6 bg-gray-200 rounded" />
      </div>
      <div className="w-20 h-4 bg-gray-200 rounded mb-2" />
      <div className="w-20 h-4 bg-gray-200 rounded" />
    </div>
  </div>
);

export default FloorSkeleton;

import React from "react";

const ApartmentSkeleton = () => (
  <div className="bg-gray-100 animate-pulse rounded-xl shadow-md overflow-hidden flex flex-col justify-between min-h-[350px]">
    <div className="relative bg-gray-200 flex items-center justify-center h-56 w-full" />
    <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <div className="w-24 h-6 bg-gray-200 rounded" />
        <div className="w-12 h-6 bg-gray-200 rounded" />
      </div>
      <div className="w-32 h-4 bg-gray-200 rounded mb-2" />
      <div className="w-24 h-4 bg-gray-200 rounded mb-2" />
      <div className="w-20 h-4 bg-gray-200 rounded" />
    </div>
  </div>
);

export default ApartmentSkeleton;

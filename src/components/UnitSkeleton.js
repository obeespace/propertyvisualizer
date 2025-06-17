import React from "react";

const UnitSkeleton = () => (
  <div className="bg-gray-100 animate-pulse rounded-xl shadow-md overflow-hidden min-h-[400px] p-6">
    <div className="w-full h-56 bg-gray-200 rounded-xl mb-6" />
    <div className="w-32 h-8 bg-gray-200 rounded mb-4" />
    <div className="w-24 h-6 bg-gray-200 rounded mb-2" />
    <div className="w-20 h-4 bg-gray-200 rounded mb-2" />
    <div className="w-20 h-4 bg-gray-200 rounded mb-2" />
    <div className="w-32 h-10 bg-gray-200 rounded" />
  </div>
);

export default UnitSkeleton;

import React from "react";

const TowerSkeleton = () => (
  <div className="relative animate-pulse bg-gray-100 rounded-2xl h-80 flex flex-col items-center justify-end">
    <div className="absolute top-3 left-3 w-24 h-8 bg-gray-200 rounded-xl" />
    <div className="flex-1 flex items-center justify-center w-full">
      <div className="w-32 h-32 bg-gray-200 rounded-2xl" />
    </div>
    <div className="flex justify-center absolute bottom-3 w-full left-0">
      <div className="bg-gray-300 w-3/6 h-10 rounded-xl" />
    </div>
  </div>
);

export default TowerSkeleton;

import React from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const UnitCard = ({ unit, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between cursor-pointer group transition-all duration-300"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Overlay for darken effect on hover */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-xl transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-50" />
      {/* Image Placeholder */}
      <div className="relative bg-gray-200 flex items-center justify-center h-56 transition-all duration-300">
        <svg className="w-16 h-16 text-gray-400 z-20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6M3 7l9 6 9-6" />
        </svg>
        {unit.available === false && (
          <span className="absolute top-6 left-1/2 -translate-x-1/2 bg-red-400 text-white px-4 py-1 rounded-full text-sm font-semibold z-30">Not Available</span>
        )}
        {unit.image && (
          <img
            src={unit.image}
            alt={unit.name || unit.id}
            className="absolute inset-0 w-full h-full object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            style={{ zIndex: 0 }}
          />
        )}
      </div>
      {/* Details */}
      <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold">{unit.name || unit.id}</h2>
          <span className="bg-gray-100 text-black px-4 py-1 rounded-full text-xs font-semibold border">{unit.type || unit.unitType}</span>
        </div>
        <div className="flex items-center gap-6 text-gray-700 mb-4 text-sm">
          <div className="flex items-center gap-1">
            <FaRulerCombined className="inline-block mr-1" />
            {unit.size || unit.area}
          </div>
          <div className="flex items-center gap-1">
            <FaBed className="inline-block mr-1" />
            {unit.beds || unit.rooms} bed,
            <FaBath className="inline-block ml-2 mr-1" />
            {unit.baths || 2} bath
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex items-center justify-between mt-2">
          <span className={`text-2xl font-bold ${unit.available === false ? 'text-blue-300' : 'text-blue-600'}`}>{unit.price ? `$${unit.price.toLocaleString()}` : ''}</span>
          {unit.available !== false && (
            <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">View Details</button>
          )}
        </div>
      </div>
      {/* Card scale effect on hover */}
      <style jsx>{`
        .group:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
      `}</style>
    </div>
  );
};

export default UnitCard;

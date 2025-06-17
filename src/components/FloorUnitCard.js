import React from 'react'
import execfloor from '../images/execfloor.jpg'; 
import standardFloor from '../images/standardfloor.jpg';
import premiumFloor from '../images/premiumfloor.jpg';

const getFloorImage = (category) => {
  if (!category) return execfloor;
  const cat = category.toLowerCase();
  if (cat === 'premium') return premiumFloor;
  if (cat === 'standard') return standardFloor;
  if (cat === 'executive') return execfloor;
  return execfloor;
};

const FloorUnitCard = ({floorNumber, totalUnits, availableUnits, floorCategory, onClick}) => {
  return (
    <div className="bg-white p-0 rounded-lg cursor-pointer shadow-md overflow-hidden" onClick={onClick} role="button" tabIndex={0}>
          <img
            src={getFloorImage(floorCategory)}
            alt={`Floor ${floorNumber}`}
            className="w-full h-40 object-cover"
            loading="lazy"
          />
          <div className="p-5 bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Floor {floorNumber}</h2>
              <p className="bg-gray-100 text-black px-4 py-1 rounded-full text-sm font-semibold border">
                {floorCategory}
              </p>
            </div>
            <div className="flex justify-between items-center mt-5">
              <p className="text-gray-700">Total Units:</p>
              <p>{totalUnits}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-700">Available Units:</p>
              <p>{availableUnits}</p>
            </div>
          </div>
        </div>
  )
}

export default FloorUnitCard
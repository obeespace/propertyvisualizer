import React from 'react'

const TowerUnitCard = ({towerName, towerImage, onClick}) => {
  return (
    <div className="relative" onClick={onClick} role="button" tabIndex={0}>
          <p className="bg-white absolute rounded-xl shadow-md text-black px-3 py-1 top-3 left-3">
            {towerName}
          </p>
          <div className="flex justify-center items-center">
            <img
              src={towerImage}
              alt={towerName}
              className="h-5/6 rounded-2xl object-contain"
            />
          </div>
          <div className="flex justify-center absolute bottom-3 w-full left-0">
            <button className="bg-gray-800 w-3/6 text-white rounded-xl px-4 py-2">
              Explore
            </button>
          </div>
        </div>
  )
}

export default TowerUnitCard
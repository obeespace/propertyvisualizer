import React, { createContext, useContext, useState } from 'react';
import data from './real_estate_towers_with_prices.json';
import tower1 from '../images/tower1_RegalRetreat.jpg';
import tower2 from '../images/tower2_SummitSuites.jpg';
import tower3 from '../images/tower3_Luxevista.jpg';

const imageMap = {
  '../images/tower1_RegalRetreat.jpg': tower1,
  '../images/tower2_SummitSuites.jpg': tower2,
  '../images/tower3_Luxevista.jpg': tower3
};

const towersWithImages = data.towers.map(tower => ({
  ...tower,
  image: imageMap[tower.image] || tower.image,
}));

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selectedTower, setSelectedTower] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <DataContext.Provider value={{
      towers: towersWithImages,
      selectedTower,
      setSelectedTower,
      selectedFloor,
      setSelectedFloor,
      selectedUnit,
      setSelectedUnit
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

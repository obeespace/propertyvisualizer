import React from "react";
import { Route, Routes } from "react-router-dom";
import Towers from "./components/pages/Towers";
import Floors from "./components/pages/Floors";
import Apartments from "./components/pages/Apartments";
import { AnimatePresence } from 'framer-motion';
import Units from "./components/pages/Units";
import { DataProvider } from "./components/DataContext";

function App() {
  return (
    <DataProvider>
      <AnimatePresence wait>
        <Routes>
          <Route path="/" element={<Towers />} />
          <Route path="/floors/:towerId" element={<Floors />} />
          <Route path="/apartments/:towerId/:floorNumber" element={<Apartments />} />
          <Route path="/unit/:towerId/:floorNumber/:unitId" element={<Units />} />
        </Routes>
      </AnimatePresence>
    </DataProvider>
  );
}

export default App;
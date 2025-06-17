import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";
import TowerUnitCard from "../TowerUnitCard";

const Towers = () => {
  const { towers, setSelectedTower } = useData();
  const navigate = useNavigate();

  return (
    <div className="lg:w-5/6 mx-auto p-10 my-20 bg-white rounded-3xl shadow-md shadow-gray-200">
      <h1 className="md:text-3xl text-2xl font-black text-center mb-10">
        Vision Towers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
        {towers.map((t, index) => (
          <TowerUnitCard
            key={t.id}
            towerName={t.name}
            towerImage={t.image || ''}
            onClick={() => {
              setSelectedTower(t);
              navigate(`/floors/${t.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Towers;

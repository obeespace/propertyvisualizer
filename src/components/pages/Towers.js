import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";
import TowerUnitCard from "../TowerUnitCard";
import TowerSkeleton from "../TowerSkeleton";

const Towers = () => {
  const { towers, setSelectedTower } = useData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:w-5/6 mx-auto p-10 lg:my-20 bg-white rounded-3xl shadow-md shadow-gray-200">
      <h1 className="text-2xl font-black text-center mb-10">
        Vision Towers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <TowerSkeleton key={i} />)
          : towers.map((t, index) => (
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

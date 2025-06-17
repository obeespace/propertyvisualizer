import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../DataContext";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import FloorUnitCard from "../FloorUnitCard";
import FloorSkeleton from "../FloorSkeleton";

const Floors = () => {
  const { towers } = useData();
  const navigate = useNavigate();
  const { towerId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const selectedTower = towers.find((t) => t.id === towerId);

  if (!selectedTower) {
    return <div className="text-center mt-10">No tower selected.</div>;
  }

  return (
    <div className="min-h-screen py-8 px-2 md:px-8">
      <h1 className="text-xl font-bold text-center my-5">
        Floors - {selectedTower.name}
      </h1>
      <div className=" w-5/6 mx-auto">
        <button
          className="flex gap-2 items-center w-fit mb-5 rounded-xl px-4 py-2 bg-black text-white"
          onClick={() => navigate(`/`)}
        >
          <IoChevronBackCircleOutline /> Back
        </button>
      </div>
      <div className="grid grid-cols-1 w-5/6 mx-auto md:grid-cols-3 gap-10">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <FloorSkeleton key={i} />)
          : selectedTower.floors.map((floor, index) => (
              <FloorUnitCard
                key={index}
                floorNumber={floor.floorNumber}
                totalUnits={floor.layouts.length}
                floorCategory={floor.category}
                availableUnits={floor.layouts.length}
                onClick={() => {
                  navigate(
                    `/apartments/${selectedTower.id}/${floor.floorNumber}`
                  );
                }}
              />
            ))}
      </div>
    </div>
  );
};

export default Floors;

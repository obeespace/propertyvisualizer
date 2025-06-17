import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../DataContext";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import FloorUnitCard from "../FloorUnitCard";

const Floors = () => {
  const { towers } = useData();
  const navigate = useNavigate();
  const { towerId } = useParams();

  const selectedTower = towers.find((t) => t.id === towerId);

  if (!selectedTower) {
    return <div className="text-center mt-10">No tower selected.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">
        Floors - {selectedTower.name}
      </h1>
      <div className=" w-11/12 mx-auto">
        <button
          className="flex gap-2 items-center w-fit mb-5 rounded-xl px-4 py-2 bg-black text-white"
          onClick={() => navigate(`/`)}
        >
          <IoChevronBackCircleOutline /> Back
        </button>
      </div>
      <div className="grid grid-cols-1 w-11/12 mx-auto md:grid-cols-3 gap-10">
        {selectedTower.floors.map((floor, index) => (
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

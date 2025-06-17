import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../DataContext";
import UnitCard from "../ApartmentUnitCard";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import ApartmentSkeleton from "../ApartmentSkeleton";


const Apartments = () => {
  const { towers } = useData();
  const navigate = useNavigate();
  const { towerId, floorNumber } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const selectedTower = towers.find(t => t.id === towerId);
  const selectedFloor = selectedTower?.floors.find(f => String(f.floorNumber) === String(floorNumber));

  if (!selectedFloor) {
    return <div className="text-center mt-10">No floor selected.</div>;
  }

  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8 px-2 md:px-8">
        <p className="font-bold text-xl my-5 text-center">Apartments</p>
        <div className=" w-11/12 mx-auto">
          <button
            className="flex gap-2 items-center w-fit mb-5 rounded-xl px-4 py-2 bg-black text-white"
            onClick={() => navigate(`/floors/${towerId}`)}
          >
            <IoChevronBackCircleOutline /> Back
          </button>
        </div>
        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <ApartmentSkeleton key={i} />)
            : selectedFloor.layouts.map((unit, idx) => (
                <UnitCard
                  key={unit.id}
                  unit={unit}
                  onClick={() => {
                    navigate(`/unit/${towerId}/${floorNumber}/${unit.id}`);
                  }}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Apartments;

import React from "react";
import {
  FaWifi,
  FaDoorClosed,
  FaHotTub,
  FaBath,
  FaRegBuilding,
  FaCheckCircle,
  FaRegStar,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { useData } from "../DataContext";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const amenities = [
  { icon: <FaDoorClosed />, label: "Lock on bedroom door" },
  { icon: <FaWifi />, label: "Wifi" },
  { icon: <FaHotTub />, label: "Hot tub" },
  { icon: <FaBath />, label: "Bathtub" },
  { icon: <FaKitchenSet />, label: "Kitchen" },
  { icon: <FaRegBuilding />, label: "Dedicated workspace" },
];

const Units = () => {
  const { towers } = useData();
  const navigate = useNavigate();
  const { towerId, floorNumber, unitId } = useParams();

  const selectedTower = towers.find((t) => t.id === towerId);
  const selectedFloor = selectedTower?.floors.find(
    (f) => String(f.floorNumber) === String(floorNumber)
  );
  const selectedUnit = selectedFloor?.layouts.find((u) => u.id === unitId);

  if (!selectedUnit) {
    return <div className="text-center mt-10">No unit selected.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-2 md:px-8">
      <p className="font-bold text-2xl my-5 text-center">Unit</p>
      <div className=" w-11/12 mx-auto">
        <button
          className="flex gap-2 items-center w-fit mb-5 rounded-xl px-4 py-2 bg-black text-white"
          onClick={() => navigate(`/apartments/${towerId}/${floorNumber}`)}
        >
          <IoChevronBackCircleOutline /> Back
        </button>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {selectedUnit.id || selectedUnit.name}
        </h1>
        {/* Image Grid */}
        <div className="h-72 mb-8">
          <img
            src={
              
              "https://img.freepik.com/free-photo/modern-minimalist-living-dining-space-with-natural-light_23-2151983233.jpg?uid=R27017460&ga=GA1.1.1750306668.1745505589&semt=ais_hybrid&w=740"
            }
            alt="main"
            className="row-span-2 col-span-2 w-full h-full object-cover rounded-2xl"
          />
          
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Details */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">
                {selectedUnit.unitType || selectedUnit.type} -{" "}
                {selectedUnit.category}
              </h2>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <span>
                  {selectedUnit.rooms || selectedUnit.beds} bed ·{" "}
                  {selectedUnit.baths || 2} bath
                </span>
                <span className="flex items-center gap-1 ml-4 text-yellow-500">
                  <FaRegStar /> 4.77 ·{" "}
                  <span className="underline">25 reviews</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="host"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold">Stay with Obee</div>
                <div className="text-gray-500 text-sm">2 years hosting</div>
              </div>
            </div>
            <ul className="mb-4 text-gray-700">
              <li className="flex items-center gap-2 mb-1">
                <FaCheckCircle className="text-green-500" /> Unwind in the hot
                tub
              </li>
              <li className="flex items-center gap-2 mb-1">
                <FaCheckCircle className="text-green-500" /> Room in a condo
              </li>
              <li className="flex items-center gap-2 mb-1">
                <FaCheckCircle className="text-green-500" /> Free cancellation
                for 48 hours
              </li>
            </ul>
            <div className="mb-4">
              <h3 className="font-semibold mb-1">About this place</h3>
              <p className="text-gray-700 text-sm">Area: {selectedUnit.area}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">What this place offers</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {amenities.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-lg">{a.icon}</span> {a.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Reservation Box */}
          <div className="w-full md:w-80">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold">
                  $
                  {selectedUnit.price
                    ? selectedUnit.price.toLocaleString()
                    : ""}
                </span>
                <span className="text-gray-500">for 2 nights</span>
              </div>
              <form className="mb-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold">CHECK-IN</label>
                  <input
                    type="date"
                    className="border rounded px-2 py-1"
                    defaultValue="2025-10-31"
                  />
                  <label className="text-xs font-semibold">CHECKOUT</label>
                  <input
                    type="date"
                    className="border rounded px-2 py-1"
                    defaultValue="2025-11-02"
                  />
                  <label className="text-xs font-semibold">GUESTS</label>
                  <select className="border rounded px-2 py-1">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                  </select>
                </div>
              </form>
              <button className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
                Reserve
              </button>
              <div className="text-xs text-gray-500 mt-2 text-center">
                You won't be charged yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Units;

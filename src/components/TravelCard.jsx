import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { getErrorMessage } from "../utils/constants";

const TravelCard = ({ index, range, handleDateChange, removeDateRange }) => {
  return (
    <div className="mt-2 bg-gray-400 rounded p-2 border border-blue-200 gap-4">
      <div className="flex items-center">
        <div className="flex flex-col md:flex-row md:gap-8 items-center">
          <div className="flex items-center">
            <label className="block font-medium text-gray-700 w-20 md:w-auto">
              Departure:
            </label>
            <input
              type="date"
              className="border-2 border-black rounded-md p-1 ml-2 w-36"
              value={range.from}
              onChange={(e) => handleDateChange(index, "from", e.target.value)}
            />
          </div>
          <div className="mt-2 md:mt-0 flex items-center">
            <label className="block font-medium text-gray-700 w-20 md:w-auto">
              Arrival:
            </label>
            <input
              type="date"
              className="border-2 border-black rounded-md p-1 ml-2 w-36"
              value={range.to}
              onChange={(e) => handleDateChange(index, "to", e.target.value)}
            />
          </div>
        </div>
        <button
          className="ml-4 p-1 text-white text-2xl rounded-full bg-red-500"
          onClick={() => removeDateRange(index)}
        >
          <MdDeleteForever className="" />
        </button>
      </div>
      {range.validDays !== null && (
        <div className="flex mt-4 justify-end">
          {!range.outOfRange ? (
            <p className="ml-4 text-gray-700 rounded-md p-1 bg-blue-200">
              NRI Days: {range.validDays}
            </p>
          ) : (
            <p className="ml-4 text-gray-100 rounded-md p-1 bg-red-500">
              {getErrorMessage("outOfRange")}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TravelCard;

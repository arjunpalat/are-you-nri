import React from "react";

const TravelCard = ({ index, range, handleDateChange, removeDateRange }) => {
  return (
    <div className="mt-2 bg-gray-400 rounded p-2 flex-col border border-blue-200 gap-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <label className="block font-medium text-gray-700">From:</label>
          <input
            type="date"
            className="border-2 border-black rounded-md p-1 ml-2 w-36"
            value={range.from}
            onChange={(e) => handleDateChange(index, "from", e.target.value)}
          />
          <label className="block font-medium text-gray-700 ml-4">To:</label>
          <input
            type="date"
            className="border-2 border-black rounded-md p-1 ml-2 w-36"
            value={range.to}
            onChange={(e) => handleDateChange(index, "to", e.target.value)}
          />
        </div>
        <button
          className="ml-4 p-1 bg-slate-300 text-white rounded-full w-8"
          onClick={() => removeDateRange(index)}
        >
          ❌
        </button>
      </div>
      {range.days !== null && (
        <div className="flex mt-4 justify-end">
          <p className="text-gray-700 rounded-md p-1 bg-blue-200">
            Days Abroad: {range.days}
          </p>
          <p className="ml-4 text-gray-700 rounded-md p-1 bg-blue-200">
            Valid Days: {range.validDays}
          </p>
        </div>
      )}
    </div>
  );
};

export default TravelCard;

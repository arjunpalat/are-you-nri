const Actions = ({addDateRange, reset, calculateDateRanges}) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded  hover:scale-95 active:scale-90 transition duration-200 border-b-2 border-black"
          onClick={addDateRange}
        >
          Add Travel
        </button>
        <button
          className="mt-4 p-2 bg-green-500 text-white rounded hover:scale-95 active:scale-90 transition duration-200 border-b-2 border-black"
          onClick={calculateDateRanges}
        >
          Calculate
        </button>
      </div>
      <button
        className="mt-4 p-2 bg-red-500 text-white rounded hover:scale-95 active:scale-90 transition duration-200 border-b-2 border-black"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Actions
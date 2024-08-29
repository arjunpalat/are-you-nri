const Actions = ({addDateRange, reset, calculateDateRanges}) => {
  return (
    <div className="">
      <div className="flex justify-between w-full">
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded  hover:scale-95 active:scale-90 transition duration-200 border-b-2 border-black min-w-28"
          onClick={addDateRange}
        >
          Add Travel
        </button>
        <button
          className="mt-4 p-2 bg-red-500 text-white rounded hover:scale-95 active:scale-90 transition duration-200 border-b-2 border-black min-w-28"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <button
        className="mt-5 p-2 block bg-teal-500 text-white rounded hover:scale-95 active:scale-90 transition duration-200 border-b-2 border-black min-w-28"
        onClick={calculateDateRanges}
      >
        Calculate
      </button>
    </div>
  );
}

export default Actions
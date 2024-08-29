import { getErrorMessage } from "../utils/constants";

const Modal = ({ error, setError }) => {
  if (!error) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-slate-200 p-4 rounded shadow-lg text-center">
        <p className="mb-4 text-red-500">{getErrorMessage(error)}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded  hover:scale-95 active:scale-90 transition duration-200 border-b-2 border-black min-w-28"
          onClick={() => setError(null)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;

import { useEffect, useRef } from "react";
import { oifcNote } from "../utils/constants";
const Summary = ({ result }) => {
  const summaryRef = useRef(null);

  useEffect(() => {
    if (result !== null) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  return (
    <div ref={summaryRef}>
      {result !== null && (
        <div>
          <div className="mt-8 md:text-2xl font-bold">Summary</div>
          <table className="mt-4 w-full text-center">
            <tbody>
              <tr>
                <td className="border-2 border-black p-2">Financial Year</td>
                <td className="border-2 border-black p-2">
                  {result.financialYear}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2">Required NRI Days</td>
                <td className="border-2 border-black p-2">
                  {result.requiredDays}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2">Total NRI Days</td>
                <td className="border-2 border-black p-2">
                  {result.totalValidDays}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black p-2 font-bold">
                  Residential Status
                </td>
                <td className="border-2 border-black p-2 font-bold">
                  {result.status}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-8 text-center">
            <span>As per the </span>
            <em className="font-bold">OIFC Guide Book, </em>
            <em className="font-medium text-red-800">{oifcNote}</em></div>
        </div>
      )}
    </div>
  );
};

export default Summary;

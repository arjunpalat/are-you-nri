import { useEffect, useState } from "react";
import {
  getFinancialYear,
  getNRIDays,
  verifyAndUpdateDateRanges,
} from "./utils/constants";
import FinancialYearSelector from "./components/FinancialYearSelector";
import TravelHistory from "./components/TravelHistory";
import Actions from "./components/Actions";
import Summary from "./components/Summary";
import Modal from "./components/Modal";

const App = () => {
  const [financialYearEnd, setFinancialYearEnd] = useState("");
  const [dateRanges, setDateRanges] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDateRanges(verifyAndUpdateDateRanges(dateRanges, financialYearEnd));
    setResult(null);
  }, [financialYearEnd]);

  const addDateRange = () => {
    if (financialYearEnd === "") {
      setError("noFinancialYear");
      return;
    }
    setDateRanges([
      ...dateRanges,
      { from: "", to: "", outOfRange: false, validDays: null },
    ]);
  };

  const reset = () => {
    setFinancialYearEnd("");
    setDateRanges([]);
    setResult(null);
  };

  const calculateDateRanges = () => {
    let totalValidDays = 0;
    if (financialYearEnd === "") {
      setError("noFinancialYear");
      return;
    }
    if (dateRanges.length === 0) {
      setError("noHistory");
      return;
    }
    let hasError = false;
    for (const range of dateRanges) {
      if (range.from === "" || range.to === "") {
        hasError = true;
        setError("emptyDate");
        break;
      } else if (range.outOfRange) {
        hasError = true;
        setError("outOfRange");
        break;
      }
      totalValidDays += range.validDays;
    }

    if (!hasError) {
      setResult({
        totalValidDays,
        financialYear: getFinancialYear(financialYearEnd),
        requiredDays: getNRIDays(financialYearEnd),
        status:
          totalValidDays >= getNRIDays(financialYearEnd) ? "NRI" : "Resident",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-300">
      <Modal error={error} setError={setError} />
      <div className="p-4 mx-auto w-[90%]">
        <FinancialYearSelector
          financialYearEnd={financialYearEnd}
          setFinancialYearEnd={setFinancialYearEnd}
        />
        <TravelHistory
          dateRanges={dateRanges}
          setDateRanges={setDateRanges}
          setError={setError}
          financialYearEnd={financialYearEnd}
        />
        <Actions
          addDateRange={addDateRange}
          calculateDateRanges={calculateDateRanges}
          reset={reset}
        />
        <Summary result={result} />
      </div>
    </div>
  );
};

export default App;

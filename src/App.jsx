import { useState, useRef } from "react";
import {
  getFinancialYear,
  getNRIDays,
  getRangeIntersectionDays,
} from "./utils/constants";
import FinancialYearSelector from "./components/FinancialYearSelector";
import TravelHistory from "./components/TravelHistory";
import Actions from "./components/Actions";
import { DateTime } from "luxon";
import Summary from "./components/Summary";
import Modal from "./components/Modal";

const App = () => {
  const [financialYearEnd, setFinancialYearEnd] = useState("");
  const [dateRanges, setDateRanges] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const addDateRange = () => {
    if (financialYearEnd === "") {
      setError("noFinancialYear");
      return;
    }
    setDateRanges([
      ...dateRanges,
      { from: "", to: "", days: null, validDays: null },
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
    const results = dateRanges.map((range) => {
      if (range.from === "" || range.to === "") {
        hasError = true;
      }

      const fromDate = DateTime.fromISO(range.from);
      const toDate = DateTime.fromISO(range.to);
      let days = toDate.diff(fromDate, "days").days - 1;
      days = days < 0 ? 0 : days;
      let validDays = getRangeIntersectionDays(
        {
          from: fromDate,
          to: toDate,
        },
        financialYearEnd
      );
      validDays = validDays < 0 ? 0 : validDays;
      totalValidDays += validDays;

      return {
        from: range.from,
        to: range.to,
        days,
        validDays,
      };
    });
    if (hasError) {
      setError("emptyDate");
      setResult(null);
      return;
    }
    setDateRanges(results);
    setResult({
      totalValidDays,
      financialYear: getFinancialYear(financialYearEnd),
      requiredDays: getNRIDays(financialYearEnd),
      status:
        totalValidDays >= getNRIDays(financialYearEnd) ? "NRI" : "Resident",
    });
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

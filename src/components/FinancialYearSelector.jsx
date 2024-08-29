import { financialYears } from "../utils/constants";

const FinancialYearSelector = ({ financialYearEnd, setFinancialYearEnd }) => {
  return (
    <div className="mt-2 flex items-center">
      <label htmlFor="financialYear" className="block md:text-2xl font-bold">
        Financial Year:
      </label>
      <select
        id="financialYear"
        className="rounded-md shadow shadow-emerald-500 p-1 ml-2 text-sm md:text-lg"
        onChange={(e) => setFinancialYearEnd(e.target.value)}
        value={financialYearEnd}
      >
        <option value="">Select Financial Year</option>
        {financialYears.map((year) => (
          <option key={year.value} value={year.value}>
            {year.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FinancialYearSelector;

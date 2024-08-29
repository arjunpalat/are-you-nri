import { DateTime } from "luxon";
import TravelCard from "./TravelCard";

const TravelHistory = ({ dateRanges, setDateRanges }) => {
  const addDateRange = () => {
    setDateRanges([...dateRanges, { from: "", to: "" }]);
  };

  const removeDateRange = (index) => {
    const newDateRanges = dateRanges.filter((_, i) => i !== index);
    setDateRanges(newDateRanges);
  };

  const handleDateChange = (index, field, value) => {
    const newDateRanges = dateRanges.map((range, i) =>
      i === index ? { ...range, [field]: value } : range
    );
    setDateRanges(newDateRanges);
  };

  const reset = () => {
    setFinancialYear(null);
    setDateRanges([]);
    setResult(null);
  };

  return (
    <div>
      <div className="mt-8 text-2xl font-bold">Travel History</div>
      {dateRanges.map((range, index) => (
        <TravelCard
          key={index}
          range={range}
          index={index}
          handleDateChange={handleDateChange}
          removeDateRange={removeDateRange}
        />
      ))}
    </div>
  );
};

export default TravelHistory;

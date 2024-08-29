import { DateTime } from "luxon";
import TravelCard from "./TravelCard";
import { isValidDepartureArrivalRange } from "../utils/constants";

const TravelHistory = ({ dateRanges, setDateRanges, setError }) => {
  const removeDateRange = (index) => {
    const newDateRanges = dateRanges.filter((_, i) => i !== index);
    setDateRanges(newDateRanges);
  };

  const handleDateChange = (index, field, value) => {
    let hasError = false;
    const newDateRanges = dateRanges.map((range, i) => {
      if (i === index) {
        if (field === "from") {
          hasError = !isValidDepartureArrivalRange(value, range.to);
        } else {
          hasError = !isValidDepartureArrivalRange(range.from, value);
        }
        return {
          ...range,
          [field]: value,
          days: null,
          validDays: null,
        };
      }
      return range;
    });
    if (hasError) {
      setError("invalidRange");
      return;
    }
    setDateRanges(newDateRanges);
  };

  return (
    <div>
      <div className="mt-8 md:text-2xl font-bold">Travel History</div>
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

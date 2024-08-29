import { DateTime } from "luxon";
import TravelCard from "./TravelCard";
import {
  getRangeIntersectionDays,
  isValidDepartureArrivalRange,
} from "../utils/constants";

const TravelHistory = ({
  dateRanges,
  setDateRanges,
  setError,
  financialYearEnd,
}) => {
  const removeDateRange = (index) => {
    const newDateRanges = dateRanges.filter((_, i) => i !== index);
    setDateRanges(newDateRanges);
  };

  const handleDateChange = (index, field, value) => {
    let hasError = false;
    const newDateRanges = dateRanges.map((range, i) => {
      if (i === index) {
        let validDays = null;
        if (field === "from") {
          hasError = !isValidDepartureArrivalRange(value, range.to);
          if (range.to !== "") {
            validDays = getRangeIntersectionDays(
              {
                from: DateTime.fromISO(value),
                to: DateTime.fromISO(range.to),
              },
              financialYearEnd
            );
          }
        } else {
          hasError = !isValidDepartureArrivalRange(range.from, value);
          if (range.from !== "") {
            validDays = getRangeIntersectionDays(
              {
                from: DateTime.fromISO(range.from),
                to: DateTime.fromISO(value),
              },
              financialYearEnd
            );
          }
        }
        return {
          ...range,
          [field]: value,
          validDays,
          outOfRange: validDays === -1,
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

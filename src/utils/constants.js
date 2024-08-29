import { DateTime } from "luxon";

const NRIDaysLeap = 185;
const NRIDaysNonLeap = 184;

const getValidRange = (year) => {
  const endYear = Number(year);
  const startYear = endYear - 1;

  return {
    from: DateTime.fromObject({
      year: startYear,
      month: 4,
      day: 1,
    }),
    to: DateTime.fromObject({
      year: endYear,
      month: 3,
      day: 31,
    }),
  };
};

export const getNRIDays = (year) => {
  if (year % 4 === 0) {
    return NRIDaysLeap;
  }
  return NRIDaysNonLeap;
};

export const financialYears = Array.from({ length: 10 }, (_, i) => {
  const startYear = 2022 + i;
  const endYear = startYear + 1;
  return {
    label: `${startYear}-${endYear.toString().slice(-2)}`,
    value: endYear,
  };
});

export const getFinancialYear = (yearEnd) => {
  const year = Number(yearEnd) - 1;
  return `${year}-${yearEnd.toString().slice(-2)}`;
};

export const getRangeIntersectionDays = (userRange, year) => {
  let correction = -1;
  const validRange = getValidRange(year);
  let from = Math.max(validRange.from.ts, userRange.from.ts);
  let to = Math.min(validRange.to.ts, userRange.to.ts);

  if (
    userRange.from.ts > validRange.to.ts ||
    userRange.to.ts < validRange.from.ts
  ) {
    return 0;
  }

  if (from > userRange.from.ts) {
    correction += 1;
  }

  if (to < userRange.to.ts) {
    correction += 1;
  }

  from = DateTime.fromMillis(from);
  to = DateTime.fromMillis(to);
  return to.diff(from, "days").days + correction;
};

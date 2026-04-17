export type BirthdateValue = {
  day: number;
  year: number;
  selectedParts: Array<number | null>;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const BROKEN_MONTH_COLUMNS = [
  ["j", "nov", "dec", "febr", "m", "sept"],
  ["octo", "em", "uly", "a", "une", "an"],
  ["ber", "y", "uary", "rch", "pril", "ugust"],
];

const today = new Date();
const monthChoices = [null, ...Array(6).keys()]

export const DEFAULT_BIRTHDATE: BirthdateValue = {
  day: today.getDate(),
  year: today.getFullYear(),
  selectedParts: [
    monthChoices[Math.floor(Math.random() * monthChoices.length)],
    monthChoices[Math.floor(Math.random() * monthChoices.length)],
    monthChoices[Math.floor(Math.random() * monthChoices.length)]
  ],
};

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getDaysInMonth(monthIndex: number, year: number) {
  if (monthIndex === 1) {
    const isLeapYear =
      year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    return isLeapYear ? 29 : 28;
  }

  return [3, 5, 8, 10].includes(monthIndex) ? 30 : 31;
}

export function formatMonth(parts: Array<number | null>) {
  const joined = parts
    .map((partIndex, columnIndex) =>
      partIndex == null ? "" : BROKEN_MONTH_COLUMNS[columnIndex][partIndex] ?? "",
    )
    .join("");

  if (!joined) {
    return "";
  }

  return joined.charAt(0).toUpperCase() + joined.slice(1);
}

export function getMaxDays(parts: Array<number | null>, year: number) {
  const selectedLabel = formatMonth(parts).toLowerCase();
  const monthIndex = MONTHS.findIndex(
    (month) => month.toLowerCase() === selectedLabel,
  );

  if (monthIndex === -1) {
    return 31;
  }

  return getDaysInMonth(monthIndex, year);
}

export function formatBirthdate(value: BirthdateValue) {
  return `${formatMonth(value.selectedParts) || "—"} ${value.day}, ${value.year}`;
}

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

export const DEFAULT_BIRTHDATE: BirthdateValue = {
  day: 0,
  year: 1900,
  selectedParts: [4, null, 3],
};

function clamp(value: number, min: number, max: number) {
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

type FunnyBirthdateSelectorProps = {
  value: BirthdateValue;
  onChange: (value: BirthdateValue) => void;
};

function FunnyBirthdateSelector({
  value,
  onChange,
}: FunnyBirthdateSelectorProps) {
  const { day, year, selectedParts } = value;

  const updateValue = (nextValue: Partial<BirthdateValue>) => {
    const mergedValue = {
      ...value,
      ...nextValue,
    };

    mergedValue.day = clamp(
      mergedValue.day,
      0,
      getMaxDays(mergedValue.selectedParts, mergedValue.year),
    );

    onChange(mergedValue);
  };

  return (
    <div className="birthdate-form" aria-label="Funny birthdate selector">
      <div className="birthdate-row">
        <p className="birthdate-label">month</p>
        <div className="birthdate-month-grid">
          {BROKEN_MONTH_COLUMNS.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="birthdate-month-column">
              {column.map((part, partIndex) => {
                const isSelected = selectedParts[columnIndex] === partIndex;

                return (
                  <button
                    key={`${columnIndex}-${part}`}
                    type="button"
                    className={`birthdate-month-part${isSelected ? " selected" : ""}`}
                    aria-pressed={isSelected}
                    aria-label={`Select month part ${part}`}
                    onClick={() => {
                      const nextParts = [...selectedParts];
                      nextParts[columnIndex] =
                        nextParts[columnIndex] === partIndex ? null : partIndex;
                      updateValue({ selectedParts: nextParts });
                    }}
                  >
                    {part}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="birthdate-row">
        <p className="birthdate-label">day</p>
        <div className="birthdate-spinner">
          <input
            className="birthdate-spinner-input"
            aria-label="Day"
            inputMode="numeric"
            value={day}
            onChange={(event) => {
              const digitsOnly = event.target.value.replace(/[^\d-]/g, "");

              if (digitsOnly === "") {
                updateValue({ day: 0 });
                return;
              }

              const numericValue = Number(digitsOnly);

              if (Number.isFinite(numericValue)) {
                updateValue({ day: numericValue });
              }
            }}
          />
          <div className="birthdate-spinner-buttons">
            <button type="button" onClick={() => updateValue({ day: day + 1 })}>
              +
            </button>
            <button type="button" onClick={() => updateValue({ day: day - 1 })}>
              -
            </button>
          </div>
        </div>
      </div>

      <div className="birthdate-row">
        <p className="birthdate-label">year</p>
        <div className="birthdate-year-wrap">
          <div className="birthdate-year-display">{year}</div>
          <input
            className="birthdate-year-slider"
            type="range"
            min="1900"
            max="2100"
            value={year}
            aria-label="Year"
            onChange={(event) => {
              updateValue({ year: Number(event.target.value) });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FunnyBirthdateSelector;

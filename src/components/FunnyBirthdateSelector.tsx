import {
  BROKEN_MONTH_COLUMNS,
  clamp,
  getMaxDays,
  type BirthdateValue,
} from "./birthdateUtils";

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
              const digitsOnly = event.target.value.replace(/[^\d]/g, "");

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

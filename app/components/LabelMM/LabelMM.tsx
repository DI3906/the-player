const rows = [
  Array.from({ length: 10 }, (_, i) => i),
  Array.from({ length: 7 }, (_, i) => i + 10),
  Array.from({ length: 7 }, (_, i) => i + 17),
];

export default function LabelMM() {
  const selected = 13;

  return (
    <div className="flex flex-col w-36">
      {rows.map((row, rowIndex) => (
        <ul
          key={rowIndex}
          className={`flex flex-row ${rowIndex === 1 ? "justify-between" : "justify-around"
            }`}
        >
          {row.map((num) => (
            <li
              key={num}
              className={
                num === selected
                  ? "border border-white rounded-full w-6 h-6 flex items-center justify-center"
                  : ""
              }
            >
              {num}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
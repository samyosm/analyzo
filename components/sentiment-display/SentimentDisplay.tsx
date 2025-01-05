export interface ISentimentDisplay {
  label: string;
  value: number;
}

export function SentimentDisplay({ label, value }: ISentimentDisplay) {
  const printed_percentage = (value * 100).toFixed(2).padStart(5, "0");
  const width_percentage = Math.max(value * 100, 2)
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex gap-3 items-baseline">
        <p className="capitalize font-medium">
          {label}
        </p>
        <p className="">
          {printed_percentage}%
        </p>
      </div>
      <div className="w-full">
        <div
          className="bg-gradient-to-r from-rose-400 to-rose-50 h-5 rounded-full"
          style={{ width: `${width_percentage}%` }}
        />
      </div>
    </div>
  )
}

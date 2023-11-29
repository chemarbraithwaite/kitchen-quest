import { ReactNode } from "react";

type Props = {
  label: ReactNode;
  values: string[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
};

const ChipGroup = ({
  label,
  values,
  className = "",
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-500",
}: Props) => {
  return (
    <div className={`flex gap-2 items-start justify-start ${className}`}>
      <div>{label}</div>
      <div className="flex flex-wrap gap-2">
        {values.slice(0, 3).map((value) => (
          <span
            key={value}
            className={`flex justify-center items-center text-xs px-2 py-1 rounded-full ${textColor} ${backgroundColor}`}
          >
            {`${value.slice(0, 1).toUpperCase()}${value.slice(1)}`}
          </span>
        ))}
        {values.length > 3 && (
          <span
            className={`flex justify-center items-center text-xs px-2 pxwy-1 rounded-full ${textColor} ${backgroundColor}`}
          >
            +{values.length - 3}
          </span>
        )}
        {values.length === 0 && (
          <span
            className={`flex justify-center items-center text-xs px-2 py-1 rounded-full`}
          >
            &mdash;
          </span>
        )}
      </div>
    </div>
  );
};

export default ChipGroup;

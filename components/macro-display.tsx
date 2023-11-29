import { ReactNode } from "react";

type Props = {
  quantity: ReactNode;
  label: string;
  className?: string;
};

const MacroDisplay = ({ quantity, label, className }: Props) => {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center
      bg-slate-400 p-2 w-16 h-28 rounded-full ${className ? className : ""}`}
    >
      <div className="text-sm mt-[-18px] flex justify-center items-center w-14 h-14 font-bold p-3 rounded-full bg-slate-100">
        {quantity}
      </div>
      <div className="text-xs font-semibold">{label}</div>
    </div>
  );
};

export default MacroDisplay;

"use client";

import { PAGE_SIZE } from "@/constants";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

type Props = {
  from: number;
  to: number;
  more: boolean;
  count: number;
};

const PaginationButton = ({ from, more, to, count }: Props) => {
  const router = useRouter();

  const handleNext = () => {
    const newPathName = updateSearchParams([
      { type: "from", value: to.toString() },

      { type: "to", value: (Number(to) + PAGE_SIZE).toString() },
    ]);
    router.push(newPathName, {
      scroll: false,
    });
  };

  const handlePrevious = () => {
    const newPathName = updateSearchParams([
      { type: "from", value: (Number(from) - PAGE_SIZE).toString() },
      { type: "to", value: (Number(to) - PAGE_SIZE).toString() },
    ]);

    router.push(newPathName, {
      scroll: false,
    });
  };

  return (
    <div className="flex justify-between items-center w-full p-1 mt-4">
      <p className="text-base text-slate-500 font-light ">
        Showing {from} - {to} of {count} results
      </p>
      <div className="flex justify-between items-center">
        <button
          className="bg-primary disabled:bg-slate-300 disabled:text-slate-500 hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-l"
          disabled={Number(from) === 0}
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button
          className="bg-primary hover:bg-primary-dark  disabled:bg-slate-300 disabled:text-slate-500 text-white font-semibold py-2 px-4 rounded-r"
          disabled={!more}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationButton;

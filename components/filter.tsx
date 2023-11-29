"use client";

import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { deleteSearchParams, updateSearchParams } from "@/utils";
import ChevronUpAndDownIcon from "./icons/chevron-up-and-down";

interface FilterProps {
  title: string;
  options: { label: string; value: string }[];
  className?: string;
}
const Filter = ({ title, options, className = "" }: FilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options?.[0] ?? null);
  const titleSegments = title.trim().split(" ");
  const isCamelCase = titleSegments.length > 1;
  const type = isCamelCase
    ? `${titleSegments[0].toLocaleLowerCase()}${titleSegments
        .splice(1)
        .join("")}`
    : title.toLowerCase();

  const handleUpdateParams = (e: { label: string; value: string }) => {
    const newPathName =
      e.value.trim() === ""
        ? deleteSearchParams(type)
        : updateSearchParams({
            type,
            value: e.value.toLowerCase(),
          });
    router.push(newPathName, {
      scroll: false,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has(type)) {
      const value = decodeURIComponent(params.get(type) ?? "");
      const selected = options.find(
        (option) => option.value.toLowerCase() === value.toLowerCase()
      );
      if (selected) setSelected(selected);
    }
  }, []);

  if (!options.length) return null;

  return (
    <div className={`w-fit ${className}`}>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit">
          <Listbox.Button
            className="relative w-full min-w-[127px] 
            aria-expanded:z-10
          flex justify-between items-center cursor-default rounded-lg
           bg-white py-2 px-3 text-left shadow-md sm:text-sm border"
          >
            <span className="block truncate">
              {selected.value === "" ? title : selected?.label}
            </span>
            <ChevronUpAndDownIcon className="ml-4 w-5 h-5" />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md
             bg-white focus:z-10 py-1 text-base shadow-lg ring-1
              ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.label}
                  className={({ active }) =>
                    `relative cursor-default z-10 select-none py-2 px-4 ${
                      active
                        ? "bg-primary text-white "
                        : "text-gray-900 bg-white"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Filter;

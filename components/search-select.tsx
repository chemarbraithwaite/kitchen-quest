"use client";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, forwardRef, useState } from "react";
import { searchSuggestions } from "@/constants";
import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  setSearchFocus?: () => void;
}

const SearchSelect = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange }, ref) => {
    const [query, setQuery] = useState<string>("");

    const filteredQuery =
      query === ""
        ? searchSuggestions
        : searchSuggestions.filter((suggestion) =>
            suggestion
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          );

    return (
      <div className="flex-1 max-sm:w-full flex justify-start items-center">
        <Combobox value={value} onChange={onChange}>
          <div className="relative w-full">
            <Combobox.Button className="absolute mt-[10px]">
              <Image
                src="/images/logo.webp"
                width={17}
                height={19}
                className="h-auto"
                alt="Logo"
              />
            </Combobox.Button>
            <Combobox.Input
              className="w-full h-9 pl-8 mt-[2px] p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
              placeholder='Enter a general search, eg. "Chicken"'
              displayValue={(value: string) => value}
              onChange={(e) => setQuery(e.target.value)}
              ref={ref}
            />
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options
                className="absolute max-h-60 w-full overflow-auto
             bg-white shadow-lg rounded-md focus:outline-none mt-1
              ring-1 ring-black ring-opacity-5 sm:text-sm "
              >
                {query !== "" && (
                  <Combobox.Option
                    value={query}
                    className="cursor-default bg-primary text-white select-none py-2 pl-10 pr-4"
                  >
                    Search for &quot;{query}&quot;
                  </Combobox.Option>
                )}
                {filteredQuery.map((suggestion) => (
                  <Combobox.Option
                    key={suggestion}
                    value={suggestion}
                    className={({ active }) =>
                      `cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-primary text-white " : "text-gray-900 "
                      }"}`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? `font-semibold ${
                                  !active ? "text-primary" : ""
                                } `
                              : "font-normal "
                          }`}
                        >
                          {suggestion}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    );
  }
);

SearchSelect.displayName = "SearchSelect";

export default SearchSelect;

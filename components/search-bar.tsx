"use client";

import { useEffect, useRef, useState } from "react";
import SearchSelect from "./search-select";
import SearchIcon from "./icons/search";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";
import { DEFAULT_SEARCH } from "@/constants";

const SearchBar = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setQuery(query);
    const newPathName = updateSearchParams({
      type: "q",
      value: encodeURIComponent(query.toLowerCase()),
    });

    router.push(newPathName, {
      scroll: false,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("q")) {
      const q = decodeURIComponent(params.get("q") ?? DEFAULT_SEARCH);
      setQuery(`${q.charAt(0).toUpperCase()}${q.slice(1)}`);
    }
  }, []);

  return (
    <div className="flex flex-1 py-0 px-3 h-10 rounded-lg shadow-md border z-10">
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchSelect ref={inputRef} value={query} onChange={handleSearch} />
      </div>
      <button
        type="submit"
        className="-ml-3 z-10"
        onClick={() => inputRef.current?.focus()}
      >
        <SearchIcon className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default SearchBar;

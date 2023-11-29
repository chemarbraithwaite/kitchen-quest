import { filterOptions } from "@/constants";
import { Filter, SearchBar } from ".";

const Search = () => {
  return (
    <div className="flex mt-12 w-full justify-between items-center flex-wrap gap-6">
      <SearchBar />
      <div className="flex justify-start flex-wrap items-center gap-2">
        {filterOptions.map((filter, index) => {
          if (filter.options.length === 0) return null;

          return (
            <Filter key={index} title={filter.title} options={filter.options} />
          );
        })}
      </div>
    </div>
  );
};

export default Search;

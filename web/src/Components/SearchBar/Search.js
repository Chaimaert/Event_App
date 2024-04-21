import React from "react";
import { FcSearch } from "react-icons/fc";

const Search = () => {
  return (
    <div className="flex justify-end mt-20 mr-8">
      <form className="relative">
        <div className="relative flex items-center">
          <input
            type="search"
            placeholder="Search a request..."
            className="w-64 md:w-96 p-4 pl-12 pr-16 rounded-full bg-search text-black"
          />
          <button className="absolute right-1 top-1/2 p-4 -translate-y-1/2 bg-serachIcon rounded-full">
            <FcSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;

import React from "react";
import { Search1 } from "../../icons/Search1";
import "./style.css";

export const SearchWrapper = ({ className }) => {
  return (
    <div className={`search-wrapper ${className}`}>
      <Search1 className="search-1" />
    </div>
  );
};

export default SearchWrapper;

import React from "react";
import { CodiconSearch } from "../../../assets/images/CodiconSearch";
import { CodiconClose } from "../../../assets/images/CodiconClose";
import "../../../styles/SearchBar/SearchInput/searchInput.css";
import { SearchInputProps } from "../../../interfaces/SearchBarInterfaces/SearchInputProps/SearchInputProps";

export const SearchInput: React.FC<SearchInputProps> = ({
  searchValue,
  handleSearchChange,
  clearSearchInput,
}) => {
  return (
    <div className='search-bar-container'>
      <CodiconSearch className='icon' />
      <input
        type='text'
        placeholder='Search...'
        className='search-inp'
        value={searchValue}
        onChange={handleSearchChange}
      />
      {searchValue !== "" && (
        <button
          className='search-clear-btn'
          onClick={clearSearchInput}
        >
          <CodiconClose className='icon' />
        </button>
      )}
    </div>
  );
};

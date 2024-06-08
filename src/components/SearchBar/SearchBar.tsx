import React, { useState, useCallback } from "react";
import "../../styles/SearchBar/searchBar.css";
import { CodiconSearch } from "../../assets/images/CodiconSearch";
import { debounce } from "../../helpers/debounce";
import { CoinResult } from "../../interfaces/SearchBarInterfaces/CoinResult";
import { ResultsList } from "./ResultsList/ResultsList";
import { fetchCoins } from "../../helpers/api";
import {
  filterCoins,
  getSortedCoins,
  getRandomFavorites,
} from "../../helpers/searchHelpers";
import { SearchInput } from "./SearchInput/SearchInput";
import { ControlButtons } from "./ControlButtons/ControlButtons";

export const SearchBar = () => {
  const [openCloseSearch, setOpenCloseSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<CoinResult[]>([]);
  const [allCoins, setAllCoins] = useState<CoinResult[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [displayMode, setDisplayMode] = useState<"all" | "favorites">("all");
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useCallback(
    debounce((searchParam: string) => {
      const results = filterCoins(allCoins, searchParam);
      setFilteredResults(results);
      if (results.length === 0) {
        setError("Coin not found");
      } else {
        setError(null);
      }
    }, 300),
    [allCoins]
  );

  const loadCoins = async () => {
    try {
      if (allCoins.length === 0) {
        const coins = await fetchCoins();
        setAllCoins(coins);
        setFilteredResults(getSortedCoins(coins));
      }
    } catch {
      setError("Server error, we are working on it");
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchParam = event.target.value.trim();
    setSearchValue(searchParam);

    if (searchParam === "") {
      setFilteredResults([]);
      setError(null);
    } else {
      debouncedSearch(searchParam);
    }
  };

  const handleResultClick = (name: string) => {
    setSearchValue(name);
    setFilteredResults([]);
  };

  const handleShowAllCoins = () => {
    setDisplayMode("all");
    setFilteredResults(getSortedCoins(allCoins));
    setError(null);
  };

  const handleShowFavorites = () => {
    setDisplayMode("favorites");
    const randomFavorites = getRandomFavorites(allCoins, 10);
    setFavorites(new Set(randomFavorites.map((coin) => coin.id)));
    setFilteredResults(randomFavorites);
    setError(null);
  };

  const searchModal = async () => {
    if (!openCloseSearch) {
      await loadCoins();
    }
    setOpenCloseSearch((prev) => !prev);
  };

  const clearSearchInput = () => {
    setSearchValue("");
    setDisplayMode("all");
    setFilteredResults(getSortedCoins(allCoins));
    setError(null);
  };

  return (
    <div className='search-btn-container'>
      <button
        className='search-open-btn'
        onClick={searchModal}
      >
        <CodiconSearch className='icon' />
        Search
      </button>
      <div
        className={`search-modal ${openCloseSearch ? "" : "display-none"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <SearchInput
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
          clearSearchInput={clearSearchInput}
        />
        <ControlButtons
          displayMode={displayMode}
          handleShowAllCoins={handleShowAllCoins}
          handleShowFavorites={handleShowFavorites}
        />
        {error && <div className='error-message'>{error}</div>}
        <ResultsList
          results={filteredResults}
          onResultClick={handleResultClick}
          favorites={favorites}
        />
      </div>
    </div>
  );
};

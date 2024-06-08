import React from "react";
import { CoinResult } from "../../../interfaces/SearchBarInterfaces/CoinResult";
import { CodiconStarFull } from "../../../assets/images/CodiconStarFull";
import "../../../styles/SearchBar/ResultsList/resultsList.css";
import { ResultsListProps } from "../../../interfaces/SearchBarInterfaces/ResultsListProps/ResultsListProps";

export const ResultsList: React.FC<ResultsListProps> = ({
  results,
  onResultClick,
  favorites,
}) => {
  return (
    <ul className='search-results'>
      {results.map((result: CoinResult) => (
        <li
          key={result.id}
          className='coin-item'
        >
          <button
            className='coin-item-btn'
            onClick={() => onResultClick(result.name)}
          >
            {favorites.has(result.id) && <CodiconStarFull />}
            {result.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

import React from "react";
import { CodiconStarFull } from "../../../assets/images/CodiconStarFull";
import "../../../styles/SearchBar/ControlButtons/controlButtons.css";
import { ControlButtonsProps } from "../../../interfaces/SearchBarInterfaces/ControlButtonsProps/ControlButtonsProps";

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  displayMode,
  handleShowAllCoins,
  handleShowFavorites,
}) => {
  return (
    <div className='search-control-container'>
      <button
        className={`search-control-btn ${
          displayMode === "favorites" ? "active" : ""
        }`}
        onClick={handleShowFavorites}
      >
        <CodiconStarFull className='icon' />
        Favorites
      </button>
      <button
        className={`search-control-btn ${
          displayMode === "all" ? "active" : ""
        }`}
        onClick={handleShowAllCoins}
      >
        All Coins
      </button>
    </div>
  );
};

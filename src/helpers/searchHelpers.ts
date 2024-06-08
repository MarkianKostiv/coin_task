import { CoinResult } from "../interfaces/SearchBarInterfaces/CoinResult";

export const filterCoins = (
  coins: CoinResult[],
  searchParam: string
): CoinResult[] => {
  return coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchParam.toLowerCase())
  );
};

export const getSortedCoins = (coins: CoinResult[]): CoinResult[] => {
  return coins.sort((a, b) => a.name.localeCompare(b.name));
};

export const getRandomFavorites = (
  coins: CoinResult[],
  count: number
): CoinResult[] => {
  return [...coins].sort(() => 0.5 - Math.random()).slice(0, count);
};

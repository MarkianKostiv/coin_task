import { CoinResult } from "../interfaces/SearchBarInterfaces/CoinResult";
// шукає монетку по назві
export const filterCoins = (
  coins: CoinResult[],
  searchParam: string
): CoinResult[] => {
  return coins.filter((coin) =>
    coin.name.toLowerCase().startsWith(searchParam.toLowerCase())
  );
};
// використовується для показу усіх монет
// в алфавітному порядку
export const getSortedCoins = (coins: CoinResult[]): CoinResult[] => {
  return coins.sort((a, b) => a.name.localeCompare(b.name));
};

// використовується для показу улюблинх монет
// повертає 10 рандомних
export const getRandomFavorites = (
  coins: CoinResult[],
  count: number
): CoinResult[] => {
  return [...coins].sort(() => 0.5 - Math.random()).slice(0, count);
};

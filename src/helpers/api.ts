import { CoinResult } from "../interfaces/SearchBarInterfaces/CoinResult";
// Запит до api
export const fetchCoins = async (): Promise<CoinResult[]> => {
  try {
    const response = await fetch(`https://api-eu.okotoki.com/coins`);
    const data = await response.json();
    return data.map((coin: string) => ({
      id: crypto.randomUUID(),
      name: coin,
    }));
  } catch (error) {
    console.error("API call error: ", error);
    return [];
  }
};

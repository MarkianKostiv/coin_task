import { CoinResult } from "../CoinResult";
export interface ResultsListProps {
  results: CoinResult[];
  onResultClick: (name: string) => void;
  favorites: Set<string>;
}

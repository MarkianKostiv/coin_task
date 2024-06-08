export interface SearchInputProps {
  searchValue: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearchInput: () => void;
}

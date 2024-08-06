import React, { useState } from "react";
import { Container, Input } from "./styles";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <Container>
      <Input
        placeholder="Search Pokémon..."
        value={query}
        placeholderTextColor="white"
        onChangeText={handleChange}
        selectionColor="white"
      />
    </Container>
  );
};

export default SearchInput;
import React, { useState } from "react";
import { testID } from "@tests/constants/testId";
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
        testID={testID.search_input}
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
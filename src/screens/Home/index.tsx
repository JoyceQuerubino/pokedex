import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import useFetchPokemons from "@hooks/useFetchPokemons";
import { normalizeString } from "@helpers/searchText";
import { HomeContent } from "./components/HomeContent";
import SearchInput from "@components/SearchInput";
import BtnCapture from "@components/BtnCapture";

import { Container, Title, HeaderContainer } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const { pokemons, loading, loadMore, error } = useFetchPokemons();

  const filtered = pokemons?.filter((pokemons) =>
    normalizeString(pokemons.name).includes(normalizeString(searchText))
  );

  const handleNavigation = (item: ResumePokemonFormatted) => {
    navigation.navigate("infoDetails", { pokemon: item });
  };

  const handleCaptureNavigation = () => {
    navigation.navigate("capturedPokemons");
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>Pokédex</Title>
        <BtnCapture onPress={handleCaptureNavigation} isCaptured />
      </HeaderContainer>

      <SearchInput onSearch={setSearchText} />

      <HomeContent
        filtered={filtered}
        isError={!!error}
        loadMore={loadMore}
        loading={loading}
        handleNavigation={handleNavigation}
      />
    </Container>
  );
}

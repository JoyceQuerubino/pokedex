import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import useFetchPokemons from "@hooks/useFetchPokemons";
import { normalizeString } from "@helpers/searchText";
import SearchInput from "@components/SearchInput";
import BtnCapture from "@components/BtnCapture";
import Card from "@components/Card";

import { Container, Title, ListCards, HeaderContainer } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const { pokemons, loading, loadMore } = useFetchPokemons();

  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      loadMore();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

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
      <ListCards
        data={filtered}
        keyExtractor={(pokemon) => String(`${pokemon?.info.id}`)}
        renderItem={({ item }: { item: ResumePokemonFormatted }) => {
          return (
            <Card
              name={item?.name}
              image={item?.details?.sprite}
              color={item?.info?.color}
              capture={item?.info?.capture_rate}
              onPress={() => handleNavigation(item)}
            />
          );
        }}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="white" /> : null
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        contentContainerStyle={{ gap: 16 }}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
      />
    </Container>
  );
}

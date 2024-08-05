import React from "react";
import { ActivityIndicator } from "react-native";
import useFetchPokemons from "@hooks/useFetchPokemons";
import Card from "@components/Card";
import { Container, Title, ListCards } from "./styles";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";

interface HomeProps {}

export default function Home({}: HomeProps) {
  const { pokemons, loadMore } = useFetchPokemons();

  return (
    <Container>
      <Title>Pokédex</Title>
      <ListCards
        data={pokemons}
        keyExtractor={(pokemon) => String(`${pokemon?.info.id}`)}
        renderItem={({ item }: { item: ResumePokemonFormatted }) => {
          return (
            <Card
              name={item?.name}
              image={item?.details?.sprite}
              color={item?.info?.color}
              capture={item?.info?.capture_rate}
            />
          );
        }}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<ActivityIndicator size="large" color="white" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        contentContainerStyle={{ gap: 16 }}
      />
    </Container>
  );
}

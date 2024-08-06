import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { useCapturedPokemons } from "@hooks/useCapturedPokemons";
import HeaderWithTitle from "@components/HeaderWithTitle";
import Card from "@components/Card";

import { Container, ListCards } from "./styles";

export default function CapturedPokemons() {
  const navigation = useNavigation();

  const { capturedPokemons, error, loading } = useCapturedPokemons();

  const handleNavigation = (item: ResumePokemonFormatted) => {
    navigation.navigate("infoDetails", { pokemon: item });
  };

  return (
    <Container>
      <HeaderWithTitle title="Captured" />
      <ListCards
        data={capturedPokemons}
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
        contentContainerStyle={{ gap: 16 }}
      />
    </Container>
  );
}

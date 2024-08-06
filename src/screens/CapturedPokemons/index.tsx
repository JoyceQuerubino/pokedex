import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { useCapturedPokemons } from "@hooks/useCapturedPokemons";
import { CapturedContent } from "@screens/CapturedContent";
import HeaderWithTitle from "@components/HeaderWithTitle";

import { Container } from "./styles";

export default function CapturedPokemons() {
  const navigation = useNavigation();

  const { capturedPokemons, error, loading } = useCapturedPokemons();

  const handleNavigation = (item: ResumePokemonFormatted) => {
    navigation.navigate("infoDetails", { pokemon: item });
  };

  return (
    <Container>
      <HeaderWithTitle title="Captured" />

      <CapturedContent
        capturedPokemons={capturedPokemons}
        isError={!!error}
        loading={loading}
        handleNavigation={handleNavigation}
      />
    </Container>
  );
}

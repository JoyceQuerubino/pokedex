import React from "react";
import { useRoute } from "@react-navigation/native";

import Header from "@components/Header";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { Container, Content, ImageContainer, ImageItem, Floor, Title } from "./styles";
import { capitalizeFirstLetter } from "@helpers/capitalizedFristLetter";

interface InfoDetailsProps {}

export default function InfoDetails({}: InfoDetailsProps) {
  const { params } = useRoute();
  const { pokemon } = params as { pokemon: ResumePokemonFormatted };

  const formattedName = capitalizeFirstLetter(pokemon.name);

  return (
    <Container>
      <Header onPress={() => console.log("AAA")} />
      <Content color={pokemon.info.color}>

        <Title>{formattedName}</Title>

        <ImageContainer>
          <ImageItem resizeMode="contain" source={{ uri: pokemon.details.sprite }} />
          <Floor />
        </ImageContainer>
      </Content>
      {/* <Title>Pokédex</Title> */}
    </Container>
  );
}

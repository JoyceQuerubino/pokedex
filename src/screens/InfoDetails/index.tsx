import React from "react";
import { useRoute } from "@react-navigation/native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { capitalizeFirstLetter } from "@helpers/capitalizedFristLetter";
import Header from "@components/Header";
import Tag from "@components/Tag";
import {
  Container,
  Content,
  ImageContainer,
  ImageItem,
  Floor,
  Title,
  TagsContainers,
  DescriptionContainer,
  SubTitle,
  InfoContainer,
  InfoTitle,
  InfoText,
  InforListTexts,
  DescriptionContent,
} from "./styles";

interface InfoDetailsProps {}

export default function InfoDetails({}: InfoDetailsProps) {
  const { params } = useRoute();
  const { pokemon } = params as { pokemon: ResumePokemonFormatted };

  console.log("AQUI 12", pokemon);

  const formattedName = capitalizeFirstLetter(pokemon.name);
  const pokeTypes = pokemon.details.types;

  const handleCapture = () => {
    console.log("AAA");
  };

  return (
    <Container>
      <Header onPress={handleCapture} />
      <Content color={pokemon.info.color}>
        <Title>{formattedName}</Title>
        <TagsContainers>
          {pokeTypes.length > 0 &&
            pokeTypes.map((type) => {
              return <Tag key={type.slot} text={type.type.name} />;
            })}
        </TagsContainers>

        <ImageContainer>
          <ImageItem
            resizeMode="contain"
            source={{ uri: pokemon.details.sprite }}
          />
          <Floor />
        </ImageContainer>

        <DescriptionContainer>
          <DescriptionContent>
            <SubTitle>About</SubTitle>

            <InfoContainer>
              <InfoTitle>Capture Ratio:</InfoTitle>
              <InfoText>{pokemon.info.capture_rate}</InfoText>
            </InfoContainer>

            <InfoContainer>
              <InfoTitle>Species:</InfoTitle>
              <InfoText>{pokemon.details.species.name}</InfoText>
            </InfoContainer>

            <InforListTexts>
              <InfoTitle>Eggs:</InfoTitle>

              {pokemon.info.egg_groups.map((eggs) => (
                <InfoText key={eggs.name}>{`- ${eggs.name}`}</InfoText>
              ))}
            </InforListTexts>

            <InforListTexts>
              <InfoTitle>Abilities:</InfoTitle>

              {pokemon.details.abilities.map((ability) => (
                <InfoText
                  key={ability.ability.name}
                >{`- ${ability.ability.name}`}</InfoText>
              ))}
            </InforListTexts>
          </DescriptionContent>
        </DescriptionContainer>
      </Content>
    </Container>
  );
}

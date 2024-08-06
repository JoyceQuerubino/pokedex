import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { checkIfCaptured, handleCapture } from "@helpers/pokemonCaptured";
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

export default function InfoDetails() {
  const { params } = useRoute();
  const { pokemon } = params as { pokemon: ResumePokemonFormatted };

  const [isCaptured, setIsCaptured] = useState(false);

  const formattedName = capitalizeFirstLetter(pokemon.name);
  const pokeTypes = pokemon.details.types;

  useEffect(() => {
    const checkPokemonCaptured = async () => {
      const isPokemonCaptured = await checkIfCaptured(pokemon);
      setIsCaptured(isPokemonCaptured);
    };

    checkPokemonCaptured();
  }, [pokemon]);

  const handlePokemonCapture = async () => {
    await handleCapture(pokemon, isCaptured);
    setIsCaptured(!isCaptured);
  };

  
  return (
    <Container>
      <Header isCaptured={isCaptured} onPress={handlePokemonCapture} />
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

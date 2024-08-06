import React from "react";
import { capitalizeFirstLetter } from "@helpers/capitalizedFristLetter";
import Tag from "@components/Tag";
import {
  Container,
  Title,
  TextsContainer,
  ImageContainer,
  ImageItem,
} from "./styles";

interface CardProps {
  name: string;
  image: string;
  color: string;
  capture: number;
  onPress: () => void;
}

export default function Card({ name, image, color, capture, onPress }: CardProps) {
  const formattedName = capitalizeFirstLetter(name);

  return (
    <Container color={color} onPress={onPress}>
      <TextsContainer>
        <Title>{formattedName}</Title>
        <Tag text={`Capture Rate: ${capture}`}/>
      </TextsContainer>

      <ImageContainer>
        <ImageItem resizeMode="contain" source={{ uri: image }} />
      </ImageContainer>
    </Container>
  );
}

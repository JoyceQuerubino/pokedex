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
}

export default function Card({ name, image, color, capture }: CardProps) {
  const formattedName = capitalizeFirstLetter(name);

  return (
    <Container color={color}>
      <TextsContainer>
        <Title>{formattedName}</Title>
        <Tag number={capture}/>
      </TextsContainer>

      <ImageContainer>
        <ImageItem resizeMode="contain" source={{ uri: image }} />
      </ImageContainer>
    </Container>
  );
}

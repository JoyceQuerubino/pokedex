import React from "react";
import {
  Container,
  Title,
} from "./styles";
import { capitalizeFirstLetter } from "@helpers/capitalizedFristLetter";


interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {

  const formattedText = capitalizeFirstLetter(text);

  return (
    <Container>
        <Title>{formattedText}</Title>
    </Container>
  );
}

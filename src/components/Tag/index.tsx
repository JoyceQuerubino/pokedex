import React from "react";
import {
  Container,
  Title,
} from "./styles";


interface TagProps {
  number: number;
}

export default function Tag({ number }: TagProps) {

  return (
    <Container>
        <Title>{`Capture Rate: ${number}`}</Title>
    </Container>
  );
}

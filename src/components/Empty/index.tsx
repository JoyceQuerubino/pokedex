import React from "react";
import { Container, Title, ImagePNG } from "./styles";

interface EmptyProps {
  title: string;
}

export default function Empty({ title }: EmptyProps) {
  return (
    <Container>
      <ImagePNG />
      <Title>{title}</Title>
    </Container>
  );
}

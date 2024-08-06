import React from "react";
import {
  Container,
  ImagePNG,
  ImageEmptyPNG,
} from "./styles";

interface BtnCaptureProps {
  onPress: () => void;
  isCaptured: boolean;
}

export default function BtnCapture({ onPress, isCaptured }: BtnCaptureProps) {

  return (
      <Container onPress={onPress}>
        {isCaptured ? <ImagePNG /> : <ImageEmptyPNG />}
      </Container>
  );
}

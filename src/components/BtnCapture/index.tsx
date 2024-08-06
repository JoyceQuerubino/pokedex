import React from "react";
import { testID } from "@tests/constants/testId";
import { Container, ImagePNG, ImageEmptyPNG } from "./styles";

interface BtnCaptureProps {
  onPress: () => void;
  isCaptured: boolean;
}

export default function BtnCapture({ onPress, isCaptured }: BtnCaptureProps) {
  return (
    <Container testID={testID.btn_capture} onPress={onPress}>
      {isCaptured ? (
        <ImagePNG testID={testID.captured_image} />
      ) : (
        <ImageEmptyPNG testID={testID.no_captured_image} />
      )}
    </Container>
  );
}

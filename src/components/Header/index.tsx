import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ImageContainer,
  ImagePNG,
  ImageEmptyPNG,
  IconButton,
  Icon,
} from "./styles";

interface HeaderProps {
  onPress: () => void;
}

export default function Header({ onPress }: HeaderProps) {
  const isFavorite = false;

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <IconButton onPress={handlePress}>
        <Icon name="arrowleft"/>
      </IconButton>

      <ImageContainer onPress={onPress}>
        {isFavorite ? <ImagePNG /> : <ImageEmptyPNG />}
      </ImageContainer>
    </Container>
  );
}

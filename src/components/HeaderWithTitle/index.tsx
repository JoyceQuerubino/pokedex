import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  IconButton,
  Icon,
  Title,
} from "./styles";


interface HeaderProps {
  title: string; 
}

export default function HeaderWithTitle({ title }: HeaderProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <IconButton onPress={handlePress}>
        <Icon name="arrowleft"/>
      </IconButton>
      
      <Title>{title}</Title>
    </Container>
  );
}

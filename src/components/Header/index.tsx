import React from "react";
import { useNavigation } from "@react-navigation/native";
import BtnCapture from "@components/BtnCapture";
import {
  Container,
  IconButton,
  Icon,
} from "./styles";


interface HeaderProps {
  onPress: () => void;
  isCaptured: boolean;
}

export default function Header({ onPress, isCaptured }: HeaderProps) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <IconButton onPress={handlePress}>
        <Icon name="arrowleft"/>
      </IconButton>

     <BtnCapture onPress={onPress} isCaptured={isCaptured} />
    </Container>
  );
}

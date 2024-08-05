import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import { getColorHex } from "@helpers/getColors";

const WIDTH = Dimensions.get("window").width;
const IMAGE_HEIGHT = WIDTH * 0.38;


type CardTypes = {
  color?: string;
};

export const Container = styled.SafeAreaView<CardTypes>`
  width: 100%;
  margin-bottom: 16px;
  background-color: ${({ color }) => color && getColorHex(color)};
  border-radius: 8px;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;

export const TextsContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 200%;
`;

export const ImageItem = styled.Image`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
`;

import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import { getColorHex } from "@helpers/getColors";
import { SafeAreaView } from "react-native-safe-area-context";

const WIDTH = Dimensions.get("window").width;
const IMAGE_HEIGHT = WIDTH * 0.48;

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: red;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}

  position: absolute;
  top: 16%;
`;

export const Content = styled.View`
  margin-top: 16px;
  width: 100%;
  height: 42%;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color && getColorHex(color)};
  border-bottom-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const ImageContainer = styled.View`
 align-items: center;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 36px;
  border-bottom-left-radius: 36px;
  justify-content: flex-end;
`;

export const Floor = styled.View`
  width: 100%;
  height: 30%;
  background-color: rgba(255, 255, 255, 0.4);
  border-bottom-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const ImageItem = styled.Image`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  position: absolute;
  top: 30%;
  z-index: 999;
`;

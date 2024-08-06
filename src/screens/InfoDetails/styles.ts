import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import { getColorHex } from "@helpers/getColors";
import { SafeAreaView } from "react-native-safe-area-context";

const WIDTH = Dimensions.get("window").width;
const IMAGE_HEIGHT = WIDTH * 0.48;

export type ContentColor = {
  color?: string;
};

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
  left: 24px;
`;

export const Content = styled.View<ContentColor>`
  margin-top: 16px;
  width: 100%;
  height: 38%;
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
  left: 24%;
  z-index: 999;
`;

export const TagsContainers = styled.View`
  position: absolute;
  flex-direction: row;
  top: 32%;
  left: 24px;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  padding: 12px;
`;

export const DescriptionContent = styled.View`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.LIGHT};
  `}
  margin-bottom: 16px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;


export const InfoTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.LIGHT};
  `}
`;


export const InfoText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.LIGHT};
  `}
  margin-left: 8px;
`;

export const InforListTexts = styled.View`
  margin-bottom: 16px;
`;


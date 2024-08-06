import { AntDesign } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  padding-top: 24px;
  justify-content: space-between;
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(AntDesign)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme }) => theme.COLORS.LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;

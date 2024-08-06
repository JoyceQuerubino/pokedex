import { AntDesign } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
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
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.LIGHT};
  `}
`;

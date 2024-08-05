import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  padding: 4px;
  margin-top: 4px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
  `}
`;
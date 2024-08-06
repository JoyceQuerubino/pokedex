import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.LIGHT};
  `}

  margin-bottom: 16px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

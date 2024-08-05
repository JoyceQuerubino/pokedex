import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { FlatList, FlatListProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0px 24px;
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

export const ListCards = styled(
  FlatList as new (
    props: FlatListProps<ResumePokemonFormatted>
  ) => FlatList<ResumePokemonFormatted>
)`
  width: 100%;
  padding: 0 24px;
`;

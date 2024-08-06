import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { FlatList, FlatListProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;


export const ListCards = styled(
  FlatList as new (
    props: FlatListProps<ResumePokemonFormatted>
  ) => FlatList<ResumePokemonFormatted>
)`
  flex: 1;
  width: 100%;
`;

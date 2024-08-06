import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

export const ListCards = styled(
  FlatList as new (
    props: FlatListProps<ResumePokemonFormatted>
  ) => FlatList<ResumePokemonFormatted>
)`
  flex: 1;
  width: 100%;
`;

import React from "react";
import { ActivityIndicator } from "react-native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import { ListCards } from "@screens/Home/components/ListCardsComponent/styles";
import Empty from "@components/Empty";
import Card from "@components/Card";

interface ContentProps {
  isError: boolean;
  capturedPokemons?: ResumePokemonFormatted[];
  loading: boolean;
  handleNavigation: (item: ResumePokemonFormatted) => void;
}

export const CapturedContent: React.FC<ContentProps> = ({
  isError,
  capturedPokemons,
  loading,
  handleNavigation
}) => {
  if (loading && !capturedPokemons) return <ActivityIndicator size="large" color="white" />;

  if (isError) return <Empty title="Sorry! We had a problem" />;

  return (
    <ListCards
    data={capturedPokemons}
    keyExtractor={(pokemon) => String(`${pokemon?.info.id}`)}
    renderItem={({ item }: { item: ResumePokemonFormatted }) => {
      return (
        <Card
          name={item?.name}
          image={item?.details?.sprite}
          color={item?.info?.color}
          capture={item?.info?.capture_rate}
          onPress={() => handleNavigation(item)}
        />
      );
    }}
    numColumns={1}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ gap: 16 }}
  />
  );
};

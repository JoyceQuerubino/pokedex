import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import Card from "@components/Card";

import { ListCards } from "./styles";

interface ListCardsComponentProps {
  loadMore: () => void;
  filtered?: ResumePokemonFormatted[];
  loading: boolean;
  handleNavigation: (item: ResumePokemonFormatted) => void;
}

export default function ListCardsComponent({
  loadMore,
  filtered,
  loading,
  handleNavigation,
}: ListCardsComponentProps) {
  
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      loadMore();
      setOnEndReachedCalledDuringMomentum(true);
    }
  };

  return (
    <ListCards
      data={filtered}
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
      ListFooterComponent={
        loading ? <ActivityIndicator size="large" color="white" /> : null
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      contentContainerStyle={{ gap: 16 }}
      onMomentumScrollBegin={() => {
        setOnEndReachedCalledDuringMomentum(false);
      }}
    />
  );
}

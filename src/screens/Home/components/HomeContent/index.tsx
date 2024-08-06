import React from "react";
import { ActivityIndicator } from "react-native";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import ListCardsComponent from "../ListCardsComponent";
import Empty from "@components/Empty";

interface ContentProps {
  isError: boolean;
  filtered?: ResumePokemonFormatted[];
  loadMore: () => void;
  loading: boolean;
  handleNavigation: (item: ResumePokemonFormatted) => void;
}

export const HomeContent: React.FC<ContentProps> = ({
  isError,
  filtered,
  loadMore,
  loading,
  handleNavigation
}) => {
  if (loading && !filtered) return <ActivityIndicator size="large" color="white" />;

  if (isError) return <Empty title="Sorry! We had a problem" />;

  return (
    <ListCardsComponent
      loadMore={loadMore}
      filtered={filtered}
      loading={loading}
      handleNavigation={handleNavigation}
    />
  );
};

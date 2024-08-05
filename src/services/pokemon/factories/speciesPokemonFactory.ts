import {
  PokemonSpeciesResponse,
  TransformedPokemonSpeciesResponse,
} from "@services/pokemon/types.pokemon";

export const transformPokemonSpeciesResponse = (
  data: PokemonSpeciesResponse
): TransformedPokemonSpeciesResponse => {
  return {
    id: data.id,
    color: data.color.name,
    capture_rate: data.capture_rate,
    egg_groups: data.egg_groups.map((item) => ({
      name: item.name,
      url: item.url,
    })),
  };
};

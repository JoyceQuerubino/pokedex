import { PokemonListResponse, SimplePokemonResponse } from '@services/pokemon/types.pokemon';

export const transformPokemonListResponse = (data: any): PokemonListResponse => {
  return {
    totalCount: data.count,
    nextPage: data.next,
    previousPage: data.previous,
    results: data.results.map((pokemon: SimplePokemonResponse) => ({
      name: pokemon.name,
      url: pokemon.url
    }))
  };
};

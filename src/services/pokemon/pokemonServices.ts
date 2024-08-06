import { api } from '@services/api';
import { SCOPES } from '@services/scopes';
import { PaginationRequest, PokemonListResponse } from '@services/pokemon/types.pokemon';
import { transformPokemonListResponse } from '@services/pokemon/factories/listPokemonsFactory';
import { transformPokemonSpeciesResponse } from '@services/pokemon/factories/speciesPokemonFactory';
import { transformPokemonDetailsResponse } from '@services/pokemon/factories/detailsPokemonsFactory';

const LIMIT = 25;
const OFFSET = 0;

export const fetchPokemonListService = async ({
  url,
}: PaginationRequest): Promise<PokemonListResponse> => {
  try {
    
    if(url){
      const response = await api.get(url);
      return transformPokemonListResponse(response.data);
    }

    const response = await api.get(`${SCOPES.POKEMON}`, {
      params: { limit: LIMIT, offset: OFFSET },
    });

    return transformPokemonListResponse(response.data);
  } catch (error) {
    throw new Error('Error fetching Pokemons');
  }
};


export const fetchPokemonDetails = async (url: string) => {
  try {
    const response = await api.get(url);
    return transformPokemonDetailsResponse(response.data);
  } catch (error) {
    throw new Error('Error fetching Pokemon details');
  }
};

export const fetchPokemonSpecies = async (url: string) => {
  try {
    const response = await api.get(url);
    return transformPokemonSpeciesResponse(response.data);
  } catch (error) {
    throw new Error('Error fetching Pokemon color');
  }
};
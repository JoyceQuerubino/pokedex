export interface PaginationRequest {
  limit?: number;
  offset?: number;
  url: string | null;
}

export interface SimplePokemonResponse {
  name: string; 
  url: string
}

export interface PokemonListResponse {
  totalCount: number;
  nextPage: string | null;
  previousPage: string | null;
  results: SimplePokemonResponse[];
}


export interface Pokemon {
  name: string;
  url: string;
}

export type PokemonListType = PokemonListResponse;


export interface PokemonDetailsResponse {
  abilities: Ability[];
  species: PokemonSpecies;
  sprite: string;
  types: PokemonType[];
}


export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSpeciesResponse {
  id: number;
  color: {
    name: string;
  };
  capture_rate: number;
  egg_groups: {
    name: string;
    url: string;
  }[];
}
export interface ResumePokemonFormatted {
  name: string;
  url: string;
  details: PokemonDetailsResponse;
  info: TransformedPokemonSpeciesResponse; 
}

export interface EggGroup {
  name: string;
  url: string;
}

export interface TransformedPokemonSpeciesResponse {
  id: number;
  color: string;
  capture_rate: number;
  egg_groups: EggGroup[];
}
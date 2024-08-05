// pokemon.service.ts
import { Ability, PokemonDetailsResponse, PokemonType } from '@services/pokemon/types.pokemon';

export const transformPokemonDetailsResponse = (data: any): PokemonDetailsResponse => {
    return {
      abilities: data.abilities.map((ability: any): Ability => ({
        ability: {
          name: ability.ability.name,
          url: ability.ability.url
        },
        is_hidden: ability.is_hidden,
        slot: ability.slot
      })),
      sprite: data.sprites.other['official-artwork']?.front_default || '',
      species: {
        name: data.species.name,
        url: data.species.url
      },
      types: data.types.map((type: any): PokemonType => ({
        slot: type.slot,
        type: {
          name: type.type.name,
          url: type.type.url
        }
      }))
    };
  };
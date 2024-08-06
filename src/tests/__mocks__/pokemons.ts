import { ResumePokemonFormatted } from '@services/pokemon/types.pokemon';

export const mockResumePokemonFormatted: ResumePokemonFormatted = {
  name: 'Pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/25/',
  details: {
    abilities: [
      {
        ability: {
          name: 'static',
          url: 'https://pokeapi.co/api/v2/ability/9/'
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: 'lightning-rod',
          url: 'https://pokeapi.co/api/v2/ability/31/'
        },
        is_hidden: true,
        slot: 3
      }
    ],
    species: {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/25/'
    },
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    types: [
      {
        slot: 1,
        type: {
          name: 'electric',
          url: 'https://pokeapi.co/api/v2/type/13/'
        }
      }
    ]
  },
  info: {
    id: 25,
    color: 'yellow',
    capture_rate: 190,
    egg_groups: [
      {
        name: 'field',
        url: 'https://pokeapi.co/api/v2/egg-group/1/'
      }
    ]
  }
};

export const mockResumePokemonsFormatted: ResumePokemonFormatted[] = [
  {
    name: 'Pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
    details: {
      abilities: [
        {
          ability: {
            name: 'static',
            url: 'https://pokeapi.co/api/v2/ability/9/'
          },
          is_hidden: false,
          slot: 1
        },
        {
          ability: {
            name: 'lightning-rod',
            url: 'https://pokeapi.co/api/v2/ability/31/'
          },
          is_hidden: true,
          slot: 3
        }
      ],
      species: {
        name: 'pikachu',
        url: 'https://pokeapi.co/api/v2/pokemon-species/25/'
      },
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      types: [
        {
          slot: 1,
          type: {
            name: 'electric',
            url: 'https://pokeapi.co/api/v2/type/13/'
          }
        }
      ]
    },
    info: {
      id: 25,
      color: 'yellow',
      capture_rate: 190,
      egg_groups: [
        {
          name: 'field',
          url: 'https://pokeapi.co/api/v2/egg-group/1/'
        }
      ]
    }
  },
  {
    name: 'Bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    details: {
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/'
          },
          is_hidden: false,
          slot: 1
        },
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/'
          },
          is_hidden: true,
          slot: 2
        }
      ],
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
      },
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/'
          }
        },
        {
          slot: 2,
          type: {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/'
          }
        }
      ]
    },
    info: {
      id: 1,
      color: 'green',
      capture_rate: 45,
      egg_groups: [
        {
          name: 'monster',
          url: 'https://pokeapi.co/api/v2/egg-group/1/'
        },
        {
          name: 'plant',
          url: 'https://pokeapi.co/api/v2/egg-group/12/'
        }
      ]
    }
  },
  {
    name: 'Charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    details: {
      abilities: [
        {
          ability: {
            name: 'blaze',
            url: 'https://pokeapi.co/api/v2/ability/66/'
          },
          is_hidden: false,
          slot: 1
        },
        {
          ability: {
            name: 'solar-power',
            url: 'https://pokeapi.co/api/v2/ability/94/'
          },
          is_hidden: true,
          slot: 2
        }
      ],
      species: {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon-species/4/'
      },
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      types: [
        {
          slot: 1,
          type: {
            name: 'fire',
            url: 'https://pokeapi.co/api/v2/type/10/'
          }
        }
      ]
    },
    info: {
      id: 4,
      color: 'red',
      capture_rate: 45,
      egg_groups: [
        {
          name: 'monster',
          url: 'https://pokeapi.co/api/v2/egg-group/1/'
        },
        {
          name: 'dragon',
          url: 'https://pokeapi.co/api/v2/egg-group/15/'
        }
      ]
    }
  },
  {
    name: 'Squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/',
    details: {
      abilities: [
        {
          ability: {
            name: 'torrent',
            url: 'https://pokeapi.co/api/v2/ability/67/'
          },
          is_hidden: false,
          slot: 1
        },
        {
          ability: {
            name: 'rain-dish',
            url: 'https://pokeapi.co/api/v2/ability/109/'
          },
          is_hidden: true,
          slot: 2
        }
      ],
      species: {
        name: 'squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon-species/7/'
      },
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      types: [
        {
          slot: 1,
          type: {
            name: 'water',
            url: 'https://pokeapi.co/api/v2/type/11/'
          }
        }
      ]
    },
    info: {
      id: 7,
      color: 'blue',
      capture_rate: 45,
      egg_groups: [
        {
          name: 'monster',
          url: 'https://pokeapi.co/api/v2/egg-group/1/'
        },
        {
          name: 'water-1',
          url: 'https://pokeapi.co/api/v2/egg-group/6/'
        }
      ]
    }
  }
];
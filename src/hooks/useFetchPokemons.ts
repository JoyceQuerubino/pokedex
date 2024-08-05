import { useState, useEffect, useRef } from "react";
import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";
import {
  fetchPokemonSpecies,
  fetchPokemonDetails,
  fetchPokemonListService,
} from "@services/pokemon/pokemonServices";

const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState<ResumePokemonFormatted[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const nextUrlRef = useRef<string | null>(null);

  const loadPokemons = async () => {
    setLoading(true);
    try {
      const data = await fetchPokemonListService({ url: nextUrlRef.current });

      const detailedPokemons: ResumePokemonFormatted[] = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const details = await fetchPokemonDetails(pokemon.url);
          const info = await fetchPokemonSpecies(details.species.url);

          return {
            ...pokemon,
            details,
            info,
          };
        })
      );

      setPokemons((prevPokemons) => [...prevPokemons, ...detailedPokemons]);
      nextUrlRef.current = data.nextPage;
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (nextUrlRef.current) {
      loadPokemons();
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { pokemons, loading, error, loadMore };
};

export default useFetchPokemons;

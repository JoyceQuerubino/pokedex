import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ResumePokemonFormatted } from '@services/pokemon/types.pokemon';
import { storageCapturedGet } from '@storage/storageCaptured';

export function useCapturedPokemons() {
  const [capturedPokemons, setCapturedPokemons] = useState<ResumePokemonFormatted[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCapturedPokemons = useCallback(async () => {
    try {
      setLoading(true);
      const pokemons = await storageCapturedGet();
      setCapturedPokemons(pokemons);
    } catch (err) {
      setError('Failed to load captured pokemons');
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchCapturedPokemons();
    }, [fetchCapturedPokemons])
  );

  return {
    capturedPokemons,
    loading,
    error
  };
}

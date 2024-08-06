import { ResumePokemonFormatted } from '@services/pokemon/types.pokemon';
import { storageCapturedGet, storageCapturedSave } from '@storage/storageCaptured';

export async function checkIfCaptured(pokemon: ResumePokemonFormatted): Promise<boolean> {
  try {
    const capturedPokemons = await storageCapturedGet();
    return capturedPokemons.some(p => p.name === pokemon.name);
  } catch (error) {
    console.error("Error checking captured Pokémon:", error);
    return false;
  }
}


export async function handleCapture(pokemon: ResumePokemonFormatted, isCaptured: boolean): Promise<void> {
  try {
    const capturedPokemons = await storageCapturedGet();
    if (isCaptured) {
      const updatedPokemons = capturedPokemons.filter(p => p.name !== pokemon.name);
      await storageCapturedSave(updatedPokemons);
    } else {
      const updatedPokemons = [...capturedPokemons, pokemon];
      await storageCapturedSave(updatedPokemons);
    }
  } catch (error) {
    console.error("Error capturing or removing Pokémon:", error);
  }
}
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ResumePokemonFormatted } from '@services/pokemon/types.pokemon';
import { CAPTURED_POKEMONS } from '@storage/storageConfig';

export async function storageCapturedSave(prokemons: ResumePokemonFormatted[]) {
  await AsyncStorage.setItem(CAPTURED_POKEMONS, JSON.stringify(prokemons));
}

export async function storageCapturedGet(): Promise<ResumePokemonFormatted[]> {
    const storage = await AsyncStorage.getItem(CAPTURED_POKEMONS);
    const pokemons: ResumePokemonFormatted[] = storage ? JSON.parse(storage) : [];
    return pokemons;
  }

export async function storageCapturedRemove() {
  await AsyncStorage.removeItem(CAPTURED_POKEMONS);
}
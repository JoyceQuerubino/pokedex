
import { checkIfCaptured, handleCapture } from '@helpers/pokemonCaptured';
import { storageCapturedGet, storageCapturedSave } from '@storage/storageCaptured';
import { mockResumePokemonFormatted, mockResumePokemonsFormatted } from '../__mocks__/pokemons';

jest.mock('@storage/storageCaptured', () => ({
  storageCapturedGet: jest.fn(),
  storageCapturedSave: jest.fn(),
}));

describe('Pokemon Capture Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('checkIfCaptured', () => {
    it('should return true if the Pokémon is captured', async () => {
      storageCapturedGet.mockResolvedValue(mockResumePokemonsFormatted);
      const result = await checkIfCaptured(mockResumePokemonFormatted);
      expect(result).toBe(true);
    });

    it('should return false if the Pokémon is not captured', async () => {
      storageCapturedGet.mockResolvedValue([]);
      const result = await checkIfCaptured(mockResumePokemonFormatted);
      expect(result).toBe(false);
    });

    it('should add the Pokémon to the captured list if isCaptured is false', async () => {
        storageCapturedGet.mockResolvedValue([]);
        await handleCapture(mockResumePokemonFormatted, false);
        expect(storageCapturedSave).toHaveBeenCalledWith([mockResumePokemonFormatted]);
      });

  });
});

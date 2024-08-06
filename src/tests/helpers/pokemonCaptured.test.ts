import { checkIfCaptured, handleCapture } from "@helpers/pokemonCaptured";
import {
  storageCapturedGet,
  storageCapturedSave,
} from "@storage/storageCaptured";
import {
  mockResumePokemonFormatted,
  mockResumePokemonsFormatted,
} from "../__mocks__/pokemons";

jest.mock("@storage/storageCaptured", () => ({
  storageCapturedGet: jest.fn(),
  storageCapturedSave: jest.fn(),
}));

describe("Pokemon Capture Functions", () => {
  let originalConsoleError: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
  };

  beforeEach(() => {
    jest.clearAllMocks();
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  describe("checkIfCaptured", () => {
    it("should return true if the Pokémon is captured", async () => {
      storageCapturedGet.mockResolvedValue(mockResumePokemonsFormatted);
      const result = await checkIfCaptured(mockResumePokemonFormatted);
      expect(result).toBe(true);
    });

    it("should return false if the Pokémon is not captured", async () => {
      storageCapturedGet.mockResolvedValue([]);
      const result = await checkIfCaptured(mockResumePokemonFormatted);
      expect(result).toBe(false);
    });
  });

  describe("handleCapture", () => {
    it("should add the Pokémon to the captured list if isCaptured is false", async () => {
      storageCapturedGet.mockResolvedValue([]);
      await handleCapture(mockResumePokemonFormatted, false);
      expect(storageCapturedSave).toHaveBeenCalledWith([
        mockResumePokemonFormatted,
      ]);
    });

    it("should remove the Pokémon from the captured list if isCaptured is true", async () => {
      const existingPokemons = [
        ...mockResumePokemonsFormatted,
        mockResumePokemonFormatted,
      ];
      storageCapturedGet.mockResolvedValue(existingPokemons);
      await handleCapture(mockResumePokemonFormatted, true);
      const updatedPokemons = existingPokemons.filter(
        (p) => p.name !== mockResumePokemonFormatted.name
      );
      expect(storageCapturedSave).toHaveBeenCalledWith(updatedPokemons);
    });

    it("should handle errors in handleCapture", async () => {
      storageCapturedGet.mockRejectedValue(new Error("Some error"));
      
      await expect(
        handleCapture(mockResumePokemonFormatted, false)
      ).resolves.not.toThrow();
      expect(storageCapturedSave).not.toHaveBeenCalled();
    });

    it("should handle errors in handleCapture with storageCapturedSave failing", async () => {
      storageCapturedGet.mockResolvedValue([]);
      storageCapturedSave.mockRejectedValue(new Error("Some error"));

      await expect(
        handleCapture(mockResumePokemonFormatted, false)
      ).resolves.not.toThrow();
    });
  });
});

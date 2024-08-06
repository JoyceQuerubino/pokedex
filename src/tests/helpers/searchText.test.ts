import { normalizeString } from "@helpers/searchText";

describe('normalizeString', () => {
  it('should return an empty string if input is an empty string', () => {
    const result = normalizeString('');
    expect(result).toBe('');
  });

  it('should return an empty string if input is null', () => {
    const result = normalizeString(null as unknown as string);
    expect(result).toBe('');
  });

  it('should normalize and remove accents from Pokémon names', () => {
    const result1 = normalizeString('Pikachu');
    const result2 = normalizeString('Raichú');
    expect(result1).toBe('pikachu');
    expect(result2).toBe('raichu');
  });

  it('should convert Pokémon names to lowercase', () => {
    const result = normalizeString('Gengar');
    expect(result).toBe('gengar');
  });

  it('should handle Pokémon names with multiple accents correctly', () => {
    const result = normalizeString('Lugia');
    expect(result).toBe('lugia');
  });

  it('should handle already normalized Pokémon names correctly', () => {
    const result = normalizeString('Charizard');
    expect(result).toBe('charizard');
  });
});

import { capitalizeFirstLetter } from "@helpers/capitalizedFristLetter";

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string and make the rest lowercase', () => {
    const result = capitalizeFirstLetter('hello');
    expect(result).toBe('Hello');
  });

  it('should return an empty string if the input is empty', () => {
    const result = capitalizeFirstLetter('');
    expect(result).toBe('');
  });

  it('should handle strings that are already capitalized', () => {
    const result = capitalizeFirstLetter('Hello');
    expect(result).toBe('Hello');
  });

  it('should handle strings with mixed case', () => {
    const result = capitalizeFirstLetter('hELLo');
    expect(result).toBe('Hello');
  });

  it('should handle single character strings', () => {
    const result = capitalizeFirstLetter('a');
    expect(result).toBe('A');
  });

  it('should handle strings with leading and trailing spaces', () => {
    const result = capitalizeFirstLetter('  space ');
    expect(result).toBe('  space ');
  });
});

import { getColorHex } from "@helpers/getColors";

describe('getColorHex', () => {
  it('should return the correct hex value for blue', () => {
    const result = getColorHex('blue');
    expect(result).toBe('#76bfff');
  });

  it('should be case insensitive', () => {
    const result1 = getColorHex('BLACK');
    const result2 = getColorHex('BlUE');
    expect(result1).toBe('#1a1a1a');
    expect(result2).toBe('#76bfff');
  });

  it('should return the correct hex value for brown', () => {
    const result = getColorHex('brown');
    expect(result).toBe('#bb9561');
  });

  it('should return the correct hex value for gray', () => {
    const result = getColorHex('gray');
    expect(result).toBe('#A9A9A9');
  });

  it('should return the correct hex value for green', () => {
    const result = getColorHex('green');
    expect(result).toBe('#47d1b2');
  });

  it('should return the correct hex value for pink', () => {
    const result = getColorHex('pink');
    expect(result).toBe('#FFC0CB');
  });

  it('should return the correct hex value for purple', () => {
    const result = getColorHex('purple');
    expect(result).toBe('#9e81a9');
  });

  it('should return the correct hex value for red', () => {
    const result = getColorHex('red');
    expect(result).toBe('#fb6c6c');
  });

  it('should return the correct hex value for white', () => {
    const result = getColorHex('white');
    expect(result).toBe('#e5ebf3');
  });

  it('should return the correct hex value for yellow', () => {
    const result = getColorHex('yellow');
    expect(result).toBe('#fed86e');
  });

  it('should return the default hex value for an unknown color', () => {
    const result = getColorHex('unknownColor');
    expect(result).toBe('#e5ebf3');
  });
});

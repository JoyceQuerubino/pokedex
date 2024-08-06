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
});

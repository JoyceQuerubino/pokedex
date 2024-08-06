import React from "react";
import { screen, fireEvent } from "@testing-library/react-native";
import { testID } from "@tests/constants/testId";
import { renderWithTheme } from "@tests/config/renderWithTheme";
import BtnCapture from "@components/BtnCapture";

describe("BtnCapture", () => {
  it("should render ImagePNG when isCaptured is true", () => {
    renderWithTheme(<BtnCapture onPress={() => {}} isCaptured={true} />);
    expect(screen.getByTestId(testID.btn_capture)).toBeTruthy();
    expect(screen.queryByTestId(testID.no_captured_image)).toBeNull();
    expect(screen.getByTestId(testID.captured_image)).toBeTruthy();
  });

  it("should render ImageEmptyPNG when isCaptured is false", () => {
    renderWithTheme(<BtnCapture onPress={() => {}} isCaptured={false} />);
    expect(screen.getByTestId(testID.btn_capture)).toBeTruthy();
    expect(screen.queryByTestId(testID.captured_image)).toBeNull();
    expect(screen.getByTestId(testID.no_captured_image)).toBeTruthy();
  });

  it("should call onPress when the button is pressed", () => {
    const mockOnPress = jest.fn();
    renderWithTheme(<BtnCapture onPress={mockOnPress} isCaptured={true} />);
    
    fireEvent.press(screen.getByTestId(testID.btn_capture));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

import React from "react";
import { screen, fireEvent } from "@testing-library/react-native";
import { renderWithProvider } from "@tests/config/renderWithProvider";
import { CapturedContent } from "@screens/CapturedContent";
import { testID } from "@tests/constants/testId";
import {
  mockResumePokemonFormatted,
  mockResumePokemonsFormatted,
} from "@tests/__mocks__/pokemons";


describe("CapturedContent", () => {
  const handleNavigation = jest.fn();

  it("should render loading state correctly", () => {
    renderWithProvider(
      <CapturedContent
        isError={false}
        capturedPokemons={undefined}
        loading={true}
        handleNavigation={handleNavigation}
      />
    );

    expect(screen.getByTestId(testID.loading_indicator)).toBeTruthy();
  });

  it("should render error state correctly", () => {
    renderWithProvider(
      <CapturedContent
        isError={true}
        capturedPokemons={undefined}
        loading={false}
        handleNavigation={handleNavigation}
      />
    );
    expect(screen.getByText("Sorry! We had a problem")).toBeTruthy();
  });

  it("should render capturedPokemons correctly and handle navigation", () => {
    renderWithProvider(
      <CapturedContent
        isError={false}
        capturedPokemons={mockResumePokemonsFormatted}
        loading={false}
        handleNavigation={handleNavigation}
      />
    );

    expect(screen.getByTestId(testID.list_pokemons)).toBeTruthy();
    expect(screen.getByText("Pikachu")).toBeTruthy();
    expect(screen.getByText("Bulbasaur")).toBeTruthy();

    fireEvent.press(screen.getByText("Pikachu"));
    expect(handleNavigation).toHaveBeenCalledWith(mockResumePokemonFormatted);
  });
});

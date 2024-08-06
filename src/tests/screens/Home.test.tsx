import React from "react";
import { useNavigation } from "@react-navigation/native";
import { screen, fireEvent } from "@testing-library/react-native";
import { mockResumePokemonFormatted, mockResumePokemonsFormatted } from "@tests/__mocks__/pokemons";
import { renderWithProvider } from "@tests/config/renderWithProvider";
import useFetchPokemons from "@hooks/useFetchPokemons";
import Home from "@screens/Home";
import { testID } from "@tests/constants/testId";

jest.mock("@hooks/useFetchPokemons");
jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe("Home", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    (useFetchPokemons as jest.Mock).mockReturnValue({
      pokemons: mockResumePokemonsFormatted,
      loading: false,
      loadMore: jest.fn(),
      error: null,
    });
    renderWithProvider(<Home />);
    expect(screen.getByText("Pokédex")).toBeTruthy();
    expect(screen.getByTestId(testID.search_input)).toBeTruthy();
    expect(screen.getByTestId(testID.btn_capture)).toBeTruthy();
  });

  it("should navigate to details screen when a Pokémon is selected", () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });

    (useFetchPokemons as jest.Mock).mockReturnValue({
      pokemons: mockResumePokemonsFormatted,
      loading: false,
      loadMore: jest.fn(),
      error: null,
    });

    renderWithProvider(<Home />);

    fireEvent.press(screen.getByText("Pikachu"));
    expect(mockNavigate).toHaveBeenCalledWith("infoDetails", { pokemon: mockResumePokemonFormatted });
  });

  it("should navigate to capturedPokemons screen when the capture button is pressed", () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });

    (useFetchPokemons as jest.Mock).mockReturnValue({
      pokemons: mockResumePokemonsFormatted,
      loading: false,
      loadMore: jest.fn(),
      error: null,
    });

    renderWithProvider(<Home />);

    fireEvent.press(screen.getByTestId(testID.btn_capture));
    expect(mockNavigate).toHaveBeenCalledWith("capturedPokemons");
  });

  it("should filter Pokémon based on search text", () => {
    (useFetchPokemons as jest.Mock).mockReturnValue({
      pokemons: mockResumePokemonsFormatted,
      loading: false,
      loadMore: jest.fn(),
      error: null,
    });

    renderWithProvider(<Home />);

    fireEvent.changeText(screen.getByTestId(testID.search_input), "Pikachu");
    expect(screen.getByText("Pikachu")).toBeTruthy();
  });
});

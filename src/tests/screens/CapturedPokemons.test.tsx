import React from "react";
import { useNavigation } from "@react-navigation/native";
import { screen, fireEvent } from "@testing-library/react-native";
import { mockResumePokemonFormatted, mockResumePokemonsFormatted } from "@tests/__mocks__/pokemons";
import { renderWithProvider } from "@tests/config/renderWithProvider";
import { useCapturedPokemons } from "@hooks/useCapturedPokemons";
import CapturedPokemons from "@screens/CapturedPokemons";
import { testID } from "@tests/constants/testId";

jest.mock("@storage/storageCaptured", () => ({
  storageCapturedGet: jest.fn(),
  storageCapturedSave: jest.fn(),
}));

jest.mock("@hooks/useCapturedPokemons");

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(),
    useRoute: jest.fn().mockResolvedValue({
      params: {},
    }),
  };
});

describe("CapturedPokemons", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly screen", () => {
    (useCapturedPokemons as jest.Mock).mockReturnValue({
      capturedPokemons: CapturedPokemons,
      error: null,
      loading: false,
    });
    renderWithProvider(<CapturedPokemons />);
    expect(screen.getByText("Captured")).toBeTruthy();
    expect(screen.getByTestId(testID.list_pokemons)).toBeTruthy();
  });

  it("should navigate to details screen when a Pokemon is selected", () => {
    const mockNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });

    (useCapturedPokemons as jest.Mock).mockReturnValue({
      capturedPokemons: mockResumePokemonsFormatted,
      error: null,
      loading: false,
    });

    renderWithProvider(<CapturedPokemons />);

    fireEvent.press(screen.getByText("Pikachu"));
    expect(mockNavigate).toHaveBeenCalledWith("infoDetails", { pokemon: mockResumePokemonFormatted });
  });
});

import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react-native";
import { mockResumePokemonFormatted } from "@tests/__mocks__/pokemons";
import { renderWithProvider } from "@tests/config/renderWithProvider";
import InfoDetails from "@screens/InfoDetails";
import { checkIfCaptured, handleCapture } from "@helpers/pokemonCaptured";
import { capitalizeFirstLetter } from "@helpers/capitalizedFristLetter";

import { testID } from "@tests/constants/testId";

jest.mock("@helpers/pokemonCaptured", () => ({
  checkIfCaptured: jest.fn(),
  handleCapture: jest.fn(),
}));

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useRoute: jest.fn().mockReturnValue({
      params: { pokemon: mockResumePokemonFormatted },
    }),
  };
});

describe("InfoDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with Pokémon details", async () => {
    (checkIfCaptured as jest.Mock).mockResolvedValue(false);

    renderWithProvider(<InfoDetails />);

    expect(
      screen.getByText(capitalizeFirstLetter(mockResumePokemonFormatted.name))
    ).toBeTruthy();
    expect(screen.getByText("Capture Ratio:")).toBeTruthy();
    expect(screen.getByText("Species:")).toBeTruthy();
    expect(screen.getByText("Eggs:")).toBeTruthy();
    expect(screen.getByText("Abilities:")).toBeTruthy();

    expect(
      screen.getByText(`${mockResumePokemonFormatted.info.capture_rate}`)
    ).toBeTruthy();
    expect(
      screen.getByText(`${mockResumePokemonFormatted.details.species.name}`)
    ).toBeTruthy();

    mockResumePokemonFormatted.info.egg_groups.forEach((egg) => {
      expect(screen.getByText(`- ${egg.name}`)).toBeTruthy();
    });

    mockResumePokemonFormatted.details.abilities.forEach((ability) => {
      expect(screen.getByText(`- ${ability.ability.name}`)).toBeTruthy();
    });

    expect(screen.getByTestId(testID.header)).toBeTruthy();
  });

  describe("capitalizeFirstLetter", () => {
    it("should capitalize the first letter of a string", () => {
      expect(capitalizeFirstLetter("pikachu")).toBe("Pikachu");
      expect(capitalizeFirstLetter("charizard")).toBe("Charizard");
      expect(capitalizeFirstLetter("bulbasaur")).toBe("Bulbasaur");
    });

    it("should handle empty strings", () => {
      expect(capitalizeFirstLetter("")).toBe("");
    });

    it("should handle strings with multiple words", () => {
      expect(capitalizeFirstLetter("fire type")).toBe("Fire type");
    });
  });
});

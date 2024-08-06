import { ResumePokemonFormatted } from "@services/pokemon/types.pokemon";

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            infoDetails: {
                pokemon: ResumePokemonFormatted;
            }
        }
    }
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CapturedPokemons from "@screens/CapturedPokemons";
import Home from "@screens/Home";
import InfoDetails from "@screens/InfoDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}
    >
       <Screen name="home" component={Home} />
       <Screen name="infoDetails" component={InfoDetails} />
       <Screen name="capturedPokemons" component={CapturedPokemons} />
    </Navigator>
  );
}

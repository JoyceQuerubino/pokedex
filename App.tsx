import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import reactotron from './src/config/reactotron';
import Providers from '@contexts/Providers';
import Home from '@screens/Home';

if(__DEV__) reactotron.connect();

export default function App() {

const [ fontsLoaded ] = useFonts({
  Roboto_400Regular, Roboto_700Bold
})

  return (
    <Providers>
      <StatusBar style="light" />
      { fontsLoaded ? <Home /> : <ActivityIndicator size="large" color="white"/>}
   
    </Providers>
  );
}
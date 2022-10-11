import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native"
import MainScreen from "./src/MainScreen"

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MainScreen />
      </PaperProvider>
    </NavigationContainer>
  );
}

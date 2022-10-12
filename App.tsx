import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native"
import MainTabNavigator from './src/navigation/MainTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <MainTabNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

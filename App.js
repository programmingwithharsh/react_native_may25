import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {props => (
          <>
            <Header title="Welcome to Home" />
            <Home {...props} />
            <Footer navigation={props.navigation} />
          </>
        )}
      </Stack.Screen>
      <Stack.Screen name="About">
        {props => (
          <>
            <Header title="About Us" />
            <About />
            <Footer navigation={props.navigation} />
          </>
        )}
      </Stack.Screen>
      <Stack.Screen name="Contact">
        {props => (
          <>
            <Header title="Contact Us" />
            <Contact />
            <Footer navigation={props.navigation} />
          </>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

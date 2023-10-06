import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PlaylistScreen from './src/screens/PlaylistScreen';  
import TrackPlayer from 'react-native-track-player';


TrackPlayer.setupPlayer().then(() => {
  console.log("El reproductor está listo para ser usado");
});

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        {}
        {}
        <Stack.Screen name="Playlist" component={PlaylistScreen} />  // Añadir la pantalla PlaylistScreen al Navigator
        {}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

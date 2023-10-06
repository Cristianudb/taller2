import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, RouteProp, NavigationProp } from '@react-navigation/native';

import songsData from '../../songs.json';
import { Album, Genre } from './types';

type RootStackParamList = {
  Home: undefined;
  AlbumsScreen: { genre: string };
  TracksScreen: { albumId: string };
};

type AlbumsScreenRouteProp = RouteProp<RootStackParamList, 'AlbumsScreen'>;

const AlbumsScreen: React.FC<{ route: AlbumsScreenRouteProp }> = ({ route }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'AlbumsScreen'>>();
  const genreName = route.params.genre;
  const genreData: Genre | undefined = songsData.find(g => g.genre === genreName);
  const albums: Album[] = genreData ? genreData.albums : [];

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList 
        data={albums}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ marginBottom: 10 }}
            onPress={() => navigation.navigate('TracksScreen', { albumId: item.albumId })}
          >
            <Text>{item.title} by {item.artist}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.albumId}
      />
    </View>
  );
}

export default AlbumsScreen;


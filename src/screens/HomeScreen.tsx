import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Button, Image, TouchableOpacity } from 'react-native';
import TrackPlayer, { usePlaybackState, Event } from 'react-native-track-player';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import songsData from '../../songs.json';
import { Genre, Track } from './types';

type RootStackParamList = {
  Home: undefined;
  AlbumsScreen: { genre: string };
  SongDetail: { songId: string };
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'Home'>>();
  
  const playbackState = usePlaybackState();
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const play = async () => {
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  const next = async () => {
    await TrackPlayer.skipToNext();
  };

  const prev = async () => {
    await TrackPlayer.skipToPrevious();
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput 
        placeholder="Buscar..."
        style={{ padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <FlatList 
        data={songsData}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ marginBottom: 10 }}
            onPress={() => navigation.navigate('AlbumsScreen', { genre: item.genre })}
          >
            <Text>{item.genre}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.genre}
      />
      {currentTrack && (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#eee' }}>
          <Image source={{ uri: currentTrack.artwork }} style={{ width: 50, height: 50 }} />
          <Text style={{ flex: 1, marginLeft: 10 }}></Text>
          <TouchableOpacity onPress={play}>
            <Text>▶️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pause}>
            <Text>⏸️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={prev}>
            <Text>⏮️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={next}>
            <Text>⏭️</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'lightgray', padding: 10 }}>
        <Text>MusicUDB</Text>
      </View>
    </View>
  );
}

export default HomeScreen;

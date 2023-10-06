import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { RouteProp } from '@react-navigation/native';
import songsData from '../../songs.json';
import { Track } from './types';

type RootStackParamList = {
  Home: undefined;
  SongDetail: { songId: string };
};

type SongDetailScreenRouteProp = RouteProp<RootStackParamList, 'SongDetail'>;

const SongDetailScreen: React.FC<{ route: SongDetailScreenRouteProp }> = ({ route }) => {
  const songId = route.params.songId;

  let song: Track | null = null;
  for (const genre of songsData) {
    for (const album of genre.albums) {
      const foundSong = album.tracks.find(track => track.trackId === songId);
      if (foundSong) {
        song = foundSong;
        break;
      }
    }
    if (song) break;
  }

  const playSong = async () => {
    if (!song) return;

    // Encuentra el índice de la canción
    let allTracks = songsData.flatMap(genre => genre.albums.flatMap(album => album.tracks));
    let songIndex = allTracks.findIndex(track => track.trackId === songId);

    if (songIndex !== -1) {
      await TrackPlayer.skip(songIndex);
      TrackPlayer.play();
    }
  };

  if (!song) return <Text>Canción no encontrada</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: song.artwork }} style={{ width: 200, height: 200, alignSelf: 'center' }} />
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 15 }}>{song.title}</Text>
      <Button title="Reproducir" onPress={playSong} />
    </View>
  );
}

export default SongDetailScreen;


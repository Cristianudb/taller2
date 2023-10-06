import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const PlaylistScreen: React.FC = () => {
  // Por ahora, utilizaremos datos ficticios para las listas de reproducción
  const playlists = [
    { id: '1', name: 'Favoritos', tracks: ['track1', 'track2'] },
    { id: '2', name: 'Relajación', tracks: ['track3'] },
    // ... otras listas de reproducción ficticias
  ];

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 24, marginBottom: 15 }}>Listas de Reproducción</Text>
      <FlatList 
        data={playlists}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.name}</Text>
            {/* En el futuro, podrías añadir un botón para acceder a la lista y ver las canciones */}
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Crear Nueva Lista" onPress={() => {
        // En el futuro, implementarás una función para crear una nueva lista de reproducción
      }} />
    </View>
  );
}

export default PlaylistScreen;

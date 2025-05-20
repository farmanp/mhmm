
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PaletteScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text className="text-2xl">Palette Screen</Text>
      {/* Placeholder for color palette display */}
      <View style={{ marginTop: 20 }}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

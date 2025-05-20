
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text className="text-2xl mb-4">Welcome to mhmm!</Text>
      <Button title="Upload a photo" onPress={() => alert('Upload functionality to be implemented')} />
      <View style={{ marginTop: 20 }}>
        <Button title="Go to Palette" onPress={() => navigation.navigate('Palette')} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Go to Saved Looks" onPress={() => navigation.navigate('Saved')} />
      </View>
    </View>
  );
}

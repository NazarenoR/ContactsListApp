import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Contacts from './Contacts';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('My Contacts')}
      >
        <Text style={styles.buttonText}>My Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add Contact')}
      >
        <Text style={styles.buttonText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20
  }
});

export default HomeScreen;

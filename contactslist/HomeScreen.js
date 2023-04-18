import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Contacts from './Contacts';
import logo from './logo.png';

const appLogo = (<Image style={{height: 250, width: 370}} source={logo}/>);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>{appLogo}</View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('My Contacts')}
      >
        <Text style={styles.buttonText}>Contact List</Text>
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
    justifyContent: 'center',
    backgroundColor: '#3f48cc'
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderRadius: 5,
    width: '80%',
    height: '25%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 55,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logo: {
    alignItems: 'center',
  },
});

export default HomeScreen;

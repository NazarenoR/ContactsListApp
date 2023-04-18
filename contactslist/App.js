import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MyContactsScreen from './MyContactsScreen';
import ContactScreen from './ContactScreen';
import AddContactScreen from './AddContactScreen';
import ContactScreenStephen from './ContactScreenStephen';
import ContactScreenTim from './ContactScreenTim';
import ContactScreenRaf from './ContactScreenRaf';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="My Contacts" component={MyContactsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Add Contact" component={AddContactScreen} />
        <Stack.Screen name="ContactS" component={ContactScreenStephen} />
        <Stack.Screen name="ContactT" component={ContactScreenTim} />
        <Stack.Screen name="ContactR" component={ContactScreenRaf} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

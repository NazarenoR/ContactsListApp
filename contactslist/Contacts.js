import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Contact from './Contact';
import { init, insertContact, updateContact, deleteContact, fetchContacts } from './Database';

const Contacts = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    init()
      .then(() => fetchContacts())
      .then(result => setContacts(result.rows._array))
      .catch(error => console.error(error));
  }, []);

  const onAdd = () => {
    navigation.navigate('AddContact');
  };

  const onEdit = contact => {
    navigation.navigate('EditContact', { contact });
  };

  const onDelete = contact => {
    Alert.alert(
      'Delete Contact',
      `Are you sure you want to delete ${contact.firstName} ${contact.lastName}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => {
            deleteContact(contact.id)
              .then(() => fetchContacts())
              .then(result => setContacts(result.rows._array))
              .catch(error => console.error(error));
          },
          style: 'destructive'
        }
      ],
      { cancelable: false }
    );
  };

  const onPress = contact => {
    navigation.navigate('Contact', { contact });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Contact
            contact={item}
            onEdit={onEdit}
            onDelete={onDelete}
            onPress={onPress}
          />
        )}
        ListHeaderComponent={
          <TouchableOpacity onPress={onAdd} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  addButton: {
    backgroundColor: '#6b52ae',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
    },
    addButtonText: {
    color: '#fff',
    fontSize: 24
    }
    });
    
    export default Contacts;

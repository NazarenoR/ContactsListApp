import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Database from './Database';
import Contact from './Contact';
import ContactScreenStephen from './ContactScreenStephen';
import ContactScreenTim from './ContactScreenTim';
import ContactScreenRaf from './ContactScreenRaf';

const MyContactsScreen = ({navigation}) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const dbContacts = await Database.fetchContacts();
      setContacts(dbContacts);
    })();
  }, []);

  // second fetch logic
  useEffect(() => {
    const fetchData = async () => {
      const db = await Database.getInstance();
      const result = await db.selectAllContacts();
      setContacts(result);
    };
    fetchData();
  }, []);

  const handleAddContact = async () => {
    // navigate to the AddContact screen
  };

  const handleEditContact = async (contact) => {
    // navigate to the EditContact screen and pass the contact as a prop
  };

  const handleDeleteContact = async (contact) => {
    // prompt the user to confirm the delete operation
    // if the user confirms, delete the contact from the database and refresh the list of contacts
  };

  const handlePressContact = (contact) => {
    // navigate to the Contact screen and pass the contact as a prop
  };

  //mock data
  const DATA = [
    {
      id: '6jd97jdmc7wmndowfe67jd0j',
      fName: 'Stephen',
      lName: 'Graham',
      pNumber:'403 123 4242',
      eMail: 'tim@frantz.com',
      linkedIn: '',
      instagram: '',
      pageLink: 'ContactS',
    },
    {
      id: 'kjsldfjklsjflkvn932dn2w9',
      fName: 'Timothy',
      lName: 'Frantz',
      pNumber: '403 123 6969',
      eMail: 'stephen@graham.com',
      linkedIn: '',
      instagram: '',
      pageLink: 'ContactT',
    },
    {
      id: 'a9s8f4g9a8f465sbf86agarg',
      fName: 'Rafael',
      lName: 'Nazareno',
      pNumber: '403 123 0000',
      eMail: 'rafael@nazareno.com',
      linkedIn: '',
      instagram: '',
      pageLink: 'ContactR',
    },
  ];
  
  const Item = ({fName, navigation, pageLink}) => (
    <TouchableOpacity onPress={() => navigation.navigate({name: pageLink}) } style={styles.item} >
      <Text style={styles.letter}>{fName}</Text>
    </TouchableOpacity>

  );
  

  return (
    <>

    <View style={styles.container}>
    <FlatList
        data={DATA}
        renderItem={({item}) => <Item fName={item.fName} navigation={navigation} pageLink={item.pageLink}/>}
        keyExtractor={item => item.id}
        
      />
    </View>
    

    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Contact
            contact={item}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
            onPress={handlePressContact}
          />
        )}
      />
      <TouchableOpacity onPress={handleAddContact} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
    
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addButton: {
    backgroundColor: '#333',
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
  },
  item: {
    backgroundColor: '#3653a1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowRadius: 5,
    borderRadius: 16,
  },
  letter: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MyContactsScreen;

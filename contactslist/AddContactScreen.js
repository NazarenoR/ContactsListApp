import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Database, {init, insertContact} from './Database';

const AddContactScreen = ({ navigation }) => {

    useEffect(() => {
        init()
        
          //.then(() => fetchContacts())
          //.then(result => setContacts(result.rows._array))
          //.catch(error => console.error(error));
      }, []);

  //const [state, setState] = ({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [linkedinLink, setLinkedInLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');

  const handleSaveContact = () => {
   //const { firstName, lastName, phoneNumber, email, linkedinLink, instagramLink } = state;
    insertContact(firstName, lastName, phoneNumber, email, linkedinLink, instagramLink);
    console.log(firstName, lastName, phoneNumber, email, linkedinLink, instagramLink);
    navigation.goBack();
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ADD  CONTACT</Text>
      <View style={styles.containerForm}>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.textInput}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.textInput}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>LinkedIn:</Text>
          <TextInput
            style={styles.textInput}
            value={linkedinLink}
            onChangeText={setLinkedInLink}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Instagram:</Text>
          <TextInput
            style={styles.textInput}
            value={instagramLink}
            onChangeText={setInstagramLink}
          />
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleSaveContact} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#3f48cc'
},
containerForm: {
backgroundColor: 'black',
borderRadius: 16,
padding: 10,
},
header: {
fontSize: 36,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center',
color: 'white'
},
detailsContainer: {
flexDirection: 'row',
marginBottom: 15,
marginTop: 10,
backgroundColor: 'white',
padding: 5,
paddingTop: 10,
paddingBottom: 10,
borderRadius: 7,
},
label: {
fontWeight: 'bold',
width: 120
},
textInput: {
fontSize: 20,
flex: 1,
borderWidth: 1,
borderRadius: 7,
},
actionsContainer: {
flexDirection: 'row',
justifyContent: 'center',
marginTop: 20
},
actionButton: {
padding: 10,
backgroundColor: '#ddd',
marginLeft: 10,
borderRadius: 7,
backgroundColor: 'black',
},
actionButtonText: {
fontSize: 20,
color: 'white',
fontWeight: 'bold'
}
});

export default AddContactScreen;

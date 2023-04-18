import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Contacts from './Contacts';

const ContactScreen = ({ route, navigation }) => {
  
  const DATA = [
    {
      id: 'kjsldfjklsjflkvn932dn2w9',
      fName: 'Timothy',
      lName: 'Frantz',
      pNumber: '403 123 6969',
      eMail: 'tim@frantz.com',
      linkedIn: '',
      instagram: '',
      pageLink: 'ContactT',
    },
  ];
  

    const [isEditing, setIsEditing] = useState(false);
    const [fName, setFName] = useState(DATA[0].fName);
    const [lName, setLName] = useState(DATA[0].lName);
    const [pNumber, setPNumber] = useState(DATA[0].pNumber);
    const [eMail, setEMail] = useState(DATA[0].eMail);
    const [linkedIn, setLinkedIn] = useState(DATA[0].linkedIn);
    const [instagram, setInstagram] = useState(DATA[0].instagram);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
    };
  
    const handleDelete = () => {
      // code to delete contact
    };
  
    const setPhoneNumber = (text) => {
      setPNumber(text);
    };
  
    const setEmail = (text) => {
      setEMail(text);
    };
  
    const setLinkedinLink = (text) => {
      setLinkedIn(text);
    };
  
    const setInstagramLink = (text) => {
      setInstagram(text);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {fName} {lName}
      </Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={pNumber}
            onChangeText={setPhoneNumber}
          />
        ) : (
          <Text style={styles.text}>{pNumber}</Text>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email:</Text>
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={eMail}
            onChangeText={setEmail}
          />
        ) : (
          <Text style={styles.text}>{eMail}</Text>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>LinkedIn:</Text>
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={linkedIn}
            onChangeText={setLinkedinLink}
          />
        ) : (
          <Text style={styles.text}>{linkedIn}</Text>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Instagram:</Text>
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={instagram}
            onChangeText={setInstagramLink}
          />
        ) : (
          <Text style={styles.text}>{instagram}</Text>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
          
          const styles = StyleSheet.create({
          container: {
          flex: 1,
          padding: 20
          },
          header: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20
          },
          detailsContainer: {
          flexDirection: 'row',
          marginBottom: 20
          },
          label: {
          fontWeight: 'bold',
          width: 120
          },
          text: {
          fontSize: 20
          },
          textInput: {
          fontSize: 20,
          flex: 1
          },
          buttonsContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
          },
          button: {
          backgroundColor: 'lightgray',
          padding: 10,
          borderRadius: 5
          },
          buttonText: {
          fontSize: 20
          }
          });
          
          export default ContactScreen;

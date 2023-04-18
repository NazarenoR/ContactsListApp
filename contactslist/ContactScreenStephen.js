import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Contacts from './Contacts';

const ContactScreenStephen = ({ route, navigation }) => {
  
  const DATA = [
    {
      id: '6jd97jdmc7wmndowfe67jd0j',
      fName: 'Stephen',
      lName: 'Graham',
      pNumber:'403 123 4242',
      eMail: 'stephen@graham.com',
      linkedIn: 'https://www.linkedin.com/in/stephenmgraham/',
      instagram: 'https://www.instagram.com/maelich/',
      pageLink: 'ContactS',
    },
    {
      id: 'kjsldfjklsjflkvn932dn2w9',
      fName: 'Timothy',
      lName: 'Frantz',
      pNumber: '403 123 6969',
      eMail: 'tim@frantz.com',
      linkedIn: 'https://www.linkedin.com/in/timothy-frantz-0b443b1/',
      instagram: 'https://www.instagram.com/timothydfrantz/',
      pageLink: 'ContactT',
    },
    {
      id: 'a9s8f4g9a8f465sbf86agarg',
      fName: 'Rafael',
      lName: 'Nazareno',
      pNumber: '403 123 0000',
      eMail: 'rafael@nazareno.com',
      linkedIn: 'https://www.linkedin.com/in/rafaelnazareno/',
      instagram: 'https://www.instagram.com/rafanazareno_/',
      pageLink: 'ContactR',
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
      <View style={styles.detailsContainerMain}>
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
      <>
        {isEditing ? (
          <View style={styles.detailsContainer}>
          <Text style={styles.label}>LinkedIn:</Text>
          <TextInput
            style={styles.textInput}
            value={linkedIn}
            onChangeText={setLinkedinLink}
          />
          </View>
        ) : (
          <View style={styles.detailsContainerLinks}>
          <Text style={styles.labelLinks}>LINKEDIN</Text>
          <TouchableOpacity style={styles.buttonL} onPress={() => Linking.openURL(linkedIn)}>
              <Text style={styles.buttonTextB}>in</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
      <>
        {isEditing ? (
          <View style={styles.detailsContainer}>
          <Text style={styles.label}>Instagram:</Text>
          <TextInput
            style={styles.textInput}
            value={instagram}
            onChangeText={setInstagramLink}
          />
          </View>
        ) : (
          <View style={styles.detailsContainerLinks}>
          <Text style={styles.labelLinks}>INSTAGRAM</Text>
          <TouchableOpacity style={styles.buttonI} onPress={() => Linking.openURL(instagram)}>
              <Text style={styles.buttonTextB}>[o]</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
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
          padding: 20,
          backgroundColor: '#3f48cc'
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
          detailsContainerLinks: {
            flexDirection: 'column',
            marginBottom: 15,
            marginTop: 10,
            padding: 5,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
            },
          detailsContainerMain: {
            backgroundColor: 'black',
            borderRadius: 16,
            padding: 10,
            },
          label: {
          fontWeight: 'bold',
          width: 120,
          },
          labelLinks: {
            fontWeight: 'bold',
            color: 'white',
            width: 120,
            textAlign: 'center',
            },
          text: {
          fontSize: 20
          },
          textInput: {
          fontSize: 20,
          flex: 1,
          borderWidth: 1,
          borderRadius: 7,
          padding: 5,
          },
          buttonsContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
          },
          button: {
          padding: 10,
          marginLeft: 10,
          borderRadius: 7,
          backgroundColor: 'black',
          },
          buttonText: {
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          },
          buttonL: {
            padding: 10,
            marginTop: 15,
            borderRadius: 1000,
            backgroundColor: 'blue',
            width: 100,
            height: 100,
            justifyContent: 'center',
          },
          buttonI: {
            padding: 10,
            marginTop: 15,
            borderRadius: 1000,
            backgroundColor: '#ff0077',
            width: 100,
            height: 100,
            justifyContent: 'center',
          },
          buttonTextB: {
            fontSize: 45,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            },
          });
          
          export default ContactScreenStephen;

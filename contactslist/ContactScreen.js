import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Contacts from './Contacts';

const ContactScreen = ({ route, navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(route.params.firstName);
  const [lastName, setLastName] = useState(route.params.lastName);
  const [phoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
  const [email, setEmail] = useState(route.params.email);
  const [linkedinLink, setLinkedinLink] = useState(route.params.linkedinLink);
  const [instagramLink, setInstagramLink] = useState(route.params.instagramLink);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            Contacts.deleteContact(route.params.id, () => navigation.goBack());
          }
        }
      ],
      { cancelable: false }
    );
  };

  const handleSave = () => {
    Contacts.updateContact(
      route.params.id,
      {
        firstName,
        lastName,
        phoneNumber,
        email,
        linkedinLink,
        instagramLink
      },
      () => {
        setIsEditing(false);
      }
    );
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFirstName(route.params.firstName);
    setLastName(route.params.lastName);
    setPhoneNumber(route.params.phoneNumber);
    setEmail(route.params.email);
    setLinkedinLink(route.params.linkedinLink);
    setInstagramLink(route.params.instagramLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {firstName} {lastName}
      </Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        ) : (
          <Text style={styles.text}>{phoneNumber}</Text>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Email:</Text>
        {isEditing ? (
          <TextInput style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          />
          ) : (
          <Text style={styles.text}>{email}</Text>
          )}
          </View>
          <View style={styles.detailsContainer}>
          <Text style={styles.label}>LinkedIn:</Text>
          {isEditing ? (
          <TextInput
                   style={styles.textInput}
                   value={linkedinLink}
                   onChangeText={setLinkedinLink}
                 />
          ) : (
          <Text style={styles.text}>{linkedinLink}</Text>
          )}
          </View>
          <View style={styles.detailsContainer}>
          <Text style={styles.label}>Instagram:</Text>
          {isEditing ? (
          <TextInput
                   style={styles.textInput}
                   value={instagramLink}
                   onChangeText={setInstagramLink}
                 />
          ) : (
          <Text style={styles.text}>{instagramLink}</Text>
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
          };
          
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

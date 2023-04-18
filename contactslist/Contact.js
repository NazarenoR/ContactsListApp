import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Contact = ({ contact, onEdit, onDelete, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(contact)} style={styles.contactContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{contact.firstName} {contact.lastName}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onEdit(contact)} style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(contact)} style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textContainer: {
    flex: 1
  },
  nameText: {
    fontSize: 18
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    padding: 10
  },
  buttonText: {
    fontSize: 16
  }
});

export default Contact;

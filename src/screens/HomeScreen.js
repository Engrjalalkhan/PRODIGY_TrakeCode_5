/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45, marginBottom: 50, color: 'black' }}>Welcome to QR Scanner</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Create')}>
          <Icon name="add-circle-outline" size={40} color="#4CAF50" />
          <Text style={styles.cardText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Icon name="qr-code-outline" size={40} color="#4CAF50" />
          <Text style={styles.cardText}>Scan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Print')}>
          <Icon name="print-outline" size={40} color="#4CAF50" />
          <Text style={styles.cardText}>Print</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Send')}>
          <Icon name="logo-whatsapp" size={40} color="#4CAF50" />
          <Text style={styles.cardText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Background color of the screen
    marginBottom:100
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    width: '40%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // Elevation for Android
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
});

export default HomeScreen;

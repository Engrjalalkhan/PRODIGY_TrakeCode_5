// CreateScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CreateScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [qrCodes, setQrCodes] = useState([]);

  const handleGenerateQRCode = () => {
    const qrData = { name, email, address };
    setQrCodes([...qrCodes, JSON.stringify(qrData)]);
    setName('');
    setEmail('');
    setAddress('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.label}>Welcome to Generate QR </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerateQRCode}>
        <Text style={styles.buttonText}>Generate QR Code</Text>
      </TouchableOpacity>
      {qrCodes.map((qrValue, index) => (
        <View key={index} style={styles.qrContainer}>
          <QRCode value={qrValue} size={200} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qrContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default CreateScreen;

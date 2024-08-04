/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the WhatsApp icon

const SendScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        cropping: false,
      });
      setImageUri(image.path);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to select image');
    }
  };

  const handleShareWhatsApp = () => {
    if (!imageUri) {
      Alert.alert('No Image', 'Please select an image to share');
      return;
    }

    const shareOptions = {
      title: 'Share via WhatsApp',
      url: imageUri,
      social: Share.Social.WHATSAPP,
    };

    Share.shareSingle(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', 'Failed to share via WhatsApp');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send QR Code Image via WhatsApp</Text>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>
      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <TouchableOpacity style={styles.whatsappButton} onPress={handleShareWhatsApp}>
            <Icon name="whatsapp" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  whatsappButton: {
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SendScreen;

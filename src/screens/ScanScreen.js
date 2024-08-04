/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {RNCamera} from 'react-native-camera';
import {
  scanBarcodes,
  BarcodeFormat,
} from '@react-native-ml-kit/barcode-scanning';

const ScanScreen = () => {
  const [image, setImage] = useState(null);
  const [decodedInfo, setDecodedInfo] = useState(null);

  const selectImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setImage(image.path);
      decodeQRCode(image.path);
    } catch (error) {
      console.log(error);
    }
  };

  const decodeQRCode = async imagePath => {
    try {
      const barcodes = await scanBarcodes(imagePath, [BarcodeFormat.QR_CODE]);
      if (barcodes.length > 0) {
        setDecodedInfo(barcodes[0].rawValue);
      } else {
        Alert.alert('No QR code detected');
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Failed to decode QR code',
        ' you can also use the QR Scanner instead of this Scan.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text style={styles.buttonText}>Select QR Code Image</Text>
      </TouchableOpacity>
      {image && <Image source={{uri: image}} style={styles.image} />}
      {decodedInfo && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Decoded Information:</Text>
          <Text style={styles.infoText}>{decodedInfo}</Text>
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
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default ScanScreen;

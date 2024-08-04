/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Alert, Linking, Dimensions, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { BarCodeReadEvent } from 'react-native-camera';

const { width, height } = Dimensions.get('window');
const scannerSize = 250;

const QRScannerScreen = () => {
  const scannerRef = useRef(null);

  const handleQRCodeRead = (event: BarCodeReadEvent) => {
    const { data } = event;
    Alert.alert('QR Code Data', data, [
      {
        text: 'Open Link',
        onPress: () => {
          if (data.startsWith('http')) {
            Linking.openURL(data);
          }
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const handleCancel = () => {
    if (scannerRef.current) {
      scannerRef.current.reactivate();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.centerText}>Scan a QR Code</Text>
      </View>
      <QRCodeScanner
        ref={scannerRef}
        onRead={handleQRCodeRead}
        cameraStyle={styles.cameraStyle}
        topViewStyle={styles.zeroContainer}
        bottomViewStyle={styles.zeroContainer}
        showMarker={true}
        customMarker={
          <View style={styles.markerContainer}>
            <View style={styles.maskRow}></View>
            <View style={styles.maskCenter}>
              <View style={styles.maskColumn}></View>
              <View style={styles.scanner}></View>
              <View style={styles.maskColumn}></View>
            </View>
            <View style={styles.maskRow}></View>
          </View>
        }
      />
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={handleCancel}
        activeOpacity={0.8}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: (height - scannerSize) / 2 - 100, // Adjust this value as needed
    zIndex: 1,
  },
  cameraStyle: {
    height: height,
    width: width,
  },
  markerContainer: {
    position: 'absolute',
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    top: -50,  // Move the scanner up
  },
  maskRow: {
    width: '100%',
    height: (height - scannerSize) / 2,
    backgroundColor: '#fff',
  },
  maskCenter: {
    flexDirection: 'row',
  },
  maskColumn: {
    width: (width - scannerSize) / 2,
    height: scannerSize,
    backgroundColor: '#fff',
  },
  scanner: {
    width: scannerSize,
    height: scannerSize,
    borderWidth: 2,
    borderColor: '#000',
  },
  zeroContainer: {
    height: 0,
    flex: 0,
  },
  centerText: {
    fontSize: 18,
    padding: 16,
    textAlign: 'center',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 50,  // Position the button above the bottom of the screen
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  cancelButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default QRScannerScreen;

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from 'native-base';

function Page1({ handleNextClick, handleChoosePhoto, fileSource }) {
  return (
    <View style={styles.container}>
      <Button style={styles.chooseButton} onPress={handleChoosePhoto}>
        <Text style={styles.buttonText}>Choose Photo</Text>
      </Button>
      
      {fileSource && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: fileSource }} style={styles.imageStyle} />
          <Button style={styles.nextButton} onPress={handleNextClick}>
            <Text style={styles.buttonText}>Next</Text>
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseButton: {
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'white',
    borderWidth: 1,
    width: '80%',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 15,
  },
  nextButton: {
    marginTop: 10,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Page1;

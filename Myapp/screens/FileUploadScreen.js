import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import LottieView from 'lottie-react-native';
function FileUploadScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Button style={styles.uploadButton} onPress={() => navigation.navigate('ChoosePhoto')}>
      <LottieView style={styles.lottie} source={require('../Lottie/source/image.json')} autoPlay loop />
        <Text style={styles.buttonText}>Photo Upload</Text>
      </Button>
      <Button style={styles.uploadButton} onPress={() => navigation.navigate('ChooseVideo')}>
      <LottieView style={styles.lottie} source={require('../Lottie/source/video.json')} autoPlay loop />
        <Text style={styles.buttonText}>Video Upload</Text>
      </Button>
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
  uploadButton: {
    marginVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'white',
    borderWidth: 1,
    height: "30%",
    width: '80%',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  lottie: {
    
      height: "80%",
      width: "80%",
      marginTop: 0
  }
});

export default FileUploadScreen;

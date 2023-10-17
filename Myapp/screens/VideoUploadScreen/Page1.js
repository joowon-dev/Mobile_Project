import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base'; 
import Video from 'react-native-video'; 

function Page1({ handleNextClick, handleChooseVideo, fileSource }) {
  return (
    <View style={styles.container}>
      <Button style={styles.uploadButton} onPress={handleChooseVideo}>
        <Text style={styles.buttonText}>Choose Video</Text>
      </Button>
      {fileSource && (
        <>
          {/* Display the selected video */}
          <Video 
            source={{ uri: fileSource }} 
            style={styles.videoStyle} 
            controls={true} 
          />
          <Button style={styles.uploadButton} onPress={handleNextClick}>
            <Text style={styles.buttonText}>Next</Text>
          </Button>
        </>
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
  uploadButton: {
    marginVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'white',
    borderWidth: 1,
    width: '80%',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  videoStyle: {
    width: 300,
    height: 300,
    marginVertical: 10
  }
});

export default Page1;
